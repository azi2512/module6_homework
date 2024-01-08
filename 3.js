function sum(x) {
    return function(y) {
        return x + y;
    };
}

let result = sum(5);
console.log(result(2));