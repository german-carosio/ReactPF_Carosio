//Primera letra mayuscula
export const mayus = (text) => {
    const firstLetter = text.charAt(0);
    const rest = text.slice(1);
    return firstLetter.toUpperCase() + rest;
  }