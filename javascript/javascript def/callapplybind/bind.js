const emp={
    name:"mythili",
    lname:"g",
    fullname(id,city){
        console.log(`fullname is ${this.name} ${this.lname} ,empid is ${id} and city is ${city}` );
    }
}
// emp.fullname();  //refers to emp obj and shows output

// getname=emp.fullname.bind(emp);
// getname()

const person={
    name:"sreeram",
    lname:"m"
}

const person1={
    name:"vikas",
    lname:"g"
}

// let newemp=emp.fullname.bind(person,"1242","hyd")
// newemp()

const obj=document.getElementById("bt")
// console.log(obj);

obj.addEventListener("click", emp.fullname.bind(person,"1242","hyd"))
