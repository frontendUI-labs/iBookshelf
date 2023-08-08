export const randomID = () => {
  // TODO: use randomUUID when it's supported in all browsers
  // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
  // Until then, use this fallback
  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 15) +
    Math.random().toString(36).slice(2, 15)
  );
};
