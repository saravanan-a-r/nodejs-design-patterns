/* --- Factory method design pattern demo ---- */
const createUser = require("./users");

global.NORMAL_USER = "NORMAL_USER";
global.ADMIN = "ADMIN";
global.SUPER_ADMIN = "SUPER_ADMIN";

/* 
    Admin user task list : 
        1) Can write a file
        2) Can read a file
*/
async function simulateAdminUser() {
    var admin =  createUser(ADMIN, "name_admin", "#2", "IT");
    var fname = "resource.txt";
    var data = "Ufff.... I am admin user. I'm writing this file.";

    var err, result;
    [err, result] = await to(admin.writeFile(fname, data));
    if(err || !isSuccess(result)) {
        console.log(err);
        return;
    }

    [err, result] = await to(admin.readFile(fname));
    if(err) {
        console.log(err);
        return;
    }
    console.log("File data : " + result);
}

/* 
    Normal user task list : 
        1) Can read a file
*/
async function simulateNormalUser() {
    var normalUser =  createUser(NORMAL_USER, "name_normal", "#3", "IT");
    var fname = "resource.txt";
    
    var err, result;
    [err, result] = await to(normalUser.readFile(fname));
    if(err) {
        console.log(err);
        return;
    }
    console.log("File data : " + result);
}

/* 
    Super admin task list : 
        1) Can delete a file
        2) Can delete a subordinate user
        3) Can upgrade/download a user
        4) Can write a file
        5) Can read a file
*/
async function simulateSuperUser() {
    var superAdmin = createUser(SUPER_ADMIN, "name_super", "#1", "IT");
    var fname = "resource.txt";
    var data = "Ufff.... I am admin user. I'm writing this file.";

    var err, result;
    [err, result] = await to(superAdmin.writeFile(fname, data));
    if(err || !isSuccess(result)) {
        console.log(err);
        return;
    }

    [err, result] = await to(superAdmin.readFile(fname));
    if(err) {
        console.log(err);
        return;
    }
    console.log("File data : " + result);

    [err, result] = await to(superAdmin.deleteFile(fname));
    if(err) {
        console.log(err);
        return;
    }
    
    var normalUser =  createUser(NORMAL_USER, "name_normal", "#3", "IT");
    normalUser = superAdmin.deleteUser(normalUser);

    //normalUser =  createUser(NORMAL_USER, "name_normal", "#3", "IT");
    //normalUser = superAdmin.configUser(normalUser, global.ADMIN);
}

/*
    This anonymous function will simulate following users using Factory method.
    a) normal user
    b) admin
    c) super admin
*/  
(function() {
    simulateAdminUser();
    simulateNormalUser();
    simulateSuperUser();
})();

function isSuccess(code) {
    if(code === 200) {
        return true;
    }
    return false;
}

function to(promise) {
    return promise.then( (data) => {
       return [null, data];
    }).catch((err) => {
        return [err, null];
    });
}