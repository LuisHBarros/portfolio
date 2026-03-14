Imagine you charge a subscription: the database commits the payment record, then you publish a `PaymentConfirmed` event to RabbitMQ. What happens if the app crashes between the two? The DB has the money, but the email service never fires. The customer never receives their receipt. That's a dual-write problem.

## Outbox Pattern

The solution: write the event to an `outbox` table in the same local DB transaction as the payment record. A separate relay process polls the outbox and publishes to the broker — marking rows as published only on success.

```sql
-- Same transaction: payment + outbox row
BEGIN;
  INSERT INTO payments(id, amount, status) VALUES(...);
  INSERT INTO outbox(id, aggregate_type, payload, published)
         VALUES(gen_random_uuid(), 'PaymentConfirmed', :json, false);
COMMIT;
```

## The relay

In Assine I implemented the relay as a scheduled Spring component. It reads unpublished rows, publishes each to RabbitMQ, and only then marks them published. If publishing fails, the row stays unpublished and will be retried on the next tick.

> The trade-off: at-least-once delivery. Your consumers must be idempotent. But that's a much easier problem than losing events entirely.
