/// <reference types="Cypress" />
describe('More automations test', function(){
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })
    it('Alert Popups', function(){
        cy.get('#alertbtn').click()
        cy.get("[value='Confirm']").click()

        //windows Alert
        cy.on('window:alert', (String)=>
        {
            expect(String).to.equal('Hello , share this practice page and share your knowledge')
        })
        // windows confirm
        cy.on('window:confirm', (String)=>
        {
            expect(String).to.equal('Hello , Are you sure you want to confirm?')
        })

        

    })

})