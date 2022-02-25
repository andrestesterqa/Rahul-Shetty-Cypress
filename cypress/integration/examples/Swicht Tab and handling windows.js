/// <reference types="Cypress" />
describe('More automations test', function(){
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })
    it('Swicht Tab in Cypress', function(){
        // Invoke function
        cy.get('#opentab').invoke("removeAttr", 'target').click()
       
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')
        // Navigation on browser (back or forward)
        cy.go('back')

    })
    it('Handling windows', function(){
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.visit(url)
        })
    })

})