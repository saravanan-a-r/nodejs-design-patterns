class User {
    constructor() {
        this.name = "No name";
    }

    setUserName(name) {
        this.name = name;
        return this;
    }

    /* --- 
        This notify method will get invoke whenever some changes occurs on the 
        subscribed resources(file)
    --- */
    notify(filePath, appendData) {
        console.log("User : " + this.name + ", File Path : " + filePath + ", Append data : " + appendData);
    }
}

module.exports = User;