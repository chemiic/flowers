
export const format = (str: string): string => {
  const s: number = str.length;
  const chars: string[] = str.split('');
  const strWithSpaces: string = chars.reduceRight((acc, char, i) => {
    const spaceOrNothing: "" | " " = ((((s - i) % 3) === 0) ? ' ' : '');
    return (spaceOrNothing + char + acc);
  }, '');

  return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}

export const discountPrice = (price:number, discount:number) => {
  return format((price - price * discount / 100).toFixed(0));
};
