class Person{

 Display( FirstName , LastName , Age ,Program ,Salary) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Program = Program;
        this.Salary = Salary;

    }
}

P1 = new Person();
P1.Display("Junaid", "Ali", 21 ,"SE", "300$")
console.log(P1);

class Student extends Person{

 }
    


 s1 = new Student();
 s1.FirstName = "Junaid";
 s1.LastName = "Ali";
 s1.Age = 21;
 s1.Program ="SE";
 console.log(s1);

class Employer extends Person{

}
E1 = new Employer();
E1.FirstName = "Kashif";
E1.LastName = "Khan";
E1.Age = 24;
E1.Salary = "500$";
console.log(E1);
class Teacher extends Employer{

}
T1 = new Teacher();
let x = new T1.constructor("Junaid"," Ali",24 ,null,"400$");
console.log(x);

class Staff extends Employer{

}
E1 = new Staff();
let y = new E1.constructor("Naeem"," shah",24 ,"","1000$");
console.log(y);

