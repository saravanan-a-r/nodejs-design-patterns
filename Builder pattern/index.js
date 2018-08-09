const HrPortal = require("./hr-portal");

(function() {

    /*  BUILDER DESIGN PATTERN TO CONTRUCT A OBJECT */
    var newEmployee = new HrPortal()
        .setName("Saravanan A R")
        .setEmpId("1000")
        .setTeamName("Node JS")
        .setAddress("Chennai")
        .isPermanentEmp(true)
        .projectCompleted(6);
    
    /* 
        Without builder design pattern the above code will looks like this,
        var newEmployee = new ProjectMGMT("Saravanan A R", "1000", "Node JS", "Chennai", true, 6);
        
        We don't have any idea about the constructor parameters.
    */
})();