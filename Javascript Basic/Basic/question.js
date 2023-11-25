// student = [3, 3.5,3.5,2];

// var  arr1 = [1,2,3,4,5];
// function multiplier(x){
//     return x * 2;
// }

// let x = arr1.map(multiplier);

// console.log(x);

// function filter_func(x){
// if(x % 2 == 0){
//     return true;
// }
// else{
//     return false;
// }

// }

// let x = arr1.filter(filter_func);

// console.log(x);
/**
 * Class Task 1
 */
/*function to print the gpa of student greater then 3 */
// function my_func(x){
//     if( x > 3 ){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let x = student.filter(my_func);

// console.log(x);
/**
 * Class Task2
 */
//give the grade to each student
// function myfunc(x){
//     if (x >= 3.5){
//       return  console.log("Grade A");
//     }
//     else if( x >= 3){
//       return  console.log( "Grade B");
//     }
//     else if( x >= 2){
//       return  console.log("Grade C");
//     }
// }
// let x = student.filter(myfunc);
// console.log(x);

/**
 * Leximal Scope
 *
 */

// function my_func(){
//     let y= 30;
// let x= y+10;
//     return x;
// }
// let x = my_func();
// console.log(x);

/**
 * Functions
 */

// function my_func(p1,p2){
//     return p1 + p2;
// }

// let x = my_func(2,3);
// console.log(x);

/**
 * Inner Functions
 */

// function OuterFunction(){
    
//     function InnerFunction(){
//         console.log("Inner Function");
//     }
//     InnerFunction();
//     return "Outer Function";
// }

// let x = OuterFunction;
// console.log(x());

// function display(x){
//     var arr1 = ["a","b","c"];
//     var arr2 = ["d","e","f"];

//     var x = [...arr1,...arr2];

//     return x;

// }

// let y = display();
// console.log(y);

// function merge(z){
// var a = "i am comsian";
// var b = "i am uetian";
//  w = [a,b];
// return w;
// }

// let ans = merge();
// console.log(ans);

// let ans1 = ans.replace(1,0);
// console.log(ans1);

let str = "hello";
console.log(str.slice(1, 4)); // Output: "ell"
console.log(str.slice(-4)); // Output: "llo"


