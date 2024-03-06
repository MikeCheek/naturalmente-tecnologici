const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randInt;

export const getRandomNum = (min: number, max: number) => Math.random() * (max - min) + min;
