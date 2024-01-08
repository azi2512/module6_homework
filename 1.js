let arr = [5, 2, 5, 0, true, 'hj', 0, '0', 0, '6', NaN];

function evenOdd(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (let i = 0; i <= arr.length; i++) {  
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zero += 1;
      }
      else if (arr[i] % 2 === 0) {
        even += 1;
      }
      else {
        odd += 1
      }
    }  
  }
  console.log(even, odd, zero);
}

evenOdd(arr)