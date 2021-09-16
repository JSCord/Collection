declare const _default: {
    new <K extends string, V>(entries?: readonly (readonly [K, V])[] | null | undefined): {
        gets(items: K[]): (V | undefined)[];
        getFirst(): false | V;
        toJSON(): {
            [key: string]: V;
        };
        clear(): void;
        delete(key: K): boolean;
        forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
        get(key: K): V | undefined;
        has(key: K): boolean;
        set(key: K, value: V): any;
        readonly size: number;
        entries(): IterableIterator<[K, V]>;
        keys(): IterableIterator<K>;
        values(): IterableIterator<V>;
        [Symbol.iterator](): IterableIterator<[K, V]>;
        readonly [Symbol.toStringTag]: string;
    };
    new <K extends string, V>(iterable: Iterable<readonly [K, V]>): {
        gets(items: K[]): (V | undefined)[];
        getFirst(): false | V;
        toJSON(): {
            [key: string]: V;
        };
        clear(): void;
        delete(key: K): boolean;
        forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
        get(key: K): V | undefined;
        has(key: K): boolean;
        set(key: K, value: V): any;
        readonly size: number;
        entries(): IterableIterator<[K, V]>;
        keys(): IterableIterator<K>;
        values(): IterableIterator<V>;
        [Symbol.iterator](): IterableIterator<[K, V]>;
        readonly [Symbol.toStringTag]: string;
    };
    readonly [Symbol.species]: MapConstructor;
};
export = _default;
