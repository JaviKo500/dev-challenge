/*Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

Tu misión es escribir una función que reciba:

fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
takeOffTime → la misma fecha de despegue, también en formato elfo.
La función debe devolver:

Los segundos completos que faltan para el despegue.
Si ya estamos en el despegue exacto → 0.
Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
🎯 Reglas
Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
Usa diferencias en segundos, no en milisegundos.
Redondea siempre hacia abajo (floor): solo segundos completos. */
export const challenge5 = () => {
  const takeoff = '2025*12*25@00|00|00 NP'
  console.log('<--------------- JK Challenge_5 --------------->');
  console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff));  
  console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff));  
  console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff));  
}

type ElfaDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`
const timeUntilTakeOff = (
  fromTime: ElfaDateTime,
  takeOffTime: ElfaDateTime,
) => {
  const getDateUtc = (elfaDateTime: ElfaDateTime) => {
    const [, y, m, d, h, mi, s] = elfaDateTime.match(/(\d+)\*(\d+)\*(\d+)@(\d+)\|(\d+)\|(\d+) NP/) || [];
    return new Date( Date.UTC(Number(y), Number(m), Number(d), Number(h), Number(mi), Number(s)) );
  }
 
  const timeFrom = getDateUtc(fromTime);
  const timeTakeOff = getDateUtc(takeOffTime);

  const diff = timeTakeOff.getTime() - timeFrom.getTime();
  
  const seconds = Math.floor(diff / 1000);
  return seconds;
}