

function additionofMatix(matrix1, matrix2) {
  const N = matrix1;
  const M = matrix2;

  const result = [];

  for(let i=0; i < N; i++){
    let r = [];
    for(let j=0; j < M; j++){
        r.push(matrix1[i][j]+matrix2[i][j]);
    }
    result.push(r);
  }
  return result;
}

console.log(additionofMatix())