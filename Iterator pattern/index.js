const User = require("./user.js");
const Iterator = require("./iterator.js");

var users = [
    new User("User 1", "10"),
    new User("User 2", "11"),
    new User("User 3", "12"),
    new User("User 4", "13"),
    new User("User 5", "14"),
    new User("User 6", "15")
];

/* --- Creating an Iterator for the list of users --- */
var userIterator = new Iterator(users);

/* --- Displaying the first element from the Iterator --- */
userIterator.first().displayUser();

/* --- Displaying the last element from the Iterator --- */
userIterator.last().displayUser();

/* --- Traversing the Iterator --- */
while(userIterator.hasNext()) {
    userIterator.next().displayUser();
}

/* --- Resetting the Iterator to the first position --- */
userIterator.reset();

/* --- Traversing through the first three element from the Iterator --- */
userIterator.next();
userIterator.next();
userIterator.next()

/* --- Traversing the Iterator in the backward direction --- */
while(userIterator.hasPrev()) {
    userIterator.prev().displayUser();
}