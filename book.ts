export class Book {
    private _id:number;
    private _name:string;
    private _type: string;
    private _author:string;
    private _amount:number;
    private _describe:string;

    constructor(id: number, name: string, type: string, author: string, amount: number, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._author = author;
        this._amount = amount;
        this._describe = describe;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getType(): string {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
    }

    getAuthor():string{
        return this._author;
    }

    setAuthor(value: string) {
        this._author = value;
    }

    getAmount(): number {
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
    }

    getDescribe(): string {
        return this._describe;
    }

    setDescribe(value: string) {
        this._describe = value;
    }
}