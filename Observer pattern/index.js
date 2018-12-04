const FileObserver = require('./file-observer');
const User = require('./user');

var file = new FileObserver()
            .setFilePath("./testfile.txt");

var saravanan = new User()
                    .setUserName("Saravanan A R");

var ravi = new User()
                .setUserName("Ravi");

var demoUser = new User()
                    .setUserName("Demo User")

file.subscribe(saravanan);
file.subscribe(ravi);
file.subscribe(demoUser);

file.appendToFile("Hi, I'm a node js developer");
file.writeToFile("Full content changed");