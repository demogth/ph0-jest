// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
    newArr = []
  
  for (let ind = 1; ind < arr.length; ind++) {
    let leftPart = arr.slice(0, ind).join(' ');
    let rightPart = arr.slice(ind).join(' ');
    newArr.push([leftPart, rightPart]);
  } 

  return newArr
}

module.exports = partlist