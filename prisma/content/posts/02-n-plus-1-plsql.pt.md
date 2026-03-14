Na Nova Smar, herdei stored procedures que acumulavam lógica de negócio havia anos. Uma delas processava milhares de registros de produção por execução — e era inexplicavelmente lenta. O profiling revelou o culpado: um SELECT dentro de um loop de cursor.

## A armadilha clássica

```sql
-- ❌ N+1: um SELECT extra por linha no cursor
FOR rec IN (SELECT id, product_code FROM movimento) LOOP
    SELECT unit_cost INTO v_cost
    FROM   products
    WHERE  code = rec.product_code;   -- disparado N vezes!
    -- ... processa rec
END LOOP;
```

## A correção: subir o join

```sql
-- ✅ Passagem única com join na query principal
FOR rec IN (
    SELECT m.id, m.product_code, p.unit_cost
    FROM   movimento  m
    JOIN   products   p ON p.code = m.product_code
) LOOP
    -- rec.unit_cost já está aqui, sem round-trip extra
END LOOP;
```

Quando evitar o join não é possível — ex: lookups condicionais — um `BULK COLLECT INTO` com `FORALL` DML, ou um array associativo pré-populado, pode eliminar os round-trips por completo.

> Regra de ouro: se você for usar um SELECT dentro de um loop, pause e pergunte se uma query set-based — ou no pior caso um bulk collect — pode substituí-lo.
