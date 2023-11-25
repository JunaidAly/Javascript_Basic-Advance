let person = {
    Name : "Junaid Ali",
    Age : 21,
}

console.log(person);

function vehicle(make , model){
    this.make = make;
    this.model = model;
}



//console.log(x);

vehicle.prototype.display= function(){
    return "model of this vehicle is "+this.model;
}
const v1 = new vehicle("make", "2018");

console.log(v1.display);
