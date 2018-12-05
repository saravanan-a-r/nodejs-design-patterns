class Iterator {

    constructor(items = []) {
        this.items = items;
        this.index = 0;
    }

    first() {
        let items = this.items;
        if(items.length) {
            return items[0];
        }
        return undefined;
    }

    last() {
        let items = this.items;
        if(items.length) {
            return items[items.length - 1];
        }
        return undefined;
    }

    hasNext() {
        if(this.items.length > this.index) {
            return true;
        } else {
            return false;
        }
    }

    hasPrev() {
        if(this.index >= 0) {
            return true;
        }
        else {
            return false;
        }
    }

    next() {
        let items = this.items;
        if(!items.length || items.length <= this.index) {
            return undefined;
        }
        return items[this.index++];
    }

    prev() {
        let items = this.items;
        if(!items.length || this.index < 0) {
            return undefined;
        }
        return items[this.index--];
    }

    current() {
        return this.items[this.index];
    }

    reset() {
        this.index = 0;
    }
}

module.exports = Iterator;