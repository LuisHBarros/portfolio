In my day job I routinely work with Oracle schemas that track industrial production movements. A classic requirement: for each product, rank movements by date and compute a running cost total. The junior approach is a cursor with variables. The set-based approach uses window functions.

```sql
-- Running cost total + rank per product, zero cursors
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

## LAG for delta calculations

```sql
-- Cost delta vs. previous movement
SELECT
    product_code,
    movement_date,
    unit_cost,
    unit_cost - LAG(unit_cost) OVER (
        PARTITION BY product_code ORDER BY movement_date
    ) AS cost_delta
FROM movimento;
```

> Window functions execute after WHERE and GROUP BY but before ORDER BY. Think of them as a second pass over already-filtered rows — which makes them composable with CTEs for remarkably readable analytical queries.
