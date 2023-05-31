import { ref, Ref } from 'vue';

interface MintAddress {
  mintToAddress: Ref<string>;
}

export default function useMintAddress(): MintAddress {
  const mintToAddress = ref('');
  return { mintToAddress };
}