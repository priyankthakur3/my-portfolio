export const validateString = (message: unknown, length: number) => {
  if (!message || typeof message !== "string" || message.length > length) {
    return false;
  }

  return true;
};
