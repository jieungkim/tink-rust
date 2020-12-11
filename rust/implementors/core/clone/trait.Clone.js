(function() {var implementors = {};
implementors["rinkey"] = [{"text":"impl Clone for KeysetFormat","synthetic":false,"types":[]},{"text":"impl Clone for KeysetReader","synthetic":false,"types":[]},{"text":"impl Clone for KeysetWriter","synthetic":false,"types":[]},{"text":"impl Clone for KeyTemplate","synthetic":false,"types":[]},{"text":"impl Clone for WrappingOptions","synthetic":false,"types":[]},{"text":"impl Clone for InOptions","synthetic":false,"types":[]},{"text":"impl Clone for OutOptions","synthetic":false,"types":[]},{"text":"impl Clone for PublicKeysetOptions","synthetic":false,"types":[]},{"text":"impl Clone for AddRotateOptions","synthetic":false,"types":[]},{"text":"impl Clone for ConvertKeysetOptions","synthetic":false,"types":[]},{"text":"impl Clone for CreateKeysetOptions","synthetic":false,"types":[]},{"text":"impl Clone for KeyIdOptions","synthetic":false,"types":[]},{"text":"impl Clone for Command","synthetic":false,"types":[]}];
implementors["tink"] = [{"text":"impl Clone for Entry","synthetic":false,"types":[]},{"text":"impl Clone for PrimitiveSet","synthetic":false,"types":[]},{"text":"impl Clone for AesCmacParams","synthetic":false,"types":[]},{"text":"impl Clone for AesCmacKey","synthetic":false,"types":[]},{"text":"impl Clone for AesCmacKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesCmacPrfKey","synthetic":false,"types":[]},{"text":"impl Clone for AesCmacPrfKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrParams","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrKey","synthetic":false,"types":[]},{"text":"impl Clone for EllipticCurveType","synthetic":false,"types":[]},{"text":"impl Clone for EcPointFormat","synthetic":false,"types":[]},{"text":"impl Clone for HashType","synthetic":false,"types":[]},{"text":"impl Clone for HmacParams","synthetic":false,"types":[]},{"text":"impl Clone for HmacKey","synthetic":false,"types":[]},{"text":"impl Clone for HmacKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrHmacAeadKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrHmacAeadKey","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrHmacStreamingParams","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrHmacStreamingKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesCtrHmacStreamingKey","synthetic":false,"types":[]},{"text":"impl Clone for AesEaxParams","synthetic":false,"types":[]},{"text":"impl Clone for AesEaxKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesEaxKey","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmKey","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmHkdfStreamingParams","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmHkdfStreamingKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmHkdfStreamingKey","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmSivKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmSivKey","synthetic":false,"types":[]},{"text":"impl Clone for AesSivKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for AesSivKey","synthetic":false,"types":[]},{"text":"impl Clone for ChaCha20Poly1305KeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for ChaCha20Poly1305Key","synthetic":false,"types":[]},{"text":"impl Clone for KeyTypeEntry","synthetic":false,"types":[]},{"text":"impl Clone for RegistryConfig","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaParams","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaPublicKey","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaPrivateKey","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaSignatureEncoding","synthetic":false,"types":[]},{"text":"impl Clone for KeyTemplate","synthetic":false,"types":[]},{"text":"impl Clone for KeyData","synthetic":false,"types":[]},{"text":"impl Clone for KeyMaterialType","synthetic":false,"types":[]},{"text":"impl Clone for Keyset","synthetic":false,"types":[]},{"text":"impl Clone for Key","synthetic":false,"types":[]},{"text":"impl Clone for KeysetInfo","synthetic":false,"types":[]},{"text":"impl Clone for KeyInfo","synthetic":false,"types":[]},{"text":"impl Clone for EncryptedKeyset","synthetic":false,"types":[]},{"text":"impl Clone for KeyStatusType","synthetic":false,"types":[]},{"text":"impl Clone for OutputPrefixType","synthetic":false,"types":[]},{"text":"impl Clone for EciesHkdfKemParams","synthetic":false,"types":[]},{"text":"impl Clone for EciesAeadDemParams","synthetic":false,"types":[]},{"text":"impl Clone for EciesAeadHkdfParams","synthetic":false,"types":[]},{"text":"impl Clone for EciesAeadHkdfPublicKey","synthetic":false,"types":[]},{"text":"impl Clone for EciesAeadHkdfPrivateKey","synthetic":false,"types":[]},{"text":"impl Clone for EciesAeadHkdfKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for Ed25519KeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for Ed25519PublicKey","synthetic":false,"types":[]},{"text":"impl Clone for Ed25519PrivateKey","synthetic":false,"types":[]},{"text":"impl Clone for Empty","synthetic":false,"types":[]},{"text":"impl Clone for HkdfPrfParams","synthetic":false,"types":[]},{"text":"impl Clone for HkdfPrfKey","synthetic":false,"types":[]},{"text":"impl Clone for HkdfPrfKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for HmacPrfParams","synthetic":false,"types":[]},{"text":"impl Clone for HmacPrfKey","synthetic":false,"types":[]},{"text":"impl Clone for HmacPrfKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for JwtHmacKey","synthetic":false,"types":[]},{"text":"impl Clone for JwtHmacKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for KmsAeadKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for KmsAeadKey","synthetic":false,"types":[]},{"text":"impl Clone for KmsEnvelopeAeadKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for KmsEnvelopeAeadKey","synthetic":false,"types":[]},{"text":"impl Clone for PrfBasedDeriverParams","synthetic":false,"types":[]},{"text":"impl Clone for PrfBasedDeriverKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for PrfBasedDeriverKey","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPkcs1Params","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPkcs1PublicKey","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPkcs1PrivateKey","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPkcs1KeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPssParams","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPssPublicKey","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPssPrivateKey","synthetic":false,"types":[]},{"text":"impl Clone for RsaSsaPssKeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for XChaCha20Poly1305KeyFormat","synthetic":false,"types":[]},{"text":"impl Clone for XChaCha20Poly1305Key","synthetic":false,"types":[]},{"text":"impl Clone for Primitive","synthetic":false,"types":[]}];
implementors["tink_aead"] = [{"text":"impl Clone for KmsEnvelopeAead","synthetic":false,"types":[]},{"text":"impl Clone for AesCtr","synthetic":false,"types":[]},{"text":"impl Clone for AesGcm","synthetic":false,"types":[]},{"text":"impl Clone for AesGcmSiv","synthetic":false,"types":[]},{"text":"impl Clone for ChaCha20Poly1305","synthetic":false,"types":[]},{"text":"impl Clone for EncryptThenAuthenticate","synthetic":false,"types":[]},{"text":"impl Clone for XChaCha20Poly1305","synthetic":false,"types":[]}];
implementors["tink_daead"] = [{"text":"impl Clone for AesSiv","synthetic":false,"types":[]}];
implementors["tink_mac"] = [{"text":"impl Clone for AesCmac","synthetic":false,"types":[]},{"text":"impl Clone for Hmac","synthetic":false,"types":[]}];
implementors["tink_prf"] = [{"text":"impl Clone for AesCmacPrf","synthetic":false,"types":[]},{"text":"impl Clone for HkdfPrf","synthetic":false,"types":[]},{"text":"impl Clone for HmacPrf","synthetic":false,"types":[]}];
implementors["tink_signature"] = [{"text":"impl Clone for SignatureEncoding","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaPrivateKey","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaSigner","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaPublicKey","synthetic":false,"types":[]},{"text":"impl Clone for EcdsaVerifier","synthetic":false,"types":[]},{"text":"impl Clone for Ed25519Signer","synthetic":false,"types":[]},{"text":"impl Clone for Ed25519Verifier","synthetic":false,"types":[]}];
implementors["tink_testing_server"] = [{"text":"impl Clone for ServerInfoRequest","synthetic":false,"types":[]},{"text":"impl Clone for ServerInfoResponse","synthetic":false,"types":[]},{"text":"impl Clone for KeysetGenerateRequest","synthetic":false,"types":[]},{"text":"impl Clone for KeysetGenerateResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for KeysetPublicRequest","synthetic":false,"types":[]},{"text":"impl Clone for KeysetPublicResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for KeysetToJsonRequest","synthetic":false,"types":[]},{"text":"impl Clone for KeysetToJsonResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for KeysetFromJsonRequest","synthetic":false,"types":[]},{"text":"impl Clone for KeysetFromJsonResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for AeadEncryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for AeadEncryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for AeadDecryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for AeadDecryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for DeterministicAeadEncryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeterministicAeadEncryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for DeterministicAeadDecryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeterministicAeadDecryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for StreamingAeadEncryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for StreamingAeadEncryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for StreamingAeadDecryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for StreamingAeadDecryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for ComputeMacRequest","synthetic":false,"types":[]},{"text":"impl Clone for ComputeMacResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for VerifyMacRequest","synthetic":false,"types":[]},{"text":"impl Clone for VerifyMacResponse","synthetic":false,"types":[]},{"text":"impl Clone for HybridEncryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for HybridEncryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for HybridDecryptRequest","synthetic":false,"types":[]},{"text":"impl Clone for HybridDecryptResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for SignatureSignRequest","synthetic":false,"types":[]},{"text":"impl Clone for SignatureSignResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for SignatureVerifyRequest","synthetic":false,"types":[]},{"text":"impl Clone for SignatureVerifyResponse","synthetic":false,"types":[]},{"text":"impl Clone for PrfSetKeyIdsRequest","synthetic":false,"types":[]},{"text":"impl Clone for PrfSetKeyIdsResponse","synthetic":false,"types":[]},{"text":"impl Clone for Output","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl Clone for PrfSetComputeRequest","synthetic":false,"types":[]},{"text":"impl Clone for PrfSetComputeResponse","synthetic":false,"types":[]},{"text":"impl Clone for Result","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for MetadataClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for KeysetClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for AeadClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for DeterministicAeadClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for StreamingAeadClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for MacClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for HybridClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for SignatureClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for PrfSetClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Metadata&gt; Clone for MetadataServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Metadata&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Keyset&gt; Clone for KeysetServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Keyset&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Aead&gt; Clone for AeadServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Aead&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;DeterministicAead&gt; Clone for DeterministicAeadServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;DeterministicAead&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;StreamingAead&gt; Clone for StreamingAeadServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;StreamingAead&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Mac&gt; Clone for MacServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Mac&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Hybrid&gt; Clone for HybridServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Hybrid&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Signature&gt; Clone for SignatureServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Signature&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PrfSet&gt; Clone for PrfSetServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PrfSet&gt; Clone for _Inner&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tink_testutil"] = [{"text":"impl Clone for DummyAead","synthetic":false,"types":[]},{"text":"impl Clone for DummyMac","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()