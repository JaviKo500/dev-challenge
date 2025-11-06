// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
// El tema es que es una cadena de texto y es muy difícil de leer 😱. 
// ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, 
//   igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, 
// que significa que está tachado y no se tiene que contar.

export const countGiftsLetter2 = () => {
  // const letter = 'ci _ a m __ b c a b c ';
  const letter = 'bici coche balón _playstation bici coche peluche';
  console.log('<--------------- JK CountGiftsLetter_2 --------------->');
  console.log(letter);
  const giftsList = letter.replaceAll('  ', ' ').trim().split(' ').map( gift => gift.trim().toLowerCase() ).filter( gift => !gift.includes('_'));
  // console.log('<--------------- JK CountGiftsLetter_2 --------------->');
  // console.log(giftsList);
  const gifts: Record<string, number> = {};
  for (const gift of giftsList) {
    if ( gifts[gift] ) {
      gifts[gift]++;
      continue;
    }
    gifts[gift] = 1;
  }
  // console.log('<--------------- JK CountGiftsLetter_2 --------------->');
  // console.log(gifts);
  return gifts;
}