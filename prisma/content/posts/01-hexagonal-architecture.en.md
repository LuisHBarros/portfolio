When I started the Discord-Like project I could have wired Spring controllers directly to JPA repositories and called it a day. Most tutorials do exactly that. But I'd seen enough legacy codebases at work — tightly coupled PHP and PL/SQL monstrosities — to know where that road ends.

## The core idea

Hexagonal Architecture (Ports & Adapters) says: your domain model should have zero knowledge of Spring, JPA, Kafka, or HTTP. It talks only to interfaces — Ports — which the infrastructure implements as Adapters. Swap Kafka for RabbitMQ? Touch one adapter. Switch from PostgreSQL to MongoDB? One adapter. Your domain tests don't even need a running database.

```java
// Domain — pure Java, zero framework annotations
public interface MessageRepository {          // OUTPUT PORT
    void save(Message message);
    Optional<Message> findById(MessageId id);
}

// Infrastructure — the Spring/JPA adapter
@Repository
public class JpaMessageRepository implements MessageRepository {
    private final MessageJpaRepository jpa;
    // ...JPA implementation here
}
```

## What I gained in practice

- 145 tests run with zero Docker — domain logic tested with pure mocks
- Kafka, Redis and PostgreSQL swappable without touching domain code
- Onboarding new contributors is much faster — the domain reads like a business spec
- Forced me to think in use cases first, not tables or endpoints

> The biggest benefit isn't technical — it's cognitive. When the infrastructure is invisible, you think in domain terms and write better software.
