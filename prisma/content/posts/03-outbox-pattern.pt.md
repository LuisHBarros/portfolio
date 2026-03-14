Imagine que você cobra uma assinatura: o banco commita o registro de pagamento, depois você publica um evento `PaymentConfirmed` no RabbitMQ. O que acontece se a app travar entre os dois? O banco tem o dinheiro, mas o serviço de e-mail nunca dispara. O cliente nunca recebe o comprovante. Isso é o problema de dual-write.

## Outbox Pattern

A solução: escrever o evento em uma tabela `outbox` na mesma transação local do banco que o registro de pagamento. Um processo relay separado faz polling do outbox e publica no broker — marcando as linhas como publicadas somente em caso de sucesso.

```sql
-- Mesma transação: pagamento + linha no outbox
BEGIN;
  INSERT INTO payments(id, amount, status) VALUES(...);
  INSERT INTO outbox(id, aggregate_type, payload, published)
         VALUES(gen_random_uuid(), 'PaymentConfirmed', :json, false);
COMMIT;
```

## O relay

No Assine, implementei o relay como um componente Spring com agendamento. Ele lê as linhas não publicadas, publica cada uma no RabbitMQ e só então as marca como publicadas. Se a publicação falhar, a linha permanece não publicada e será reprocessada no próximo tick.

> O trade-off: entrega at-least-once. Seus consumidores precisam ser idempotentes. Mas isso é um problema muito mais fácil do que perder eventos.
