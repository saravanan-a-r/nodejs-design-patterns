const fs = require("fs");
const NormalUser = require("./normal-user");

class Admin extends NormalUser {

    constructor(name, id, department) {
       super(name, id, department); 
       this.privilege = global.ADMIN;
    }

    /* 
        Task : 
            Write a file with given data
        Resolve : file data
        Reject : error object
    */
    writeFile(fname, data) {
        return new Promise( (resolve, reject) => {
            fs.writeFile(fname, data, (err) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(200);
                }
            });
        });
    }
}

module.exports = Admin;