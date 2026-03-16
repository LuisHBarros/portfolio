import { NextResponse } from "next/server"
import { Translations } from "@/types"

const translations: Record<string, Translations> = {
  en: {
    role: "Backend Engineer",
    nav_home: "home",
    nav_exp: "experience",
    nav_skills: "skills",
    nav_projects: "projects",
    nav_contact: "contact",
    nav_posts: "posts",
    bio_role: "Backend Software Engineer · Java & Distributed Systems",
    bio_desc:
      "Building production-grade distributed systems with Java 21 & Spring Boot 3. Passionate about hexagonal architecture, domain-driven design, and event-driven patterns with Kafka and RabbitMQ. I bridge domain modelling and infrastructure — from DDD aggregate design to critical Oracle PL/SQL query optimization. Currently open to backend & platform engineering roles at product companies.",
    meta_loc: "location",
    meta_exp: "experience",
    meta_exp_val: "2+ years",
    meta_company: "company",
    cta_contact: "✉ get in touch",
    cta_download_cv: "↓ Download CV",
    j1_title: "Development Analyst",
    j1_date: "May 2025 – Present",
    j1_b1:
      "Led greenfield projects in Java/Spring Boot and Python/Django, translating business requirements into domain-oriented solutions with strong UX focus.",
    j1_b2:
      "Performed critical PL/SQL performance optimizations on Oracle Database, eliminating N+1 query patterns in high-volume processing routines.",
    j1_b3:
      "Mentored junior developers and interns on Clean Architecture and SOLID principles, accelerating team onboarding and raising code quality standards.",
    j1_b4:
      "Integrated AI-assisted tooling into the development workflow, boosting productivity in automation and code generation tasks.",
    j2_title: "Programming Assistant",
    j2_date: "Nov 2024 – May 2025",
    j2_b1:
      "Refactored legacy PL/SQL procedures in Oracle Database — eliminated SQL injection vectors via bind variables and replaced magic numbers with named constants.",
    j2_b2:
      "Evolved PHP 5 legacy systems applying SOLID principles, improving maintainability and extensibility of critical business logic modules.",
    j2_b3:
      "Collaborated in technical discovery sessions with business stakeholders to adapt legacy systems to web-based environments.",
    j2_b4:
      "Promoted to Development Analyst within 6 months — one of the fastest advancement trajectories in the team.",
    j3_title: "IT Assistant",
    j3_date: "Jan 2024 – Nov 2024",
    j3_b1:
      "Built internal APIs and business systems with Spring Boot 3 and Java 21, participating in architecture design and domain rule implementation.",
    j3_b2:
      "Optimized Oracle Database procedures and queries via PL/SQL, creating high-performance data processing routines for industrial workloads.",
    j3_b3:
      "Delivered full-stack features bridging ERP integration with web interfaces, gaining hands-on experience with Protheus TOTVS ecosystems.",
    sk_lang: "languages & backend",
    sk_arch: "architecture & design",
    sk_msg: "messaging & async",
    sk_db: "databases & storage",
    sk_sec: "security & auth",
    sk_obs: "observability & testing",
    sk_infra: "infra & devops",
    sk_int: "integrations",
    p1_title: "Discord-Like — Real-Time Chat Platform",
    p1_sub: "Modular Monolith · DDD · E2EE · WebSocket · Kafka",
    p1_b1:
      "Modular monolith with 3 fully decoupled bounded contexts (Identity, Collaboration, Presence) — inter-context communication exclusively via domain events published to Kafka, with zero class imports between contexts.",
    p1_b2:
      "End-to-end encryption (E2EE) at the message level: ECDH for key exchange, HKDF-SHA256 for key derivation, AES-256-GCM with a random 12-byte IV per message.",
    p1_b3:
      "WebSocket sessions with userId extracted exclusively from the authenticated JWT — never accepted as client input. Redis handles presence, token blacklisting, and caching.",
    p1_b4:
      '145 tests running in CI/CD with GitHub Actions, requiring no additional infrastructure. Integration tests with Testcontainers tagged @Tag("integration") for isolated execution.',
    p2_title: "Assine — Newsletter Subscription Platform",
    p2_sub: "Microservices · RabbitMQ · Stripe · Outbox Pattern",
    p2_b1:
      "8-service microservices architecture (gateway, auth, billing, fiscal, notifications, content, subscriptions, access) — each service owns its own database, enforcing strict bounded context isolation.",
    p2_b2:
      "Outbox Pattern in the billing service guarantees atomicity between persistence and event publication to RabbitMQ. JWT RS256 with local JWKS validation at the API gateway.",
    p2_b3:
      "Full Stripe integration (credit card + Pix), automatic NFS-e emission via Nuvem Fiscal, newsletter delivery via Notion API + SendGrid, and passwordless auth (magic link + Google OAuth2).",
    p2_b4:
      "Observability stack: Prometheus metrics, Grafana dashboards, and distributed tracing with Zipkin. Tests with JUnit 5, Testcontainers, and WireMock for third-party service mocking.",
    c_phone: "☏ phone",
    c_loc_label: "◎ location",
    c_loc_val: "Sertãozinho, SP, Brazil",
    edu1_title: "B.Sc. in Computer Engineering",
    cert1_sub: "Cloud Computing Fundamentals · Networking — Google",
    cert2_title: "Fundamentos da Cultura DevOps",
    cert2_sub: "DevOps culture and practices certification",
    lang_title: "Languages",
    lang_sub: "Portuguese (Native) · English (Advanced technical reading)",
    cta_reach: "↓ reach out",
    pf_all: "all",
    pf_arch: "Architecture",
    pf_career: "Career",
    read_4: "4 min read",
    read_5: "5 min read",
    read_6: "6 min read",
    read_7: "7 min read",
    read_8: "8 min read",
    post1_title: "Why I chose Hexagonal Architecture for my portfolio projects",
    post1_excerpt:
      "Ports & Adapters isn't just a pattern — it's a discipline. Here's how adopting it changed the way I think about every layer of an application.",
    post1_p1:
      "When I started the Discord-Like project I could have wired Spring controllers directly to JPA repositories and called it a day. Most tutorials do exactly that. But I'd seen enough legacy codebases at work — tightly coupled PHP and PL/SQL monstrosities — to know where that road ends.",
    post1_p2:
      "Hexagonal Architecture (Ports & Adapters) says: your domain model should have zero knowledge of Spring, JPA, Kafka, or HTTP. It talks only to interfaces — Ports — which the infrastructure implements as Adapters. Swap Kafka for RabbitMQ? Touch one adapter. Switch from PostgreSQL to MongoDB? One adapter. Your domain tests don't even need a running database.",
    post1_h2: "What I gained in practice",
    post1_li1: "145 tests run with zero Docker — domain logic tested with pure mocks",
    post1_li2: "Kafka, Redis and PostgreSQL swappable without touching domain code",
    post1_li3: "Onboarding new contributors is much faster — the domain reads like a business spec",
    post1_li4: "Forced me to think in use cases first, not tables or endpoints",
    post1_callout:
      "The biggest benefit isn't technical — it's cognitive. When the infrastructure is invisible, you think in domain terms and write better software.",
    post2_title: "Hunting N+1 queries in Oracle PL/SQL stored procedures",
    post2_excerpt:
      "A SELECT inside a cursor loop is a silent performance killer. Here's how I diagnosed and fixed recurring N+1 patterns in high-volume industrial PL/SQL routines.",
    post2_p1:
      "At Nova Smar, I inherited stored procedures that had been accumulating business logic for years. One of them processed thousands of production records per run — and was inexplicably slow. Profiling revealed the culprit: a SELECT inside a cursor loop.",
    post2_h1: "The classic trap",
    post2_h2: "The fix: push the join up",
    post2_p2:
      "When avoiding the join isn't possible — e.g. conditional lookups — a bulk <code>COLLECT INTO</code> with a <code>FORALL</code> DML, or a pre-populated associative array, can eliminate the round-trips entirely.",
    post2_callout:
      "Rule of thumb: if you reach for a SELECT inside a loop, pause and ask whether a single set-based query — or at worst a bulk collect — can replace it.",
    post3_title: "The Outbox Pattern: how to not lose events when your DB commits",
    post3_excerpt:
      "Publishing a domain event after a DB commit looks simple. It isn't. The Outbox Pattern is the canonical solution — and I implemented it in the Assine billing service.",
    post3_p1:
      "Imagine you charge a subscription: the database commits the payment record, then you publish a <code>PaymentConfirmed</code> event to RabbitMQ. What happens if the app crashes between the two? The DB has the money, but the email service never fires. The customer never receives their receipt. That's a dual-write problem.",
    post3_p2:
      "The solution: write the event to an <code>outbox</code> table in the same local DB transaction as the payment record. A separate relay process polls the outbox and publishes to the broker — marking rows as published only on success.",
    post3_h2: "The relay",
    post3_p3:
      "In Assine I implemented the relay as a scheduled Spring component. It reads unpublished rows, publishes each to RabbitMQ, and only then marks them published. If publishing fails, the row stays unpublished and will be retried on the next tick.",
    post3_callout:
      "The trade-off: at-least-once delivery. Your consumers must be idempotent. But that's a much easier problem than losing events entirely.",
    post4_title: "From Junior to Analyst in 6 months: what actually moved the needle",
    post4_excerpt:
      "It wasn't about coding more hours. It was about making my work visible, understanding the business, and solving problems nobody asked me to solve.",
    post4_p1:
      "When I joined Nova Smar as a Programming Assistant in November 2024, I set a private goal: make Analyst before the end of the first year. Six months later I was promoted. Here's what I think actually made the difference.",
    post4_h1: "1. Understand why before how",
    post4_p2:
      'Every bug I fixed, I asked: "why did this exist?" Most legacy PHP issues weren\'t bugs — they were missing abstractions. Fixing the symptom and documenting the cause made me someone people brought problems to, not just tasks.',
    post4_h2: "2. Make complexity visible",
    post4_p3:
      "I started writing internal notes after every significant refactor — what was wrong, what changed, what risks remain. Managers rarely see the invisible work. Making it legible is a skill in itself.",
    post4_h3: "3. Mentor before you're asked",
    post4_p4:
      "When two interns joined, I volunteered to pair with them on their first tasks. Teaching forces you to articulate things you think you know. It also signals readiness for the next level in a way no single PR ever can.",
    post4_callout:
      "Promotions rarely come from writing better code. They come from expanding the surface of your impact beyond your own keyboard.",
    post5_title: "E2EE in Java: ECDH + HKDF + AES-256-GCM from scratch",
    post5_excerpt:
      "End-to-end encryption sounds intimidating. The math is hard; the Java API is manageable. Here's the full key-exchange and encryption pipeline I built for the Discord-Like project.",
    post5_h1: "The protocol in three steps",
    post5_li1:
      "<strong>ECDH (P-256):</strong> each client generates a key pair, exchanges public keys, derives a shared secret — without ever transmitting the secret itself",
    post5_li2:
      "<strong>HKDF-SHA256:</strong> stretches and contextualises the raw shared secret into a proper 256-bit encryption key",
    post5_li3:
      "<strong>AES-256-GCM:</strong> encrypts each message with a random 12-byte IV — GCM mode gives both confidentiality and integrity",
    post5_p1:
      "The server only ever sees ciphertext and public keys. It routes messages but cannot read them. The private keys never leave the client — which in this architecture is the Spring backend acting on behalf of each user session.",
    post5_callout:
      "One common mistake: reusing the IV. With GCM, a repeated (key, IV) pair completely breaks confidentiality. Always generate a fresh IV per message.",
    post6_title: "Window functions in Oracle: replacing cursor loops with elegant SQL",
    post6_excerpt:
      "ROW_NUMBER, LAG, SUM OVER — once you see what window functions can do, you'll never write a cursor for ranking or running totals again.",
    post6_p1:
      "In my day job I routinely work with Oracle schemas that track industrial production movements. A classic requirement: for each product, rank movements by date and compute a running cost total. The junior approach is a cursor with variables. The set-based approach uses window functions.",
    post6_h1: "LAG for delta calculations",
    post6_callout:
      "Window functions execute after WHERE and GROUP BY but before ORDER BY. Think of them as a second pass over already-filtered rows — which makes them composable with CTEs for remarkably readable analytical queries.",
  },
  pt: {
    role: "Engenheiro Backend",
    nav_home: "home",
    nav_exp: "experiência",
    nav_skills: "habilidades",
    nav_projects: "projetos",
    nav_contact: "contato",
    nav_posts: "posts",
    bio_role: "Engenheiro de Software Backend · Java & Sistemas Distribuídos",
    bio_desc:
      "Construindo sistemas distribuídos prontos para produção com Java 21 & Spring Boot 3. Apaixonado por arquitetura hexagonal, domain-driven design e padrões event-driven com Kafka e RabbitMQ. Faço a ponte entre modelagem de domínio e infraestrutura — do design de agregados DDD à otimização de queries críticas em Oracle PL/SQL. Aberto a oportunidades de engenharia backend em empresas de produto.",
    meta_loc: "localização",
    meta_exp: "experiência",
    meta_exp_val: "2+ anos",
    meta_company: "empresa",
    cta_contact: "✉ entrar em contato",
    cta_download_cv: "↓ Baixar CV",
    j1_title: "Analista de Desenvolvimento",
    j1_date: "Mai 2025 – Presente",
    j1_b1:
      "Conduzi projetos do zero em Java/Spring Boot e Python/Django, traduzindo requisitos de negócio em soluções orientadas ao domínio com foco em UX.",
    j1_b2:
      "Realizei otimizações críticas de performance em PL/SQL no Oracle Database, eliminando padrões equivalentes a N+1 queries em rotinas de alto volume.",
    j1_b3:
      "Atuei na mentoria técnica de estagiários, disseminando boas práticas de Clean Architecture e SOLID e acelerando o onboarding da equipe.",
    j1_b4:
      "Integrei recursos de IA ao fluxo de desenvolvimento, aumentando a produtividade em tarefas de automação e geração de código.",
    j2_title: "Assistente de Programação",
    j2_date: "Nov 2024 – Mai 2025",
    j2_b1:
      "Refatorei procedures PL/SQL legadas no Oracle Database — eliminei vetores de SQL injection via bind variables e substituí magic numbers por constantes nomeadas.",
    j2_b2:
      "Evoluí sistemas legados em PHP 5 aplicando princípios SOLID, melhorando manutenibilidade e extensibilidade dos módulos de lógica de negócio.",
    j2_b3:
      "Participei de levantamentos técnicos com áreas de negócio para adaptação de sistemas legados ao ambiente web.",
    j2_b4:
      "Promovido a Analista de Desenvolvimento em 6 meses — uma das progressões mais rápidas da equipe.",
    j3_title: "Auxiliar de TI",
    j3_date: "Jan 2024 – Nov 2024",
    j3_b1:
      "Desenvolvi APIs e sistemas internos com Spring Boot 3 e Java 21, participando da definição de arquitetura e implementação de regras de negócio.",
    j3_b2:
      "Otimizei procedures e queries no Oracle Database via PL/SQL, criando rotinas de alta performance para processamento de dados industriais.",
    j3_b3:
      "Entreguei features full-stack integrando sistemas ERP a interfaces web, adquirindo experiência prática com ecossistemas Protheus TOTVS.",
    sk_lang: "linguagens & backend",
    sk_arch: "arquitetura & design",
    sk_msg: "mensageria & assíncrono",
    sk_db: "bancos & armazenamento",
    sk_sec: "segurança & autenticação",
    sk_obs: "observabilidade & testes",
    sk_infra: "infra & devops",
    sk_int: "integrações",
    p1_title: "Discord-Like — Plataforma de Chat em Tempo Real",
    p1_sub: "Monólito Modular · DDD · E2EE · WebSocket · Kafka",
    p1_b1:
      "Monólito modular com 3 bounded contexts totalmente desacoplados (Identity, Collaboration, Presence) — comunicação exclusivamente via eventos de domínio publicados no Kafka, sem importações de classes entre contextos.",
    p1_b2:
      "Criptografia ponta a ponta (E2EE) no nível da mensagem: ECDH para troca de chaves, HKDF-SHA256 para derivação e AES-256-GCM com IV aleatório de 12 bytes por mensagem.",
    p1_b3:
      "Sessões WebSocket com userId extraído exclusivamente do JWT autenticado — nunca aceito como input do cliente. Redis para presença, blacklist de tokens e cache.",
    p1_b4:
      '145 testes rodando em CI/CD com GitHub Actions, sem infraestrutura adicional. Testes de integração com Testcontainers anotados com @Tag("integration") para execução isolada.',
    p2_title: "Assine — Plataforma de Assinaturas de Newsletter",
    p2_sub: "Microserviços · RabbitMQ · Stripe · Outbox Pattern",
    p2_b1:
      "Arquitetura de microserviços com 8 serviços independentes (gateway, auth, billing, fiscal, notifications, content, subscriptions, access) — cada um com banco de dados próprio, garantindo isolamento de bounded contexts.",
    p2_b2:
      "Outbox Pattern no serviço de billing para garantir atomicidade entre persistência e publicação de eventos no RabbitMQ. JWT RS256 com validação local via JWKS no gateway.",
    p2_b3:
      "Integração completa com Stripe (cartão + Pix), emissão automática de NFS-e via Nuvem Fiscal, newsletters via Notion API + SendGrid e autenticação passwordless (magic link + Google OAuth2).",
    p2_b4:
      "Observabilidade com Prometheus, Grafana e Zipkin. Testes com JUnit 5, Testcontainers e WireMock para mock de serviços de terceiros.",
    c_phone: "☏ telefone",
    c_loc_label: "◎ localização",
    c_loc_val: "Sertãozinho, SP, Brasil",
    edu1_title: "Bacharelado em Engenharia de Computação",
    cert1_sub: "Cloud Computing Fundamentals · Networking — Google",
    cert2_title: "Fundamentos da Cultura DevOps",
    cert2_sub: "Certificação em cultura e práticas DevOps",
    lang_title: "Idiomas",
    lang_sub: "Português (Nativo) · Inglês (Leitura técnica avançada)",
    cta_reach: "↓ entrar em contato",
    pf_all: "todos",
    pf_arch: "Arquitetura",
    pf_career: "Carreira",
    read_4: "4 min de leitura",
    read_5: "5 min de leitura",
    read_6: "6 min de leitura",
    read_7: "7 min de leitura",
    read_8: "8 min de leitura",
    post1_title: "Por que escolhi Arquitetura Hexagonal nos meus projetos de portfólio",
    post1_excerpt:
      "Ports & Adapters não é só um padrão — é uma disciplina. Veja como adotá-la mudou a forma como penso em cada camada de uma aplicação.",
    post1_p1:
      "Quando comecei o projeto Discord-Like, eu poderia ter ligado os controllers do Spring direto aos repositories JPA e chamado de dia. A maioria dos tutoriais faz exatamente isso. Mas já tinha visto código legado suficiente no trabalho — PHP e PL/SQL fortemente acoplados — para saber onde esse caminho termina.",
    post1_p2:
      "A Arquitetura Hexagonal (Ports & Adapters) diz: o modelo de domínio não deve ter conhecimento algum de Spring, JPA, Kafka ou HTTP. Ele fala apenas com interfaces — Ports — que a infraestrutura implementa como Adapters. Trocar Kafka por RabbitMQ? Mexe num adapter. Mudar de PostgreSQL para MongoDB? Um adapter. Os testes de domínio nem precisam de banco rodando.",
    post1_h2: "O que ganhei na prática",
    post1_li1: "145 testes rodam sem Docker — lógica de domínio testada com mocks puros",
    post1_li2: "Kafka, Redis e PostgreSQL intercambiáveis sem tocar no código de domínio",
    post1_li3:
      "Onboarding de novos contribuidores muito mais rápido — o domínio lê como uma especificação de negócio",
    post1_li4: "Me forçou a pensar em casos de uso primeiro, não em tabelas ou endpoints",
    post1_callout:
      "O maior benefício não é técnico — é cognitivo. Quando a infraestrutura é invisível, você pensa em termos de domínio e escreve software melhor.",
    post2_title: "Caçando N+1 em stored procedures PL/SQL no Oracle",
    post2_excerpt:
      "Um SELECT dentro de um loop de cursor é um assassino silencioso de performance. Veja como diagnostiquei e corrigi padrões N+1 recorrentes em rotinas PL/SQL industriais de alto volume.",
    post2_p1:
      "Na Nova Smar, herdei stored procedures que acumulavam lógica de negócio havia anos. Uma delas processava milhares de registros de produção por execução — e era inexplicavelmente lenta. O profiling revelou o culpado: um SELECT dentro de um loop de cursor.",
    post2_h1: "A armadilha clássica",
    post2_h2: "A correção: subir o join",
    post2_p2:
      "Quando evitar o join não é possível — ex: lookups condicionais — um <code>BULK COLLECT INTO</code> com <code>FORALL</code> DML, ou um array associativo pré-populado, pode eliminar os round-trips por completo.",
    post2_callout:
      "Regra de ouro: se você for usar um SELECT dentro de um loop, pause e pergunte se uma query set-based — ou no pior caso um bulk collect — pode substituí-lo.",
    post3_title: "Outbox Pattern: como não perder eventos quando o banco commita",
    post3_excerpt:
      "Publicar um evento de domínio após um commit no banco parece simples. Não é. O Outbox Pattern é a solução canônica — e eu o implementei no serviço de billing do Assine.",
    post3_p1:
      "Imagine que você cobra uma assinatura: o banco commita o registro de pagamento, depois você publica um evento <code>PaymentConfirmed</code> no RabbitMQ. O que acontece se a app travar entre os dois? O banco tem o dinheiro, mas o serviço de e-mail nunca dispara. O cliente nunca recebe o comprovante. Isso é o problema de dual-write.",
    post3_p2:
      "A solução: escrever o evento em uma tabela <code>outbox</code> na mesma transação local do banco que o registro de pagamento. Um processo relay separado faz polling do outbox e publica no broker — marcando as linhas como publicadas somente em caso de sucesso.",
    post3_h2: "O relay",
    post3_p3:
      "No Assine, implementei o relay como um componente Spring com agendamento. Ele lê as linhas não publicadas, publica cada uma no RabbitMQ e só então as marca como publicadas. Se a publicação falhar, a linha permanece não publicada e será reprocessada no próximo tick.",
    post3_callout:
      "O trade-off: entrega at-least-once. Seus consumidores precisam ser idempotentes. Mas isso é um problema muito mais fácil do que perder eventos.",
    post4_title: "De Júnior a Analista em 6 meses: o que realmente fez diferença",
    post4_excerpt:
      "Não foi sobre codar mais horas. Foi sobre tornar meu trabalho visível, entender o negócio e resolver problemas que ninguém me pediu para resolver.",
    post4_p1:
      "Quando entrei na Nova Smar como Assistente de Programação em novembro de 2024, defini uma meta pessoal: chegar a Analista antes do fim do primeiro ano. Seis meses depois fui promovido. Aqui está o que acho que realmente fez a diferença.",
    post4_h1: "1. Entender o porquê antes do como",
    post4_p2:
      'Em cada bug que corrigi, perguntei: "por que isso existia?" A maioria dos problemas no PHP legado não eram bugs — eram abstrações ausentes. Corrigir o sintoma e documentar a causa me tornou alguém a quem traziam problemas, não só tarefas.',
    post4_h2: "2. Tornar a complexidade visível",
    post4_p3:
      "Comecei a escrever notas internas depois de cada refactor significativo — o que estava errado, o que mudou, quais riscos restam. Gestores raramente enxergam o trabalho invisível. Torná-lo legível é uma habilidade em si.",
    post4_h3: "3. Mentorar antes de ser pedido",
    post4_p4:
      "Quando dois estagiários entraram, me voluntariei para fazer pair com eles nas primeiras tarefas. Ensinar te força a articular coisas que você acha que sabe. E sinaliza prontidão para o próximo nível de uma forma que nenhum PR isolado consegue.",
    post4_callout:
      "Promoções raramente vêm de escrever código melhor. Vêm de expandir a superfície do seu impacto além do seu próprio teclado.",
    post5_title: "E2EE em Java: ECDH + HKDF + AES-256-GCM do zero",
    post5_excerpt:
      "Criptografia ponta a ponta parece intimidadora. A matemática é difícil; a API Java é gerenciável. Aqui está o pipeline completo de troca de chaves e criptografia que construí para o projeto Discord-Like.",
    post5_h1: "O protocolo em três etapas",
    post5_li1:
      "<strong>ECDH (P-256):</strong> cada cliente gera um par de chaves, troca chaves públicas, deriva um segredo compartilhado — sem nunca transmitir o segredo em si",
    post5_li2:
      "<strong>HKDF-SHA256:</strong> estica e contextualiza o segredo compartilhado bruto em uma chave de criptografia de 256 bits adequada",
    post5_li3:
      "<strong>AES-256-GCM:</strong> cifra cada mensagem com um IV aleatório de 12 bytes — o modo GCM garante confidencialidade e integridade",
    post5_p1:
      "O servidor só vê texto cifrado e chaves públicas. Ele roteia mensagens, mas não consegue lê-las. As chaves privadas nunca saem do cliente — que nessa arquitetura é o backend Spring agindo em nome de cada sessão de usuário.",
    post5_callout:
      "Um erro comum: reutilizar o IV. Com GCM, um par (chave, IV) repetido quebra completamente a confidencialidade. Sempre gere um IV novo por mensagem.",
    post6_title: "Window functions no Oracle: substituindo loops de cursor por SQL elegante",
    post6_excerpt:
      "ROW_NUMBER, LAG, SUM OVER — uma vez que você vê o que window functions conseguem fazer, nunca mais escreve cursor para ranking ou totais acumulados.",
    post6_p1:
      "No meu trabalho, lido rotineiramente com schemas Oracle que rastreiam movimentos de produção industrial. Um requisito clássico: para cada produto, ranquear movimentos por data e calcular um custo acumulado. A abordagem júnior é um cursor com variáveis. A abordagem set-based usa window functions.",
    post6_h1: "LAG para cálculos de delta",
    post6_callout:
      "Window functions executam depois do WHERE e GROUP BY, mas antes do ORDER BY. Pense nelas como uma segunda passagem sobre linhas já filtradas — o que as torna compostas com CTEs para queries analíticas notavelmente legíveis.",
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get("lang") || "en"

  const translation = translations[lang]

  if (!translation) {
    return NextResponse.json({ error: "Language not found" }, { status: 404 })
  }

  return NextResponse.json(translation)
}

export const dynamic = "force-dynamic"
