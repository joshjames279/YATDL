describe("Checking functionality of YetAnotherToDoList", function(){
    beforeEach(function(){
       cy.visit("/")
    })

   it("Shows a header of Yet Another To Do List", function(){
       cy.contains('Yet Another Todo List!')
   })

   it("Shows a header of Yet Another To Do List", function(){
       cy.get('#ToDo')
})
})