// src/createEmotionCache.ts
import createCache from '@emotion/cache';

export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
