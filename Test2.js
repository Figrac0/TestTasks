const w = +prompt("Ширина матрицы");
const h = +prompt("Высота матрицы");

function matrix(w, h) {
  let res = new Array(h).fill().map(() => new Array(w).fill(""));

  let counter = 1;
  let startCol = 0;
  let endCol = w - 1;
  let startRow = 0;
  let endRow = h - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      res[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      res[j][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      res[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let j = endRow; j >= startRow; j--) {
      res[j][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return res;
}

console.log(matrix(w, h));
