## O protocolo em três etapas

- **ECDH (P-256):** cada cliente gera um par de chaves, troca chaves públicas, deriva um segredo compartilhado — sem nunca transmitir o segredo em si
- **HKDF-SHA256:** estica e contextualiza o segredo compartilhado bruto em uma chave de criptografia de 256 bits adequada
- **AES-256-GCM:** cifra cada mensagem com um IV aleatório de 12 bytes — o modo GCM garante confidencialidade e integridade

```java
// Derivação de chave com HKDF
byte[] sharedSecret = deriveSharedSecret(myPrivateKey, theirPublicKey);
SecretKeySpec key = hkdfExpand(sharedSecret, "chat-v1".getBytes());

// Criptografia — novo IV aleatório por mensagem
byte[] iv = SecureRandom.getInstanceStrong().generateSeed(12);
Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv));
byte[] ciphertext = cipher.doFinal(plaintext.getBytes(UTF_8));
```

O servidor só vê texto cifrado e chaves públicas. Ele roteia mensagens, mas não consegue lê-las. As chaves privadas nunca saem do cliente — que nessa arquitetura é o backend Spring agindo em nome de cada sessão de usuário.

> Um erro comum: reutilizar o IV. Com GCM, um par (chave, IV) repetido quebra completamente a confidencialidade. Sempre gere um IV novo por mensagem.
