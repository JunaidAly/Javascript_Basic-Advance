/**Conventioanl function */

// function adder(x , y){
//     return x + y;
// }
// let x = adder(5,4);
// console.log(x);

/**
 * Arrow Functions 
 * () => {}
 */
// const adder = (x,y)=>{
//     return x+y;
    
// };

// let y = adder(5,5);
// console.log(y);

/**Arrow function with no args */
// const func_WithNoArgs = x =>{
//     console.log("function with no args");
// }

// func_WithNoArgs();
/**Arrow function with single args */
// const func_singleArgs = x =>{
//     console.log(x);
// }

// func_singleArgs(5);

/**Arrow funciton with single return statement */
// const func_ret =(y)=>y**2;
// let z = func_ret(3);
// console.log(z);

/**Return object as a single return statement */
// const func_obj = ()=>{
//     test : "test";
// };
// console.log(func_obj());

/**Rest Operators 
 * java : main(str args[])
*/
// const adder_miltiple = (...args) =>{
// console.log(args)
// };

// adder_miltiple(1,2,3,4);

// adder_miltiple(1,2,3,4);

/**Arrow functions as an arguments */
//let arr = [1,2,3,4,5];
/**Function sauarer(x){
 * return x**2;
 * } */
// let y = arr.map((x)=>{
//    return x**2;
// });
// console.log(y);
/**Spread operators */
// let arr1 = ["a","b", "c"];
// let arr2 = ["d","e","f"];
//let arr3 = [...arr1,...arr2];
//let arr3 = [arr1,arr2];
// console.log(arr3);
// console.log(arr3.length);

/**Destructuring  */
// const func_arr= ()=> {
//     return[1,2,3];
// }

// let result = func_arr();

// a = result[0];
// console.log(a);

// let [a,b,c,d] = result;
// console.log(a,b,c,d);

// let [a,b] = result;
// console.log(a,b);

// let [a=3,b=4,c=5,d=4] = result;
// console.log(a,b,c,d);

// let[,,c] = result;
// console.log(c);

//let obj = {a:"a", b:"b", c:"c"};
 //let obj = {d:"a", e:"b", f:"c"};
//let {a,b,c}= obj;
//let {b,a,c}= obj;
 //let {d:a,e:b,f:c}= obj;
// let {d:b,e:a,f:c}= obj;
// console.log(a,b,c);


/**
 * For of Loop 
 */

//let array = [1,2,3,4,5];

// for(let s of array )
// {
// console.log(s);
// }

// using this it passes key to i and value of s
// for(let [i,s] of array.entries() )
// {
// console.log(i,s);
// }

/** 
 * For in loop
 */

// it iterates the keys

// let obj = {a : 1, b:2 , c:3};

// for(let index in obj){
//     console.log(index);
// }

/// class is a templates which define the number of functions and properties

/**
 * Classes
 */

//const student = class{} // class as an expression

// class student {
//     constructor (name , reg)
//     {
//         this.name = name;
//         this.reg = reg;
//     }
//      uni = "CUI";
//     display(){
//         console.log(this.name,this.reg);
//     }

//     //getter
//     get getname(){
//         return this.name;
//     }

//     set getname(n){
//         if(n !== "")
//         return this.name = n;
//     }
// }

// //instances

// let std1 = new student("Ali", 02);

// let std2 = new student("Ahmed", 01);

// console.log(std1.name);

// console.log(std2.name);


// console.log(std2.uni);


// let str = `Iam a long string that can 

// have multiple lines` ;

// let name = "kamran";

// let address = "CUI";

// console.log("My name is"+name + "and add is "+ address);

// console.log(`My name is ${name}  and add is  ${address}`);
//back tik
// let content = `<html>
//     <body>
//         <h1>Hello Word</h1>
//         <img src="images/a.jpg"  />
//         <p>A Paragraph</p>
//     </body>
// </html>`

/** 
 * This key word
 */
//this wii refer object
//function(){
 //   console.log(this);
//}
// let speed = 50;
// function Dip(){
//     let speed = 30;
//  let dip = ( function(){console.log(this.speed)
// })();


//  Dip();
// }
// console.log(this.speed);

let a = new Display();
let ob = {
    a: 1,
    b: 2,
    Display: function (){
        console.log(this);
    },
};

