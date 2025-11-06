export const validateGiftsLetter3 = () => {

  console.log(checkGiftsLetter('bici coche (balón) bici coche peluche'));
  console.log(checkGiftsLetter('bici coche coche peluche'));
  console.log(checkGiftsLetter('bici coche (balón bici coche'));
  console.log(checkGiftsLetter('peluche (bici [coche) bici coche balón'));
  console.log(checkGiftsLetter('(peluche {) bici'));
  console.log(checkGiftsLetter('() bici'));
  console.log(checkGiftsLetter('(()) bici'));
  console.log(checkGiftsLetter(')bici( casa play'));
  console.log(checkGiftsLetter('()) casa play'));

}

const checkGiftsLetter = (letter: string): boolean => {
  console.log('<--------------- JK ValidateGiftsLetter_3 --------------->');
  console.log(letter);
  const giftList = letter.trim().split(' ').filter( gift => gift.startsWith('(') && gift.endsWith(')') && gift.length > 2 );
  // console.log('<--------------- JK ValidateGiftsLetter_3 --------------->');
  // console.log(giftList);
  if ( !giftList.length) return false;
  const invalidChars = ['{', '}', '[', ']', '()'];
  if ( giftList.some( gift => invalidChars.some( char => gift.includes(char)  ) ) ) return false;
  return true;
}

