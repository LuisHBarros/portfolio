## The protocol in three steps

- **ECDH (P-256):** each client generates a key pair, exchanges public keys, derives a shared secret — without ever transmitting the secret itself
- **HKDF-SHA256:** stretches and contextualises the raw shared secret into a proper 256-bit encryption key
- **AES-256-GCM:** encrypts each message with a random 12-byte IV — GCM mode gives both confidentiality and integrity

```java
// Key derivation with HKDF
byte[] sharedSecret = deriveSharedSecret(myPrivateKey, theirPublicKey);
SecretKeySpec key = hkdfExpand(sharedSecret, "chat-v1".getBytes());

// Encryption — new random IV per message
byte[] iv = SecureRandom.getInstanceStrong().generateSeed(12);
Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv));
byte[] ciphertext = cipher.doFinal(plaintext.getBytes(UTF_8));
```

The server only ever sees ciphertext and public keys. It routes messages but cannot read them. The private keys never leave the client — which in this architecture is the Spring backend acting on behalf of each user session.

> One common mistake: reusing the IV. With GCM, a repeated (key, IV) pair completely breaks confidentiality. Always generate a fresh IV per message.
