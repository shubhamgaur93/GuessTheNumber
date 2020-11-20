export function findRandomNumber(min: number, max: number): number {
  if (min >= max || max - min < 2) return Infinity;
  let randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber <= min || randomNumber >= max) {
    return findRandomNumber(min, max);
  } else {
    return randomNumber;
  }
}
