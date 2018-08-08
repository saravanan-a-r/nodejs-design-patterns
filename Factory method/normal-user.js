const fs = require("fs");

class NormalUser {

    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.privilege = global.NORMAL_USER;
    }

    /* 
        Task : 
            Read a given file
        Resolve : file data
        Reject : error object
    */
    readFile(fname) {
        return new Promise( (resolve, reject) => {
            fs.readFile(fname, (err, data) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = NormalUser;