/**
 * Objects 
 */

let obj = {
    Name : "Junaid Ali",
    Reg_No : 01,
}

/**
 * To Print Complete Object
 */
console.log(obj);

/**Another Way */
let obj2 = new Object();

obj2.Name = "Ali";
obj2.Reg_No = 02;
/**
 * 2nd Way to Assign values
 */

obj2["Reg"] = 02;

console.log(obj.Name + " " + obj["Reg_No"]);


/**
 * Assign Multiple Data Type Values to Single Array
 */

arr1 = [1,"Ali", {name : "Ahmed"}, function name(){
console.log("Function Inside array")}];

arr1 = [3]();

/**Template Function Or Construct Fucntion */

function Student(n,r){
    this.name = n;
    this.Reg = r;
}

let O1 = new Object("Ali", 03);
let O2 = new Object("Ali", 03);
let O3 = 01;
console.log(01 == 02); //This will return false
console.log(01 == 03);//This will Return True because refernce is same

//console.log(01);

/**Delete Obj propertices */

delete O1.name;