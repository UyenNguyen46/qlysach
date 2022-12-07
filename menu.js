"use strict";
exports.__esModule = true;
exports.menu = void 0;
var book_1 = require("./book");
var bookmanage_1 = require("./bookmanage");
var readlineSync = require("readline-sync");
var book = new book_1.Book(1, "Sach lop 1", "Dat Tien", "Nguyen Van A", 200, "Sach lop 1");
var book1 = new book_1.Book(2, "Sach lop 2", "Re Tien", "Nguyen Van B", 300, "Sach lop 2");
var book2 = new book_1.Book(3, "Sach lop 3", "Dat Tien", "Nguyen Van C", 250, "Sach lop 3");
var book3 = new book_1.Book(4, "Sach lop 4", "Re Tien", "Nguyen Van E", 207, "Sach lop 4");
var book4 = new book_1.Book(5, "Sach lop 5", "Dat Tien", "Nguyen Van F", 800, "Sach lop 5");
var book5 = new book_1.Book(6, "Sach lop 6", "Re Tien", "Nguyen Van G", 220, "Sach lop 6");
var book6 = new book_1.Book(7, "Sach lop 7", "Dat Tien", "Nguyen Van H", 300, "Sach lop 7");
var bookManage = new bookmanage_1.Bookmanage();
bookManage.add(book);
bookManage.add(book1);
bookManage.add(book2);
bookManage.add(book3);
bookManage.add(book4);
bookManage.add(book5);
bookManage.add(book6);
function menu() {
    console.log('1:Hien thi danh sach');
    console.log('2:Tim kiem sach theo ten');
    console.log('3:Nhap thong tin mot sach moi');
    console.log('4:Chinh sua thong tin mot sach');
    console.log('5:Xoa');
}
exports.menu = menu;
var isExist = false;
while (!isExist) {
    menu();
    var number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(bookManage.showList());
            break;
        case "2":
            console.table(bookManage.searchByName(readlineSync.question("nhap ten can tim: ")));
            break;
        case "3":
            var id = +readlineSync.question('Nhap id: ');
            var name_1 = readlineSync.question('Nhap name: ');
            var type = readlineSync.question('Nhap type: ');
            var author = readlineSync.question('Nhap author: ');
            var amount = readlineSync.question('Nhap amount: ');
            var describe = readlineSync.question('Nhap describe: ');
            var book11 = new book_1.Book(id, name_1, type, author, amount, describe);
            bookManage.add(book11);
            console.table(bookManage.showList());
            break;
        case "4":
            var id1 = +readlineSync.question('Nhap id1 muon sua:');
            if (bookManage.findIndexById(id1) != -1) {
                console.table(bookManage.edit(id1));
            }
            else {
                console.log("Khong co du lieu can tim");
            }
            break;
        case "5":
            bookManage["delete"](readlineSync.question("Nhap id can xoa: "));
            console.table(bookManage.showList());
            break;
    }
}
