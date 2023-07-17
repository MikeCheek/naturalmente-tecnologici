export const removeHTMLTags = (text: string) => text.replace(/<\/?[^>]+(>|$)/g, '');

export const textToId = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^(a-z0-9\-)]/gi, '');
