function fillSpaces(fill: number, value: string): string {
  let space = "";
  for (let i = 1; i <= fill; i++) {
      space += value;
  }
  return space;
}

function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
      const whiteSpaces = fillSpaces(n - i, " ");
      const hashSpaces = fillSpaces(i, "#");
      console.log(whiteSpaces + hashSpaces);
  }
}

staircase(6);
