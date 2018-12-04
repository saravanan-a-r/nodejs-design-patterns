class FileObserver {
    constructor() {
        this.filePath = undefined;
        this.subscription = [];
    }

    setFilePath(filePath) {
        this.filePath = filePath;
        return this;
    }
    
    /* ---
        Storing the subscriber instance so that we can invoke notify method if changes occur
    --- */
    subscribe(observer) {
        this.subscription.push(observer);
    }

    /* ---
        This method will append the given data to a file.
    --- */
    appendToFile(data) {
        let filePath = this.filePath;
        let fs = require('fs');
        fs.appendFile(filePath, data, (err) => {
            if(err) {
                throw err;
            }
            else {
                this.notifyToSubscriber(data);
            }
        });
    }

    /* ---
        This method will rewrite the file with the given data.
    --- */
    writeToFile(data) {
        let filePath = this.filePath;
        let fs = require('fs');
        fs.writeFile(filePath, data, (err) => {
            if(err) {
                throw err;
            }
            else {
                this.notifyToSubscriber(data);
            }
        });
    }

    /* ---
        This method will send notification to all the subscribers with two params
        ie. filePath and data
    --- */
    notifyToSubscriber(data) {
        this.subscription.forEach( (observer) => {
            observer.notify(this.filePath, data);
        });
    }
}

module.exports= FileObserver;