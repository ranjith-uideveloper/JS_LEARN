
class User{
    constructor(firstName, lastName, mobileNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    displayDetails=()=>{
        console.log(`First name is ${this.firstName}`);
        console.log(`Last name is ${this.lastName}`);
        console.log(`Mobile No is ${this.mobileNumber}`);
        console.log(`Email is ${this.email}`);
    }
}

let user = new User("Ranjith", "Kumar", 995922885, "ranjith@gmail.com");
let user2 = new User("Sai", "Kumar", 46464646, "sai@gmail.com");

user.displayDetails();
user2.displayDetails();






