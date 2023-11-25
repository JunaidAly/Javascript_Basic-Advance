const person = class{
    constructor(Fname , Lname){
        this._Fname = Fname;
        this._Lname= Lname;
    }

greet = () => `Welcome ${this._Fname}  ${this._Lname} To Bcs 6B`;
}

const p1 = new person("Junaid", "Ali");

console.log(p1.greet());