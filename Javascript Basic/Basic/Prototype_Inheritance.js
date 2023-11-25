/**
 * Person Prototype
 */

function Person (FirstName , LastName, Age){
    this.FirstName = "Junaid";
    this.LastName = "Ali";
    this.Age = 21;
}

/**
 * Student Prototype
 */

function student (FirstName ,LastName, Age , Roll_No){
Person.call(this, FirstName, LastName, Age);
this.Roll_No = 12;
}

student.prototype = Object.create(Person.prototype);
student.prototype.constructor = student;
let st1 = new student();
console.log(st1);

/**
 * Employer prototype
 */

function Employer(FirstName, LastName, Age, Salary){
    Person.call(this, FirstName , LastName , Age);
    this.Salary = 2000;
}

Employer.prototype = Object.create(Person.prototype);
Employer.prototype.constructor = Employer;

let Ep1 = new Employer();
console.log(Ep1);


/**
 * Teacher Prototype
 */
function Teacher(FirstName, LastName, Age ,Salary){
Employer.call(this, FirstName,LastName,Age,Salary)

}
Teacher.prototype = Object.create(Employer.prototype);



Teacher.prototype.constructor = Teacher;

let T1 = new Teacher();
console.log(T1);

/**
 * Staff Prototype
 */

function Staff(FirstName, LastName , Age, Salary){
Employer.call(this, FirstName , LastName , Age ,Salary)

}

Staff.prototype = Object.create(Employer.prototype);


Staff.prototype.constructor = Staff;

let ST1 = new Staff();
console.log(ST1);
