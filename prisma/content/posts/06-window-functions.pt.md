No meu trabalho, lido rotineiramente com schemas Oracle que rastreiam movimentos de produção industrial. Um requisito clássico: para cada produto, ranquear movimentos por data e calcular um custo acumulado. A abordagem júnior é um cursor com variáveis. A abordagem set-based usa window functions.

```sql
-- Custo acumulado + ranking por produto, zero cursors
SELECT
    product_code,
    movement_date,
    unit_cost,
    ROW_NUMBER() OVER (
        PARTITION BY product_code
        ORDER BY     movement_date
    ) AS movement_rank,
    SUM(unit_cost) OVER (
        PARTITION BY product_code
        ORDER BY     movement_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM   movimento
ORDER  BY product_code, movement_date;
```

## LAG para cálculos de delta

```sql
-- Delta de custo vs. movimento anterior
SELECT
    product_code,
    movement_date,
    unit_cost,
    unit_cost - LAG(unit_cost) OVER (
        PARTITION BY product_code ORDER BY movement_date
    ) AS cost_delta
FROM movimento;
```

> Window functions executam depois do WHERE e GROUP BY, mas antes do ORDER BY. Pense nelas como uma segunda passagem sobre linhas já filtradas — o que as torna compostas com CTEs para queries analíticas notavelmente legíveis.
