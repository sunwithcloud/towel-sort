
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  if (matrix == undefined)
  {
    return [];
  }
  
  if (matrix.length == 0)
  {
    return [];
  }

  if (matrix.length == 2)
  {
    for (let key in matrix)
    {
      arr2 = matrix[1]
    }
    arr2.sort(function(a,b) { return b - a; });
    const newArray = [...matrix[0], ...arr2];
    return newArray
  }

  if (matrix.length == 3)
  {
    for (let key in matrix)
    {
      arr2 = matrix[1]
    }
    arr2.sort(function(a,b) { return b - a; });
    arr4 = arr2.concat(arr3);
    const newArray = [...matrix[0], ...arr2, ...matrix[2]];
    return newArray
  }

  if (matrix.length == 4)
  {
    for (let key in matrix)
    {
      arr2 = matrix[1];
      arr3 = matrix[3];
    }
    arr2.sort(function(a,b) { return b - a; });
    arr3.sort(function(a,b) { return b - a; });
    arr4 = arr2.concat(arr3);
    arr5 = matrix[0].concat(matrix[2]);
    const newArray = [...matrix[0], ...arr2, ...matrix[2], ...arr3];
    return newArray
  }
}
