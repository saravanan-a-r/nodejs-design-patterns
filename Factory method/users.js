const SuperAdmin = require("./super-admin");
const Admin = require("./admin");
const NormalUser = require("./normal-user");

function factoryMethod(user, name, id, department) {
    var instance = null;
    switch(user) {
        case NORMAL_USER : 
            instance = new NormalUser(name, id, department);
        break;

        case ADMIN :
            instance = new Admin(name, id, department);
        break;

        case SUPER_ADMIN : 
            instance = new SuperAdmin(name, id, department);
        break;
    }

    return instance;
}

module.exports = factoryMethod;

