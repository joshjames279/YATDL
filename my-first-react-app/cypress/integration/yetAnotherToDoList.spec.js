describe("Checking functionality of YetAnotherToDoList", function(){
    beforeEach(function(){
       cy.visit("/")
    })

   it("Shows a header of Yet Another To Do List", function(){
       cy.contains('Yet Another Todo List!')
    })

   it("Shows a textbox", function(){
       cy.get('#ToDo')
    })

    it("Shows a save button", function() {
        
       cy.get("#Save-button")
    })

    it("Shows a list", function() {
       
      cy.get('#ToDo').type('something')
      cy.get('#Save-button').click()
      cy.contains('something')
    })

    it("Shows a list of multiple things", function() {
       
      cy.get('#ToDo').type('something')
      cy.get('#Save-button').click()
      cy.get('#ToDo').clear()
      cy.get('#ToDo').type('else')
      cy.get('#Save-button').click()
      cy.contains('something')
      cy.contains('else')
    })

    it("Shows a list and we can markthrough when checkbox ticked", function() {
       
      cy.get('#ToDo').type('something')
      cy.get('#Save-button').click()
      cy.get('#ToDo').clear()
      cy.get('#ToDo').type('else')
      cy.get('#Save-button').click()
      cy.get('#item-0-checkbox').click()
      cy.get('#item-0-text').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
      cy.contains('something')
      cy.get('#item-1-text').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)')
      cy.contains('else')
    })

    it("Shows a list and we can markthrough when checkbox ticked", function() {
       
      cy.get('#ToDo').type('something')
      cy.get('#Save-button').click()
      cy.get('#ToDo').clear()
      cy.get('#ToDo').type('else')
      cy.get('#Save-button').click()
      cy.get('#item-0-checkbox').click()
      cy.get('#Clear').click()
      cy.get('#item-0-text').should('not.exist')
      cy.get('#item-1-text').should('not.exist')
    })

})