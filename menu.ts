import {Book} from "./book";
import {Bookmanage} from "./bookmanage";
import * as readlineSync from "readline-sync";

let bookManage = new Bookmanage()
bookManage.add(new Book(1, "Sach lop 1", "Dat Tien", "Nguyen Van A", 200, "Sach lop 1"))
bookManage.add(new Book(2, "Sach lop 2", "Re Tien", "Nguyen Van B", 300, "Sach lop 2"))
bookManage.add(new Book(3, "Sach lop 3", "Dat Tien", "Nguyen Van C", 250, "Sach lop 3"))
bookManage.add(new Book(4, "Sach lop 4", "Re Tien", "Nguyen Van E", 207, "Sach lop 4"))
bookManage.add(new Book(5, "Sach lop 5", "Dat Tien", "Nguyen Van F", 800, "Sach lop 5"))
bookManage.add(new Book(6, "Sach lop 6", "Re Tien", "Nguyen Van G", 220, "Sach lop 6"))
bookManage.add(new Book(7, "Sach lop 7", "Dat Tien", "Nguyen Van H", 300, "Sach lop 7"))


export function menu() {
    console.log('1:Hien thi danh sach')
    console.log('2:Tim kiem sach theo ten')
    console.log('3:Nhap thong tin mot sach moi')
    console.log('4:Chinh sua thong tin mot sach')
    console.log('5:Xoa')
}

let isExist = false;

while (!isExist) {
    menu();
    let number = readlineSync.question('Chon chuc nang: ');
    switch (number) {
        case "1":
            console.table(bookManage.showList());
            break;
        case "2":
            console.table(bookManage.searchByName(readlineSync.question("nhap ten can tim: ")))
            break;
        case "3":
            let id = +readlineSync.question('Nhap id: ');
            let name = readlineSync.question('Nhap name: ');
            let type = readlineSync.question('Nhap type: ');
            let author = readlineSync.question('Nhap author: ');
            let amount = readlineSync.question('Nhap amount: ');
            let describe = readlineSync.question('Nhap describe: ');
            let book11 = new Book(id, name, type, author, amount, describe)
            bookManage.add(book11)
            console.table(bookManage.showList());
            break;
        case "4":
            let id1: number = +readlineSync.question('Nhap id1 muon sua:');
            if (bookManage.findIndexById(id1) != -1) {
                console.table(bookManage.edit(id1))
            } else {
                console.log("Khong co du lieu can tim")

            }
            break;
        case "5":
            bookManage.delete(readlineSync.question("Nhap id can xoa: "));
            console.table(bookManage.showList())
            break;
    }

}
