
class Employee{

    constructor(id, name, salary, designation){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.designation = designation;
    }

    // empDetails=(id, name, salary, designation)=>{
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    //     this.designation = designation;
    //     console.log(`employee id is ${this.id}`);
    //     console.log(`employee id is ${this.name}`);
    //     console.log(`employee id is ${this.salary}`);
    //     console.log(`employee id is ${this.designation}`);
    // }

    empDetails=(id, name, salary, designation)=>{
        console.log(`employee id is ${id}`);
        console.log(`employee id is ${name}`);
        console.log(`employee id is ${salary}`);
        console.log(`employee id is ${designation}`);
    }

}

let employee = new Employee();
employee.empDetails(001, "Sachin", 70000, "engineer");


