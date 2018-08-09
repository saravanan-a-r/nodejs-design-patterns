class HrPortal {

    constructor() {
        /*
            Optimization for v8 engine hidden class generation
        */
        this.name = undefined;
        this.emp_id = undefined;
        this.teamName = undefined;
        this.address = undefined;
        this.isPermanent = undefined;
        this.projectCount = undefined;
    }

    setName(name) {
        this.name = name;
        return this;
    }
    
    setEmpId(emp_id) {
        this.emp_id = emp_id;
        return this;
    }

    setTeamName(teamName) {
        this.teamName = teamName;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    isPermanentEmp(value) {
        this.isPermanent = value;
        return this;
    }

    projectCompleted(value) {
        this.projectCount = value;
        return this;
    }
}

module.exports = HrPortal;