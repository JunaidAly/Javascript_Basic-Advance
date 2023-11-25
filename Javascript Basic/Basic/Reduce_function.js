let arr = [1,2,3,4,5];

/**
 * Reduce Function
 */

function reducer(x,y){
    return x + y;
}

let x = arr.reduce(reducer);

console.log(x);

/**
 * Reducer(1,2) = 3 | Reducer(100,1) = 101
 * Reducer(3,3) = 6
 * Reducer(6,4) = 10
 * Reducer(10,5) = 15
 * 
 */