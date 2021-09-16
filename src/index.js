"use strict";
module.exports = class Collection extends Map {
    gets(items) {
        let itemValues = [];
        for (let i = 0; i < items.length; i++) {
            itemValues.push(this.get(items[i]));
        }
        return itemValues;
    }
    getFirst() {
        let arr = [];
        let data = this.entries();
        for (let [k, v] of data) {
            arr.push(v);
        }
        let returned = arr[0];
        if (returned === undefined) {
            return false;
        }
        else {
            return returned;
        }
    }
    toJSON() {
        let data = {};
        for (let [k, v] of this.entries()) {
            data[k] = v;
        }
        return data;
    }
};
