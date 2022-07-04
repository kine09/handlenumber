// kiểm tra số nguyên tố
function handleNumber(n) {
  if (n === 2) {
    return true;
  } else if (n > 1) {
    for (var i = 2; i < n; i++) {
      if (n % i !== 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

// tính min/max mảng
const arrNumber = [7, 2, 3, 4, 10];

function handleArr(arr) {
  const newArr = arr.sort((a, b) => a - b);
  const sumMax =
    newArr.reduce(function (acc, crr) {
      return acc + crr;
    }, 0) - newArr[0];
  return sumMax;
}

console.log(handleArr(arrNumber));
