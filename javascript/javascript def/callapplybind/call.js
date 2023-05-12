const emp={
    name:"mythili",
    lname:"g",
    fullname(id,city){
        console.log(`fullname is ${this.name} ${this.lname} ,empid is ${id} and city is ${city}` );
    }
}
// emp.fullname();

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

emp.fullname.call(person,"1242","hyd")


emp.fullname.apply(person1,["1242","rjy"])