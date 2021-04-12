export class ToDo {
    constructor(array = []){
    this.array = array
    }

    add(string){
        this.array.push(string);
        return this.array;
    }

    refresh(){
        this.array = [];
        return this.array;
    }
}