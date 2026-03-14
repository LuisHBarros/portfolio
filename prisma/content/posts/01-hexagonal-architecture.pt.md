Quando comecei o projeto Discord-Like, eu poderia ter ligado os controllers do Spring direto aos repositories JPA e chamado de dia. A maioria dos tutoriais faz exatamente isso. Mas já tinha visto código legado suficiente no trabalho — PHP e PL/SQL fortemente acoplados — para saber onde esse caminho termina.

## A ideia central

A Arquitetura Hexagonal (Ports & Adapters) diz: o modelo de domínio não deve ter conhecimento algum de Spring, JPA, Kafka ou HTTP. Ele fala apenas com interfaces — Ports — que a infraestrutura implementa como Adapters. Trocar Kafka por RabbitMQ? Mexe num adapter. Mudar de PostgreSQL para MongoDB? Um adapter. Os testes de domínio nem precisam de banco rodando.

```java
// Domínio — Java puro, zero anotações de framework
public interface MessageRepository {          // OUTPUT PORT
    void save(Message message);
    Optional<Message> findById(MessageId id);
}

// Infraestrutura — o adapter Spring/JPA
@Repository
public class JpaMessageRepository implements MessageRepository {
    private final MessageJpaRepository jpa;
    // ...implementação JPA aqui
}
```

## O que ganhei na prática

- 145 testes rodam sem Docker — lógica de domínio testada com mocks puros
- Kafka, Redis e PostgreSQL intercambiáveis sem tocar no código de domínio
- Onboarding de novos contribuidores muito mais rápido — o domínio lê como uma especificação de negócio
- Me forçou a pensar em casos de uso primeiro, não em tabelas ou endpoints

> O maior benefício não é técnico — é cognitivo. Quando a infraestrutura é invisível, você pensa em termos de domínio e escreve software melhor.
