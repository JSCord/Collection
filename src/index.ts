export = class Collection<K extends string, V> extends Map<K, V> {
    public gets(items: K[]) {
        let itemValues: Array<V | undefined> = [];

        for (let i = 0; i < items.length; i++) {
            itemValues.push(this.get(items[i]));
        }

        return itemValues;
    }

    public getFirst() {
        let arr = [];

        let data = this.entries();

        for (let [k, v] of data) {
            arr.push(v);
        }
        
        let returned = arr[0];

        if (returned === undefined) {
            return false;
        } else {
            return returned;
        }
    }

    public toJSON(): {[key: string]: V} {
        let data: { [key: string]: V } = {};

        for (let [k, v] of this.entries()) {
            data[k] = v;
        }

        return data;
    }
}