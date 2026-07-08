/** 
 * 
*/

export const challenge7 = () => {
  // const tree1 = drawTree(3, '@', 3);
  const tree2 = drawTree(5, '@', 2);
}

const drawTree = (height: number, ornament: string, frequency: number ) => {
  const columns = (height * 2) - 1;
  for (let i = 0; i < height; i++) {
    // const tree = Array(height).fill('*').join('');
    // const tree =  (Array(columns).fill('*').join(''));
    //  const tree = ' '.repeat(columns/2) + '*'.repeat(i) + ' '.repeat(columns/2);
    //  const tree ='*'.padStart(columns/2, '1').padEnd(columns/2, '1');
    const tree = `*`.repeat(columns);
    let replace = frequency -1;
    const r = tree.split('').map((item, index) => {
      if ( !i ) {
        return i +1;
      }
      if ( index === replace && item.trim().length) {
        replace += frequency;
        return `${ornament}`;
      }
      return item;
    })
    console.log(r.join(''));
    // console.log(tree);
  }
  const l = ' '.repeat(columns/2) + '#' + ' '.repeat(columns/2);
  console.log(l);
}