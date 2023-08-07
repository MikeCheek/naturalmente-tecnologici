import CryptoJS from 'crypto-js';

export const encryptData = (text: string) => {
  const data = CryptoJS.AES.encrypt(JSON.stringify(text), process.env.GATSBY_SECRET as string).toString();

  return data;
};

export const decryptData = (text: string) => {
  const bytes = CryptoJS.AES.decrypt(text, process.env.GATSBY_SECRET as string);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return data;
};
