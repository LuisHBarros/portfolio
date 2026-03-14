At Nova Smar, I inherited stored procedures that had been accumulating business logic for years. One of them processed thousands of production records per run — and was inexplicably slow. Profiling revealed the culprit: a SELECT inside a cursor loop.

## The classic trap

```sql
-- ❌ N+1: one extra SELECT per row in the cursor
FOR rec IN (SELECT id, product_code FROM movimento) LOOP
    SELECT unit_cost INTO v_cost
    FROM   products
    WHERE  code = rec.product_code;   -- fired N times!
    -- ... process rec
END LOOP;
```

## The fix: push the join up

```sql
-- ✅ Single pass with a join in the driving query
FOR rec IN (
    SELECT m.id, m.product_code, p.unit_cost
    FROM   movimento  m
    JOIN   products   p ON p.code = m.product_code
) LOOP
    -- rec.unit_cost is already here, no extra round-trip
END LOOP;
```

When avoiding the join isn't possible — e.g. conditional lookups — a bulk `COLLECT INTO` with a `FORALL` DML, or a pre-populated associative array, can eliminate the round-trips entirely.

> Rule of thumb: if you reach for a SELECT inside a loop, pause and ask whether a single set-based query — or at worst a bulk collect — can replace it.
