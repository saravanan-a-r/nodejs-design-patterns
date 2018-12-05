class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayUser() {
        console.log("User name : " + this.name + " :: User age : " + this.age);
    }
}

module.exports = User;