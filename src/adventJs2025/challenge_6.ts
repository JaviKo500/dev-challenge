type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
  // Code here
  const colors: string[] = []
  for (const glove of gloves) {
    const indexPar = gloves.findIndex(
      (g) => g.color === glove.color && g.hand !== glove.hand
    )
    if (indexPar > -1) {
      colors.push(glove.color)
      gloves.splice(indexPar, 1)
    }
  }
  console.log(colors);
  return colors
}
