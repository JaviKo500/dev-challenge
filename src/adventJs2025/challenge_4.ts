/*Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]
Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1
El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null. */
export const challenge4 = () => {
  
  console.log('<--------------- JK Challenge_4 --------------->');
  console.log(decodeSantaPin('[1++][2-][3+][<]'));
  // "3144"

  console.log('<--------------- JK Challenge_4 --------------->');
  console.log(decodeSantaPin('[9+][0-][4][<]'));
  // "0944"

  console.log('<--------------- JK Challenge_4 --------------->');
  console.log(decodeSantaPin('[1+][2-]'));
  // null (solo 2 dígitos)
  console.log('<--------------- JK Challenge_4 --------------->');
  console.log(decodeSantaPin('[0][<][<][<]'));
  // "0000"
  console.log('<--------------- JK Challenge_4 --------------->');
  console.log(decodeSantaPin('[1+++++++++][2--][3----][<]'));
  // "0099"
}

const decodeSantaPin = (code: string) => {
  const blocks = code.match(/\[(.*?)\]/g)?.map( b => b.slice(1,-1)) ?? [];
  let pin = '';
  for (const block of blocks) {
    if ( block === '<') {
      pin += ( pin.at(-1) ?? '' ); 
      continue;
    }

    const value = Number( block.at(0));
    const operation = block.slice(1);
    let result = value;

    for (const op of operation) {
      if ( op === '+' ) result ++;
      if ( op === '-' ) result --;
    }
    pin += ((( result % 10) + 10) % 10).toString();
  }
  return pin.length >= 4 ? pin : null;
}