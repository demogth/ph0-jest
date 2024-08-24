// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;
    
    if (arr.length == 0) {
      return sum
    }
    
    arr.forEach(element => {
      if (element > 0) {
        sum += element;
      }
    })
    
    return sum
  }

module.exports = positiveSum
