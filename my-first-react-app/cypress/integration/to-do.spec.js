import {ToDo} from "../../src/to-do.js"

describe("to-do unit tests", function() {
    it("starts as an empty array", function() {
        let todo = new ToDo()
        expect(todo.array).to.equal([])
    })
})