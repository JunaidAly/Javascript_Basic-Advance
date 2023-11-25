
let person = {FirstName: "Ali",
              LastName: "Ahmed",
              Age: 24,
              address: {streetNo: 10,
                        HouseNo: 21,
                        BlockNo: "A-Block"},

             display:function(){
             return   this.FirstName +" "+this.LastName+
                " "+this.address.BlockNo;
             }

}
let result = person.display();
console.log(result);