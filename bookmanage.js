"use strict";
exports.__esModule = true;
exports.Bookmanage = void 0;
var readlineSync = require("readline-sync");
var Bookmanage = /** @class */ (function () {
    function Bookmanage() {
        this.book = [];
    }
    Bookmanage.prototype.add = function (sach) {
        this.book.push(sach);
    };
    Bookmanage.prototype.searchByName = function (name) {
        var names = [];
        for (var i = 0; i < this.book.length; i++) {
            if (this.book[i].getName() == name) {
                names.push(this.book[i]);
            }
        }
        return names;
    };
    Bookmanage.prototype.showList = function () {
        return this.book;
    };
    Bookmanage.prototype.findIndexById = function (id) {
        var ind = -1;
        for (var i = 0; i < this.book.length; i++) {
            if (this.book[i].getId() == id) {
                ind = i;
            }
        }
        return ind;
    };
    Bookmanage.prototype.edit = function (id) {
        var i = this.findIndexById(id);
        this.book[i].setId(+readlineSync.question('Nhap id moi: '));
        this.book[i].setName(readlineSync.question('Nhap ten moi: '));
        this.book[i].setType(readlineSync.question('Nhap loai moi: '));
        this.book[i].setAuthor(readlineSync.question('Nhap tac gia moi: '));
        this.book[i].setAmount(+readlineSync.question('Nhap so luong moi: '));
        this.book[i].setDescribe(readlineSync.question('Nhap mo ta moi: '));
        return this.book[i];
    };
    Bookmanage.prototype["delete"] = function (id) {
        var resigns = [];
        for (var i = 0; i < this.book.length; i++) {
            if (this.book[i].getId() == id) {
                console.table(this.book[i]);
                resigns.push(this.book.splice(i, 1));
            }
        }
    };
    return Bookmanage;
}());
exports.Bookmanage = Bookmanage;
