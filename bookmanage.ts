import {Book} from "./book";
import * as readlineSync from "readline-sync";

export class Bookmanage {
    book: Book[] = []

    add(sach: Book) {
        this.book.push(sach)
    }

    searchByName(name: string) {
        let names = []
        for (let i = 0; i < this.book.length; i++) {
            if (this.book[i].getName() == name) {
                names.push(this.book[i]);
            }
        }
        return names;
    }

    showList() {
        return this.book;

    }

    findIndexById(id) {
        let ind = -1;
        for (let i = 0; i < this.book.length; i++) {
            if (this.book[i].getId() == id) {
                ind = i;
            }
        }
        return ind

    }

    edit(id) {
        let i = this.findIndexById(id);
        this.book[i].setId(+readlineSync.question('Nhap id moi: '))
        this.book[i].setName(readlineSync.question('Nhap ten moi: '))
        this.book[i].setType(readlineSync.question('Nhap loai moi: '))
        this.book[i].setAuthor(readlineSync.question('Nhap tac gia moi: '))
        this.book[i].setAmount(+readlineSync.question('Nhap so luong moi: '))
        this.book[i].setDescribe(readlineSync.question('Nhap mo ta moi: '))
        return this.book[i];
    }

    delete(id) {

        let resigns = [];
        for (let i = 0; i < this.book.length; i++) {
            if (this.book[i].getId() == id) {
                console.table(this.book[i]);
                resigns.push(this.book.splice(i, 1));
            }
        }
    }
}

