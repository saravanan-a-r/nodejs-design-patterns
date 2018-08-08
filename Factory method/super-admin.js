const fs = require("fs");
const createUser = require("./users");
const Admin = require("./admin");

class SuperAdmin extends Admin {
    
    constructor(name, id, department) {
        super(name, id, department);
        this.privilege = global.SUPER_ADMIN;
    }

    /* 
        Task : 
            Will delete given file
        Resolve : 200 -> Delete file operation success
        Reject : error object if error occur.
    */
    deleteFile(fname) {
        return new Promise( (resolve, reject) => {
            fs.unlink(fname, (err) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(200);
                }
            });
        });
    }

    /*
        Task : 
            Will delete given user if it is not a super admin user
        Return : 
            user -> deleteUser operation success
            401 -> You are trying to delete a super admin user
    */
    deleteUser(user) {
        if(user.privilege === global.SUPER_ADMIN) {
            console.log("Errr! You are trying to delete a super admin user");
            return 401;
        }
        user = null;
        return user;
    }

    /* 
        Task : 
            Upgrade / Downgrade user privilege.
            Example :
            1) Upgrading normal user to admin user
            2) Downgrade admin user to normal user
        Return : 
            user -> configUser operation success
            401 -> User already has the required privilege
    */
    // configUser(user, targetPrivilege) {
    //     var privilegeNow = user.privilege;
    //     if(privilegeNow === targetPrivilege) {
    //         console.log("User already has the required privilege");
    //         return 401;
    //     }
    //     return createUser(targetPrivilege, user.name, user.id, user.department);
    // }
}

module.exports = SuperAdmin;