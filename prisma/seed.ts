import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.experienceBullet.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.projectBullet.deleteMany()
  await prisma.projectTag.deleteMany()
  await prisma.project.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.skillCategory.deleteMany()
  await prisma.postTag.deleteMany()
  await prisma.post.deleteMany()
  await prisma.contactInfo.deleteMany()
  await prisma.education.deleteMany()

  // ── EXPERIÊNCIAS ────────────────────────────────────────────────────────────

  await prisma.experience.create({
    data: {
      order: 1,
      titleEn: "Software Development Analyst",
      titlePt: "Analista de Desenvolvimento de Software",
      dateEn: "May 2025 – Present",
      datePt: "Mai 2025 – Presente",
      company: "Nova Smar S/A",
      location: "Sertãozinho, SP",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Technically led full stack product development for external clients, making architecture and UX decisions, coordinating deliveries, and driving implementation end-to-end.",
            textPt:
              "Liderei tecnicamente o desenvolvimento de novos produtos full stack para clientes externos, tomando decisões de arquitetura e UX, coordenando entregas e conduzindo a implementação de ponta a ponta.",
          },
          {
            order: 2,
            textEn:
              "Eliminated critical PL/SQL performance bottlenecks in Oracle Database, fixing N+1 query patterns and improving data access efficiency in high-volume production routines.",
            textPt:
              "Eliminei gargalos críticos de performance em PL/SQL no Oracle Database, corrigindo padrões de N+1 queries e reduzindo o tempo de execução de rotinas estratégicas em produção.",
          },
          {
            order: 3,
            textEn:
              "Mentored 2–3 junior developers and interns, conducting technical onboarding and disseminating Clean Architecture and SOLID best practices.",
            textPt:
              "Mentorei 2–3 desenvolvedores e estagiários, conduzindo onboarding técnico e disseminando boas práticas de Clean Architecture e SOLID.",
          },
          {
            order: 4,
            textEn:
              "Integrated AI-assisted tooling (ChatGPT, Claude) into the development workflow and automated internal processes, increasing team productivity.",
            textPt:
              "Integrei ferramentas de IA ao fluxo de desenvolvimento e automatizei processos internos, aumentando a produtividade do time.",
          },
        ],
      },
    },
  })

  await prisma.experience.create({
    data: {
      order: 2,
      titleEn: "Programming Assistant",
      titlePt: "Assistente de Programação",
      dateEn: "Nov 2024 – May 2025",
      datePt: "Nov 2024 – Mai 2025",
      company: "Nova Smar S/A",
      location: "Sertãozinho, SP",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Refactored legacy PL/SQL procedures in Oracle Database — eliminated SQL injection vectors via bind variables and replaced magic numbers with named constants.",
            textPt:
              "Refatorei procedures PL/SQL legadas no Oracle Database — eliminei vetores de SQL injection via bind variables e substituí magic numbers por constantes nomeadas.",
          },
          {
            order: 2,
            textEn:
              "Maintained and evolved PHP 5 legacy systems applying SOLID principles, improving maintainability and extensibility of critical business logic modules.",
            textPt:
              "Mantive e evoluí sistemas legados em PHP 5 aplicando princípios SOLID, melhorando manutenibilidade e extensibilidade dos módulos de lógica de negócio.",
          },
          {
            order: 3,
            textEn:
              "Conducted technical discovery sessions with business stakeholders to adapt legacy systems to web-based environments.",
            textPt:
              "Conduzi levantamentos técnicos com áreas de negócio para adaptação de sistemas legados ao ambiente web.",
          },
          {
            order: 4,
            textEn:
              "Promoted to Development Analyst within 6 months — one of the fastest advancement trajectories in the team.",
            textPt:
              "Promovido a Analista de Desenvolvimento em 6 meses — uma das progressões mais rápidas da equipe.",
          },
        ],
      },
    },
  })

  await prisma.experience.create({
    data: {
      order: 3,
      titleEn: "Full Stack Developer",
      titlePt: "Desenvolvedor Full Stack",
      dateEn: "Jan 2024 – Nov 2024",
      datePt: "Jan 2024 – Nov 2024",
      company: "Fundição Moreno",
      location: "Sertãozinho, SP",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Built REST APIs and internal systems with Spring Boot 3 and Java 21, participating in architecture design and domain rule implementation.",
            textPt:
              "Desenvolvi APIs REST e sistemas internos com Spring Boot 3 e Java 21, participando da definição de arquitetura e implementação de regras de negócio.",
          },
          {
            order: 2,
            textEn:
              "Optimized Oracle Database procedures and queries via PL/SQL, creating high-performance data processing routines for industrial workloads.",
            textPt:
              "Otimizei procedures e queries no Oracle Database via PL/SQL, criando rotinas de alta performance para processamento de dados industriais.",
          },
          {
            order: 3,
            textEn:
              "Delivered full-stack features bridging ERP integration with web interfaces, gaining hands-on experience with Protheus TOTVS ecosystems.",
            textPt:
              "Entreguei features full-stack integrando sistemas ERP a interfaces web, adquirindo experiência prática com ecossistemas Protheus TOTVS.",
          },
        ],
      },
    },
  })

  await prisma.experience.create({
    data: {
      order: 4,
      titleEn: "Data Automation & Analysis",
      titlePt: "Automação e Análise de Dados",
      dateEn: "Jun 2023 – Jan 2024",
      datePt: "Jun 2023 – Jan 2024",
      company: "Fundição Moreno",
      location: "Sertãozinho, SP",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Developed Python scripts to automate repetitive fiscal and accounting processes, significantly reducing manual operational overhead for the team.",
            textPt:
              "Desenvolvi scripts em Python para automação de processos repetitivos no setor fiscal/contábil, reduzindo o tempo operacional da equipe.",
          },
          {
            order: 2,
            textEn:
              "Built and maintained structured Excel spreadsheets for fiscal data control and integrated workflows with the Senior MEGA ERP system.",
            textPt:
              "Criei e atualizei planilhas estruturadas em Excel para controle de dados fiscais e integrei processos com o ERP Senior MEGA.",
          },
        ],
      },
    },
  })

  // ── PROJETOS ────────────────────────────────────────────────────────────────

  await prisma.project.create({
    data: {
      order: 1,
      titleEn: "payment-service — Distributed Payment Platform",
      titlePt: "payment-service — Plataforma de Pagamentos Distribuída",
      subEn: "Microservices · Kafka · Outbox Pattern · OpenTelemetry · Stripe",
      subPt: "Microserviços · Kafka · Outbox Pattern · OpenTelemetry · Stripe",
      githubUrl: "https://github.com/LuisHBarros/payment-service",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Event-driven payment platform with multiple bounded contexts (auth, wallet, transfer, deposit, ledger) communicating exclusively via domain events published to Kafka.",
            textPt:
              "Plataforma de pagamentos orientada a eventos com múltiplos bounded contexts (auth, wallet, transfer, deposit, ledger) comunicando-se exclusivamente via eventos de domínio publicados no Kafka.",
          },
          {
            order: 2,
            textEn:
              "Outbox Pattern guarantees atomicity between DB persistence and event publication. AES-256-GCM encryption for all sensitive data at rest.",
            textPt:
              "Outbox Pattern para garantia de atomicidade entre persistência e publicação de eventos. Criptografia AES-256-GCM em todos os dados sensíveis.",
          },
          {
            order: 3,
            textEn:
              "Distributed tracing with OpenTelemetry/Jaeger, three auto-provisioned Grafana dashboards, deterministic pessimistic locking for concurrent transfers, and rate limiting with Bucket4j.",
            textPt:
              "Rastreamento distribuído com OpenTelemetry/Jaeger, três dashboards Grafana auto-provisionados, locking pessimista determinístico para transferências concorrentes e rate limiting com Bucket4j.",
          },
          {
            order: 4,
            textEn:
              "Full Stripe deposit integration via Strategy Pattern, JWT with Redis-based JTI revocation, and Testcontainers-based CI integration tests.",
            textPt:
              "Integração completa com Stripe via Strategy Pattern, JWT com revogação de JTI no Redis e testes de integração com Testcontainers em CI.",
          },
        ],
      },
      tags: {
        create: [
          { label: "Java 21" },
          { label: "Spring Boot 3" },
          { label: "Kafka" },
          { label: "PostgreSQL" },
          { label: "Redis" },
          { label: "Outbox Pattern" },
          { label: "OpenTelemetry" },
          { label: "Grafana" },
          { label: "Stripe" },
          { label: "Testcontainers" },
          { label: "Docker" },
        ],
      },
    },
  })

  await prisma.project.create({
    data: {
      order: 2,
      titleEn: "url-shortener-aws — Serverless URL Shortener",
      titlePt: "url-shortener-aws — Encurtador de URLs Serverless",
      subEn: "AWS Lambda · DynamoDB · CloudFront · Terraform · SAA-C03 study",
      subPt: "AWS Lambda · DynamoDB · CloudFront · Terraform · estudo SAA-C03",
      githubUrl: "https://github.com/LuisHBarros/url-shortener-aws",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Serverless URL shortening service on AWS with infrastructure fully provisioned via Terraform — Lambda, DynamoDB, API Gateway, and CloudFront.",
            textPt:
              "Serviço serverless de encurtamento de URLs na AWS com infraestrutura totalmente provisionada via Terraform — Lambda, DynamoDB, API Gateway e CloudFront.",
          },
          {
            order: 2,
            textEn:
              "Event-driven architecture on AWS designed for low operational cost and high scalability, built as a hands-on study vehicle for the AWS SAA-C03 certification.",
            textPt:
              "Arquitetura event-driven na AWS com foco em baixo custo operacional e alta escalabilidade. Desenvolvido como estudo prático para a certificação AWS SAA-C03.",
          },
          {
            order: 3,
            textEn:
              "Interactive HTML architecture diagram hosted on GitHub Pages documenting all AWS components and data flows.",
            textPt:
              "Diagrama interativo de arquitetura em HTML hospedado no GitHub Pages documentando todos os componentes AWS e fluxos de dados.",
          },
        ],
      },
      tags: {
        create: [
          { label: "Java 21" },
          { label: "AWS Lambda" },
          { label: "DynamoDB" },
          { label: "CloudFront" },
          { label: "API Gateway" },
          { label: "Terraform" },
          { label: "Serverless" },
        ],
      },
    },
  })

  await prisma.project.create({
    data: {
      order: 3,
      titleEn: "Discord-Like — Real-Time Chat Platform",
      titlePt: "Discord-Like — Plataforma de Chat em Tempo Real",
      subEn: "Modular Monolith · DDD · E2EE · WebSocket · Kafka",
      subPt: "Monólito Modular · DDD · E2EE · WebSocket · Kafka",
      githubUrl: "https://github.com/LuisHBarros",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "Modular monolith with 3 fully decoupled bounded contexts (Identity, Collaboration, Presence) — inter-context communication exclusively via domain events published to Kafka, with zero class imports between contexts.",
            textPt:
              "Monólito modular com 3 bounded contexts totalmente desacoplados (Identity, Collaboration, Presence) — comunicação exclusivamente via eventos de domínio publicados no Kafka, sem importações de classes entre contextos.",
          },
          {
            order: 2,
            textEn:
              "End-to-end encryption (E2EE) at the message level: ECDH for key exchange, HKDF-SHA256 for key derivation, AES-256-GCM with a random 12-byte IV per message.",
            textPt:
              "Criptografia ponta a ponta (E2EE) no nível da mensagem: ECDH para troca de chaves, HKDF-SHA256 para derivação e AES-256-GCM com IV aleatório de 12 bytes por mensagem.",
          },
          {
            order: 3,
            textEn:
              "WebSocket sessions with userId extracted exclusively from the authenticated JWT — never accepted as client input. Redis handles presence, token blacklisting, and caching.",
            textPt:
              "Sessões WebSocket com userId extraído exclusivamente do JWT autenticado — nunca aceito como input do cliente. Redis para presença, blacklist de tokens e cache.",
          },
          {
            order: 4,
            textEn:
              '145 tests running in CI/CD with GitHub Actions, requiring no additional infrastructure. Integration tests with Testcontainers tagged @Tag("integration") for isolated execution.',
            textPt:
              '145 testes rodando em CI/CD com GitHub Actions, sem infraestrutura adicional. Testes de integração com Testcontainers anotados com @Tag("integration") para execução isolada.',
          },
        ],
      },
      tags: {
        create: [
          { label: "Java 21" },
          { label: "Spring Boot 3" },
          { label: "Kafka" },
          { label: "WebSocket" },
          { label: "Redis" },
          { label: "PostgreSQL" },
          { label: "E2EE" },
          { label: "Testcontainers" },
          { label: "GitHub Actions" },
        ],
      },
    },
  })

  await prisma.project.create({
    data: {
      order: 4,
      titleEn: "Assine — Newsletter Subscription Platform",
      titlePt: "Assine — Plataforma de Assinaturas de Newsletter",
      subEn: "Microservices · RabbitMQ · Stripe · Outbox Pattern",
      subPt: "Microserviços · RabbitMQ · Stripe · Outbox Pattern",
      githubUrl: "https://github.com/LuisHBarros",
      bullets: {
        create: [
          {
            order: 1,
            textEn:
              "8-service microservices architecture (gateway, auth, billing, fiscal, notifications, content, subscriptions, access) — each service owns its own database, enforcing strict bounded context isolation.",
            textPt:
              "Arquitetura de microserviços com 8 serviços independentes (gateway, auth, billing, fiscal, notifications, content, subscriptions, access) — cada um com banco de dados próprio, garantindo isolamento de bounded contexts.",
          },
          {
            order: 2,
            textEn:
              "Outbox Pattern in the billing service guarantees atomicity between persistence and event publication to RabbitMQ. JWT RS256 with local JWKS validation at the API gateway.",
            textPt:
              "Outbox Pattern no serviço de billing para garantir atomicidade entre persistência e publicação de eventos no RabbitMQ. JWT RS256 com validação local via JWKS no gateway.",
          },
          {
            order: 3,
            textEn:
              "Full Stripe integration (credit card + Pix), automatic NFS-e emission via Nuvem Fiscal, newsletter delivery via Notion API + SendGrid, and passwordless auth (magic link + Google OAuth2).",
            textPt:
              "Integração completa com Stripe (cartão + Pix), emissão automática de NFS-e via Nuvem Fiscal, newsletters via Notion API + SendGrid e autenticação passwordless (magic link + Google OAuth2).",
          },
          {
            order: 4,
            textEn:
              "Observability stack: Prometheus metrics, Grafana dashboards, and distributed tracing with Zipkin. Tests with JUnit 5, Testcontainers, and WireMock for third-party service mocking.",
            textPt:
              "Observabilidade com Prometheus, Grafana e Zipkin. Testes com JUnit 5, Testcontainers e WireMock para mock de serviços de terceiros.",
          },
        ],
      },
      tags: {
        create: [
          { label: "Java 21" },
          { label: "Spring Boot 3" },
          { label: "RabbitMQ" },
          { label: "PostgreSQL" },
          { label: "Stripe" },
          { label: "Outbox Pattern" },
          { label: "Prometheus" },
          { label: "Grafana" },
          { label: "Docker" },
        ],
      },
    },
  })

  // ── SKILLS ──────────────────────────────────────────────────────────────────

  await prisma.skillCategory.create({
    data: {
      order: 1,
      keyEn: "languages & backend",
      keyPt: "linguagens & backend",
      skills: {
        create: [
          { label: "Java 21", isPrimary: true },
          { label: "Spring Boot 3", isPrimary: true },
          { label: "Spring Security" },
          { label: "Python" },
          { label: "FastAPI" },
          { label: "Django" },
          { label: "PHP" },
          { label: "REST APIs" },
          { label: "WebSocket" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 2,
      keyEn: "architecture & design",
      keyPt: "arquitetura & design",
      skills: {
        create: [
          { label: "Hexagonal Architecture", isPrimary: true },
          { label: "Domain-Driven Design", isPrimary: true },
          { label: "Microservices" },
          { label: "Modular Monolith" },
          { label: "Event-Driven Design" },
          { label: "Outbox Pattern" },
          { label: "SOLID" },
          { label: "Clean Architecture" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 3,
      keyEn: "messaging & async",
      keyPt: "mensageria & assíncrono",
      skills: {
        create: [
          { label: "Apache Kafka", isPrimary: true },
          { label: "RabbitMQ", isPrimary: true },
          { label: "Domain Events" },
          { label: "Event Sourcing" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 4,
      keyEn: "databases & storage",
      keyPt: "bancos & armazenamento",
      skills: {
        create: [
          { label: "PostgreSQL", isPrimary: true },
          { label: "Oracle Database", isPrimary: true },
          { label: "PL/SQL" },
          { label: "Redis" },
          { label: "DynamoDB" },
          { label: "JPA / Hibernate" },
          { label: "MinIO (S3)" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 5,
      keyEn: "cloud & infra",
      keyPt: "cloud & infra",
      skills: {
        create: [
          { label: "AWS Lambda", isPrimary: true },
          { label: "AWS (EC2, SQS, DynamoDB, CloudFront)", isPrimary: true },
          { label: "Terraform" },
          { label: "Docker" },
          { label: "Docker Compose" },
          { label: "Kubernetes" },
          { label: "GitHub Actions" },
          { label: "CI/CD" },
          { label: "Linux" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 6,
      keyEn: "security & auth",
      keyPt: "segurança & autenticação",
      skills: {
        create: [
          { label: "JWT (RS256 / HS256)" },
          { label: "OAuth2 (Google)" },
          { label: "AES-256-GCM" },
          { label: "ECDH / HKDF-SHA256" },
          { label: "Argon2id" },
          { label: "Magic Link Auth" },
          { label: "E2EE" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 7,
      keyEn: "observability & testing",
      keyPt: "observabilidade & testes",
      skills: {
        create: [
          { label: "OpenTelemetry", isPrimary: true },
          { label: "Jaeger" },
          { label: "Prometheus" },
          { label: "Grafana" },
          { label: "Zipkin" },
          { label: "Micrometer" },
          { label: "JUnit 5" },
          { label: "Testcontainers" },
          { label: "Mockito" },
          { label: "WireMock" },
          { label: "AssertJ" },
        ],
      },
    },
  })

  await prisma.skillCategory.create({
    data: {
      order: 8,
      keyEn: "integrations",
      keyPt: "integrações",
      skills: {
        create: [
          { label: "Stripe (Card + Pix)" },
          { label: "SendGrid" },
          { label: "Notion API" },
          { label: "Google OAuth2" },
          { label: "Nuvem Fiscal (NFS-e)" },
          { label: "Bucket4j" },
        ],
      },
    },
  })

  // ── POSTS ───────────────────────────────────────────────────────────────────

  await prisma.post.create({
    data: {
      order: 1,
      titleEn: "Why I chose Hexagonal Architecture for my portfolio projects",
      titlePt: "Por que escolhi Arquitetura Hexagonal nos meus projetos de portfólio",
      excerptEn:
        "Ports & Adapters isn't just a pattern — it's a discipline. Here's how adopting it changed the way I think about every layer of an application.",
      excerptPt:
        "Ports & Adapters não é só um padrão — é uma disciplina. Veja como adotá-la mudou a forma como penso em cada camada de uma aplicação.",
      contentEn: `
When I started the Discord-Like project I could have wired Spring controllers directly to JPA repositories and called it a day. Most tutorials do exactly that. But I'd seen enough legacy codebases at work — tightly coupled PHP and PL/SQL monstrosities — to know where that road ends.

## The core idea

Hexagonal Architecture (Ports & Adapters) says: your domain model should have zero knowledge of Spring, JPA, Kafka, or HTTP. It talks only to interfaces — Ports — which the infrastructure implements as Adapters. Swap Kafka for RabbitMQ? Touch one adapter. Switch from PostgreSQL to MongoDB? One adapter. Your domain tests don't even need a running database.

\`\`\`java
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
\`\`\`

## What I gained in practice

- 145 tests run with zero Docker — domain logic tested with pure mocks
- Kafka, Redis and PostgreSQL swappable without touching domain code
- Onboarding new contributors is much faster — the domain reads like a business spec
- Forced me to think in use cases first, not tables or endpoints

> The biggest benefit isn't technical — it's cognitive. When the infrastructure is invisible, you think in domain terms and write better software.
      `,
      contentPt: `
Quando comecei o projeto Discord-Like, eu poderia ter ligado os controllers do Spring direto aos repositories JPA e chamado de dia. A maioria dos tutoriais faz exatamente isso. Mas já tinha visto código legado suficiente no trabalho — PHP e PL/SQL fortemente acoplados — para saber onde esse caminho termina.

## A ideia central

A Arquitetura Hexagonal (Ports & Adapters) diz: o modelo de domínio não deve ter conhecimento algum de Spring, JPA, Kafka ou HTTP. Ele fala apenas com interfaces — Ports — que a infraestrutura implementa como Adapters. Trocar Kafka por RabbitMQ? Mexe num adapter. Mudar de PostgreSQL para MongoDB? Um adapter. Os testes de domínio nem precisam de banco rodando.

\`\`\`java
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
\`\`\`

## O que ganhei na prática

- 145 testes rodam sem Docker — lógica de domínio testada com mocks puros
- Kafka, Redis e PostgreSQL intercambiáveis sem tocar no código de domínio
- Onboarding de novos contribuidores muito mais rápido — o domínio lê como uma especificação de negócio
- Me forçou a pensar em casos de uso primeiro, não em tabelas ou endpoints

> O maior benefício não é técnico — é cognitivo. Quando a infraestrutura é invisível, você pensa em termos de domínio e escreve software melhor.
      `,
      tags: "java arch",
      date: "Mar 2025",
      readTimeEn: "6 min read",
      readTimePt: "6 min de leitura",
      postTags: {
        create: [{ label: "Architecture" }, { label: "Java" }],
      },
    },
  })

  await prisma.post.create({
    data: {
      order: 2,
      titleEn: "Hunting N+1 queries in Oracle PL/SQL stored procedures",
      titlePt: "Caçando N+1 em stored procedures PL/SQL no Oracle",
      excerptEn:
        "A SELECT inside a cursor loop is a silent performance killer. Here's how I diagnosed and fixed recurring N+1 patterns in high-volume industrial PL/SQL routines.",
      excerptPt:
        "Um SELECT dentro de um loop de cursor é um assassino silencioso de performance. Veja como diagnostiquei e corrigi padrões N+1 recorrentes em rotinas PL/SQL industriais de alto volume.",
      contentEn: `
At Nova Smar, I inherited stored procedures that had been accumulating business logic for years. One of them processed thousands of production records per run — and was inexplicably slow. Profiling revealed the culprit: a SELECT inside a cursor loop.

## The classic trap

\`\`\`sql
-- ❌ N+1: one extra SELECT per row in the cursor
FOR rec IN (SELECT id, product_code FROM movimento) LOOP
    SELECT unit_cost INTO v_cost
    FROM   products
    WHERE  code = rec.product_code;   -- fired N times!
    -- ... process rec
END LOOP;
\`\`\`

## The fix: push the join up

\`\`\`sql
-- ✅ Single pass with a join in the driving query
FOR rec IN (
    SELECT m.id, m.product_code, p.unit_cost
    FROM   movimento  m
    JOIN   products   p ON p.code = m.product_code
) LOOP
    -- rec.unit_cost is already here, no extra round-trip
END LOOP;
\`\`\`

When avoiding the join isn't possible — e.g. conditional lookups — a bulk \`COLLECT INTO\` with a \`FORALL\` DML, or a pre-populated associative array, can eliminate the round-trips entirely.

> Rule of thumb: if you reach for a SELECT inside a loop, pause and ask whether a single set-based query — or at worst a bulk collect — can replace it.
      `,
      contentPt: `
Na Nova Smar, herdei stored procedures que acumulavam lógica de negócio havia anos. Uma delas processava milhares de registros de produção por execução — e era inexplicavelmente lenta. O profiling revelou o culpado: um SELECT dentro de um loop de cursor.

## A armadilha clássica

\`\`\`sql
-- ❌ N+1: one extra SELECT per row in the cursor
FOR rec IN (SELECT id, product_code FROM movimento) LOOP
    SELECT unit_cost INTO v_cost
    FROM   products
    WHERE  code = rec.product_code;   -- fired N times!
    -- ... process rec
END LOOP;
\`\`\`

## A correção: subir o join

\`\`\`sql
-- ✅ Single pass with a join in the driving query
FOR rec IN (
    SELECT m.id, m.product_code, p.unit_cost
    FROM   movimento  m
    JOIN   products   p ON p.code = m.product_code
) LOOP
    -- rec.unit_cost is already here, no extra round-trip
END LOOP;
\`\`\`

Quando evitar o join não é possível — ex: lookups condicionais — um \`BULK COLLECT INTO\` com \`FORALL\` DML, ou um array associativo pré-populado, pode eliminar os round-trips por completo.

> Regra de ouro: se você for usar um SELECT dentro de um loop, pause e pergunte se uma query set-based — ou no pior caso um bulk collect — pode substituí-lo.
      `,
      tags: "sql",
      date: "Feb 2025",
      readTimeEn: "5 min read",
      readTimePt: "5 min de leitura",
      postTags: {
        create: [{ label: "SQL" }],
      },
    },
  })

  await prisma.post.create({
    data: {
      order: 3,
      titleEn: "The Outbox Pattern: how to not lose events when your DB commits",
      titlePt: "Outbox Pattern: como não perder eventos quando o banco commita",
      excerptEn:
        "Publishing a domain event after a DB commit looks simple. It isn't. The Outbox Pattern is the canonical solution — and I implemented it in the Assine billing service.",
      excerptPt:
        "Publicar um evento de domínio após um commit no banco parece simples. Não é. O Outbox Pattern é a solução canônica — e eu o implementei no serviço de billing do Assine.",
      contentEn: `
Imagine you charge a subscription: the database commits the payment record, then you publish a \`PaymentConfirmed\` event to RabbitMQ. What happens if the app crashes between the two? The DB has the money, but the email service never fires. The customer never receives their receipt. That's a dual-write problem.

## Outbox Pattern

The solution: write the event to an \`outbox\` table in the same local DB transaction as the payment record. A separate relay process polls the outbox and publishes to the broker — marking rows as published only on success.

\`\`\`sql
-- Same transaction: payment + outbox row
BEGIN;
  INSERT INTO payments(id, amount, status) VALUES(...);
  INSERT INTO outbox(id, aggregate_type, payload, published)
         VALUES(gen_random_uuid(), 'PaymentConfirmed', :json, false);
COMMIT;
\`\`\`

## The relay

In Assine I implemented the relay as a scheduled Spring component. It reads unpublished rows, publishes each to RabbitMQ, and only then marks them published. If publishing fails, the row stays unpublished and will be retried on the next tick.

> The trade-off: at-least-once delivery. Your consumers must be idempotent. But that's a much easier problem than losing events entirely.
      `,
      contentPt: `
Imagine que você cobra uma assinatura: o banco commita o registro de pagamento, depois você publica um evento \`PaymentConfirmed\` no RabbitMQ. O que acontece se a app travar entre os dois? O banco tem o dinheiro, mas o serviço de e-mail nunca dispara. O cliente nunca recebe o comprovante. Isso é o problema de dual-write.

## Outbox Pattern

A solução: escrever o evento em uma tabela \`outbox\` na mesma transação local do banco que o registro de pagamento. Um processo relay separado faz polling do outbox e publica no broker — marcando as linhas como publicadas somente em caso de sucesso.

\`\`\`sql
-- Same transaction: payment + outbox row
BEGIN;
  INSERT INTO payments(id, amount, status) VALUES(...);
  INSERT INTO outbox(id, aggregate_type, payload, published)
         VALUES(gen_random_uuid(), 'PaymentConfirmed', :json, false);
COMMIT;
\`\`\`

## O relay

No Assine, implementei o relay como um componente Spring com agendamento. Ele lê as linhas não publicadas, publica cada uma no RabbitMQ e só então as marca como publicadas. Se a publicação falhar, a linha permanece não publicada e será reprocessada no próximo tick.

> O trade-off: entrega at-least-once. Seus consumidores precisam ser idempotentes. Mas isso é um problema muito mais fácil do que perder eventos.
      `,
      tags: "java arch",
      date: "Jan 2025",
      readTimeEn: "7 min read",
      readTimePt: "7 min de leitura",
      postTags: {
        create: [{ label: "Architecture" }, { label: "Java" }],
      },
    },
  })

  await prisma.post.create({
    data: {
      order: 4,
      titleEn: "From Junior to Analyst in 6 months: what actually moved the needle",
      titlePt: "De Júnior a Analista em 6 meses: o que realmente fez diferença",
      excerptEn:
        "It wasn't about coding more hours. It was about making my work visible, understanding the business, and solving problems nobody asked me to solve.",
      excerptPt:
        "Não foi sobre codar mais horas. Foi sobre tornar meu trabalho visível, entender o negócio e resolver problemas que ninguém me pediu para resolver.",
      contentEn: `
When I joined Nova Smar as a Programming Assistant in November 2024, I set a private goal: make Analyst before the end of the first year. Six months later I was promoted. Here's what I think actually made the difference.

## 1. Understand why before how

Every bug I fixed, I asked: "why did this exist?" Most legacy PHP issues weren't bugs — they were missing abstractions. Fixing the symptom and documenting the cause made me someone people brought problems to, not just tasks.

## 2. Make complexity visible

I started writing internal notes after every significant refactor — what was wrong, what changed, what risks remain. Managers rarely see the invisible work. Making it legible is a skill in itself.

## 3. Mentor before you're asked

When two interns joined, I volunteered to pair with them on their first tasks. Teaching forces you to articulate things you think you know. It also signals readiness for the next level in a way no single PR ever can.

> Promotions rarely come from writing better code. They come from expanding the surface of your impact beyond your own keyboard.
      `,
      contentPt: `
Quando entrei na Nova Smar como Assistente de Programação em novembro de 2024, defini uma meta pessoal: chegar a Analista antes do fim do primeiro ano. Seis meses depois fui promovido. Aqui está o que acho que realmente fez a diferença.

## 1. Entender o porquê antes do como

Em cada bug que corrigi, perguntei: "por que isso existia?" A maioria dos problemas no PHP legado não eram bugs — eram abstrações ausentes. Corrigir o sintoma e documentar a causa me tornou alguém a quem traziam problemas, não só tarefas.

## 2. Tornar a complexidade visível

Comecei a escrever notas internas depois de cada refactor significativo — o que estava errado, o que mudou, quais riscos restam. Gestores raramente enxergam o trabalho invisível. Torná-lo legível é uma habilidade em si.

## 3. Mentorar antes de ser pedido

Quando dois estagiários entraram, me voluntariei para fazer pair com eles nas primeiras tarefas. Ensinar te força a articular coisas que você acha que sabe. E sinaliza prontidão para o próximo nível de uma forma que nenhum PR isolado consegue.

> Promoções raramente vêm de escrever código melhor. Vêm de expandir a superfície do seu impacto além do seu próprio teclado.
      `,
      tags: "career",
      date: "Dec 2024",
      readTimeEn: "4 min read",
      readTimePt: "4 min de leitura",
      postTags: {
        create: [{ label: "Career" }],
      },
    },
  })

  await prisma.post.create({
    data: {
      order: 5,
      titleEn: "E2EE in Java: ECDH + HKDF + AES-256-GCM from scratch",
      titlePt: "E2EE em Java: ECDH + HKDF + AES-256-GCM do zero",
      excerptEn:
        "End-to-end encryption sounds intimidating. The math is hard; the Java API is manageable. Here's the full key-exchange and encryption pipeline I built for the Discord-Like project.",
      excerptPt:
        "Criptografia ponta a ponta parece intimidadora. A matemática é difícil; a API Java é gerenciável. Aqui está o pipeline completo de troca de chaves e criptografia que construí para o projeto Discord-Like.",
      contentEn: `
## The protocol in three steps

- **ECDH (P-256):** each client generates a key pair, exchanges public keys, derives a shared secret — without ever transmitting the secret itself
- **HKDF-SHA256:** stretches and contextualises the raw shared secret into a proper 256-bit encryption key
- **AES-256-GCM:** encrypts each message with a random 12-byte IV — GCM mode gives both confidentiality and integrity

\`\`\`java
// Key derivation with HKDF
byte[] sharedSecret = deriveSharedSecret(myPrivateKey, theirPublicKey);
SecretKeySpec key = hkdfExpand(sharedSecret, "chat-v1".getBytes());

// Encryption — new random IV per message
byte[] iv  = SecureRandom.getInstanceStrong().generateSeed(12);
Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv));
byte[] ciphertext = cipher.doFinal(plaintext.getBytes(UTF_8));
\`\`\`

The server only ever sees ciphertext and public keys. It routes messages but cannot read them. The private keys never leave the client — which in this architecture is the Spring backend acting on behalf of each user session.

> One common mistake: reusing the IV. With GCM, a repeated (key, IV) pair completely breaks confidentiality. Always generate a fresh IV per message.
      `,
      contentPt: `
## O protocolo em três etapas

- **ECDH (P-256):** cada cliente gera um par de chaves, troca chaves públicas, deriva um segredo compartilhado — sem nunca transmitir o segredo em si
- **HKDF-SHA256:** estica e contextualiza o segredo compartilhado bruto em uma chave de criptografia de 256 bits adequada
- **AES-256-GCM:** cifra cada mensagem com um IV aleatório de 12 bytes — o modo GCM garante confidencialidade e integridade

\`\`\`java
// Key derivation with HKDF
byte[] sharedSecret = deriveSharedSecret(myPrivateKey, theirPublicKey);
SecretKeySpec key = hkdfExpand(sharedSecret, "chat-v1".getBytes());

// Encryption — new random IV per message
byte[] iv  = SecureRandom.getInstanceStrong().generateSeed(12);
Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv));
byte[] ciphertext = cipher.doFinal(plaintext.getBytes(UTF_8));
\`\`\`

O servidor só vê texto cifrado e chaves públicas. Ele roteia mensagens, mas não consegue lê-las. As chaves privadas nunca saem do cliente — que nessa arquitetura é o backend Spring agindo em nome de cada sessão de usuário.

> Um erro comum: reutilizar o IV. Com GCM, um par (chave, IV) repetido quebra completamente a confidencialidade. Sempre gere um IV novo por mensagem.
      `,
      tags: "java",
      date: "Nov 2024",
      readTimeEn: "8 min read",
      readTimePt: "8 min de leitura",
      postTags: {
        create: [{ label: "Java" }],
      },
    },
  })

  await prisma.post.create({
    data: {
      order: 6,
      titleEn: "Window functions in Oracle: replacing cursor loops with elegant SQL",
      titlePt: "Window functions no Oracle: substituindo loops de cursor por SQL elegante",
      excerptEn:
        "ROW_NUMBER, LAG, SUM OVER — once you see what window functions can do, you'll never write a cursor for ranking or running totals again.",
      excerptPt:
        "ROW_NUMBER, LAG, SUM OVER — uma vez que você vê o que window functions conseguem fazer, nunca mais escreve cursor para ranking ou totais acumulados.",
      contentEn: `
In my day job I routinely work with Oracle schemas that track industrial production movements. A classic requirement: for each product, rank movements by date and compute a running cost total. The junior approach is a cursor with variables. The set-based approach uses window functions.

\`\`\`sql
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
\`\`\`

## LAG for delta calculations

\`\`\`sql
-- Cost delta vs. previous movement
SELECT
    product_code,
    movement_date,
    unit_cost,
    unit_cost - LAG(unit_cost) OVER (
        PARTITION BY product_code ORDER BY movement_date
    ) AS cost_delta
FROM movimento;
\`\`\`

> Window functions execute after WHERE and GROUP BY but before ORDER BY. Think of them as a second pass over already-filtered rows — which makes them composable with CTEs for remarkably readable analytical queries.
      `,
      contentPt: `
No meu trabalho, lido rotineiramente com schemas Oracle que rastreiam movimentos de produção industrial. Um requisito clássico: para cada produto, ranquear movimentos por data e calcular um custo acumulado. A abordagem júnior é um cursor com variáveis. A abordagem set-based usa window functions.

\`\`\`sql
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
\`\`\`

## LAG para cálculos de delta

\`\`\`sql
-- Cost delta vs. previous movement
SELECT
    product_code,
    movement_date,
    unit_cost,
    unit_cost - LAG(unit_cost) OVER (
        PARTITION BY product_code ORDER BY movement_date
    ) AS cost_delta
FROM movimento;
\`\`\`

> Window functions executam depois do WHERE e GROUP BY, mas antes do ORDER BY. Pense nelas como uma segunda passagem sobre linhas já filtradas — o que as torna compostas com CTEs para queries analíticas notavelmente legíveis.
      `,
      tags: "sql arch",
      date: "Oct 2024",
      readTimeEn: "5 min read",
      readTimePt: "5 min de leitura",
      postTags: {
        create: [{ label: "SQL" }],
      },
    },
  })

  // ── CONTACT ─────────────────────────────────────────────────────────────────

  await prisma.contactInfo.createMany({
    data: [
      {
        key: "email",
        labelEn: "✉ email",
        labelPt: "✉ email",
        value: "me@luisbarros.com",
        href: "mailto:me@luisbarros.com",
        order: 1,
      },
      {
        key: "phone",
        labelEn: "☏ phone",
        labelPt: "☏ telefone",
        value: "+55 16 99399-1421",
        href: "tel:+5516993991421",
        order: 2,
      },
      {
        key: "linkedin",
        labelEn: "⇗ linkedin",
        labelPt: "⇗ linkedin",
        value: "luis-henrique-de-barros",
        href: "https://linkedin.com/in/luis-henrique-de-barros",
        order: 3,
      },
      {
        key: "github",
        labelEn: "◉ github",
        labelPt: "◉ github",
        value: "LuisHBarros",
        href: "https://github.com/LuisHBarros",
        order: 4,
      },
      {
        key: "repository",
        labelEn: "◎ repository",
        labelPt: "◎ repositório",
        value: "portfolio",
        href: "https://github.com/LuisHBarros/portfolio",
        order: 5,
      },
      {
        key: "location",
        labelEn: "◎ location",
        labelPt: "◎ localização",
        value: "Sertãozinho, SP, Brazil",
        href: null,
        order: 6,
      },
    ],
  })

  // ── EDUCATION ────────────────────────────────────────────────────────────────

  await prisma.education.createMany({
    data: [
      {
        order: 1,
        badge: "EDU",
        titleEn: "B.Sc. in Computer Engineering",
        titlePt: "Bacharelado em Engenharia da Computação",
        subEn: "Descomplica Faculdade Digital · 2022 – 2025 · GPA 9.3/10",
        subPt: "Descomplica Faculdade Digital · 2022 – 2025 · Média 9,3/10",
      },
      {
        order: 2,
        badge: "CERT",
        titleEn: "Google Cloud Computing Foundations",
        titlePt: "Google Cloud Computing Foundations",
        subEn: "Cloud Computing Fundamentals · Networking — Google",
        subPt: "Cloud Computing Fundamentals · Networking — Google",
      },
      {
        order: 3,
        badge: "CERT",
        titleEn: "Fundamentos da Cultura DevOps",
        titlePt: "Fundamentos da Cultura DevOps",
        subEn: "DevOps culture and practices certification",
        subPt: "Certificação em cultura e práticas DevOps",
      },
      {
        order: 4,
        badge: "LANG",
        titleEn: "Languages",
        titlePt: "Idiomas",
        subEn: "Portuguese (Native) · English (Advanced — technical reading, writing & conversation)",
        subPt: "Português (Nativo) · Inglês (Avançado — leitura, escrita e conversação técnica)",
      },
    ],
  })

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })