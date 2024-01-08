function interval(a, b) {
  let count = a;
  setInterval(() => {
    if (count <= b) {
      console.log(count)
      count++;      
    }
  }, 1000)
}

interval(5, 15)