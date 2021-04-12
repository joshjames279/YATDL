describe("Checking functionality of YetAnotherToDoList", function(){

   it("Shows a header of Yet Another To Do List", function(){
       cy.visit("/")
       cy.contains('Yet Another Todo List!')
   })
})