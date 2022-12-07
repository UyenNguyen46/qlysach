"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name, type, author, amount, describe) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._author = author;
        this._amount = amount;
        this._describe = describe;
    }
    Book.prototype.getId = function () {
        return this._id;
    };
    Book.prototype.setId = function (value) {
        this._id = value;
    };
    Book.prototype.getName = function () {
        return this._name;
    };
    Book.prototype.setName = function (value) {
        this._name = value;
    };
    Book.prototype.getType = function () {
        return this._type;
    };
    Book.prototype.setType = function (value) {
        this._type = value;
    };
    Book.prototype.getAuthor = function () {
        return this._author;
    };
    Book.prototype.setAuthor = function (value) {
        this._author = value;
    };
    Book.prototype.getAmount = function () {
        return this._amount;
    };
    Book.prototype.setAmount = function (value) {
        this._amount = value;
    };
    Book.prototype.getDescribe = function () {
        return this._describe;
    };
    Book.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    return Book;
}());
exports.Book = Book;
