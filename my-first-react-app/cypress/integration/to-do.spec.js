import {ToDo} from "../../src/to-do.js"

describe("to-do unit tests", function() {
    it("starts as an empty array", function() {
        let todo = new ToDo()
        expect(JSON.stringify(todo.array)).to.equal(JSON.stringify([]))
    })

    it("adds to array", function() {
        let todo = new ToDo()
        expect(JSON.stringify(todo.add('something'))).to.equal(JSON.stringify(['something']))
    })

    it("adds to array twice", function() {
        let todo = new ToDo()
        todo.add('something')
        expect(JSON.stringify(todo.add('another'))).to.equal(JSON.stringify(['something','another']))
    })

    it("resets array", function() {
        let todo = new ToDo()
        expect(JSON.stringify(todo.refresh())).to.equal(JSON.stringify([]))
    })

    it("adds to array twice, then refresh, then add again", function() {
        let todo = new ToDo();
        todo.add('something');
        todo.add('another');
        todo.refresh();
        expect(JSON.stringify(todo.add('thing'))).to.equal(JSON.stringify(['thing']))
    })
})