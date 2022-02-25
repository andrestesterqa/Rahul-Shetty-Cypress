/// <reference types="Cypress" />
describe('More automations test', function(){
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    })
    it('Mouse hover option', function(){
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true}) //other way to click on a invisible element
        cy.url().should('include', 'top')

    })

})