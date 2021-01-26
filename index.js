// Multiples of n
function mult(n) {
  const mult = [];
  for(let i = 1; i <= 100; i++) {
    if(i % n === 0) {
      mult.push(i * n);
    }       
  }
  return mult;
}


// Largest Product Yielded
function large(arr) {
  const yield = arr.sort((a, b) => a - b);
  let length = arr.length;
  if(yield[0] < 0 && yield[1] < 0) {
    let largest= yield[0] * yield[1] * yield[length - 1];
    return largest;
  } else {
    let largest = yield[length - 1] * yield[length - 2] * yield[length - 3];
    return largest;
  }
}


//Find the Missing Number

//Unique Values

//Largest Difference in Order

// Intersection Between Two Arrays
module.exports = { 
  mult,
  large
 };