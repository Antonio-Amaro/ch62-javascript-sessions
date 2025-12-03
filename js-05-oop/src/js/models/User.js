class User {
    constructor( firstName, lastName, age, correoElectronico ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = correoElectronico;
    }
    /** Saludar */
    greet() {
        return `Hello, I'm ${this.firstName} ${this.lastName}, ${this.age} years old.`;
    }

}

export {User}