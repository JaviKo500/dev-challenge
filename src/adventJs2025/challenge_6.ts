/** 
 * 
 * En el taller de Santa, los elfos han encontrado una montaña 
 * de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores: hand: indica si es un 
 * guante izquierdo (L) o derecho (R) color: el color del guante (string)
 * Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.
 * Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color.
 *  El orden se determina por el que se pueda hacer primero el par.
 * 
*/

interface Glove {
  hand: 'L' | 'R',
  color: string
}

export const challenge6 = () => {
  const gloves: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
  ];

  const colors =matchGloves(gloves);
  // ["red", "green"]
  console.log('<--------------- JK Challenge_6 --------------->');
  console.log(colors);

  const gloves2: Glove[] = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
  ];

  const colors2 = matchGloves(gloves2);
  // ["gold", "gold"]
  console.log('<--------------- JK Challenge_6 --------------->');
  console.log(colors2);

  const colors3 =matchGloves([
    { hand: 'L', color: 'green' },
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' }
  ]);

  console.log('<--------------- JK Challenge_6 --------------->');
  console.log(colors3);
  // ["red","green"]
}

const matchGloves = ( gloves: Glove[]) => {
  const waiting = { L: new Map<string, number>(), R: new Map<string, number>() };
  const colorsPairs: string[] = [];
  for (const { hand, color } of gloves) {
    const other = hand === 'L' ? 'R' : 'L';
    const available = waiting[other].get(color) ?? 0;

    if (available > 0) {
      waiting[other].set(color, available - 1);
      colorsPairs.push(color);                                    // par cerrado aquí
    } else {
      waiting[hand].set(color, (waiting[hand].get(color) ?? 0) + 1);
    }
  }

  return colorsPairs;
}
// const matchGloves = ( gloves: Glove[]) => {
//   const colors: Set<string> = new Set( gloves.map(glove => glove.color) );
//   const colorsPairs: string[] = [];
//   colors.forEach(color => {
//     const left = gloves.filter(glove => glove.color === color && glove.hand === 'L').length;
//     const right = gloves.filter(glove => glove.color === color && glove.hand === 'R').length;
    
//     const min = Math.min(left, right);
//     if ( min ) {
//       colorsPairs.push(...Array(min).fill(color));
//     }
//   });
//   return colorsPairs;
// }
