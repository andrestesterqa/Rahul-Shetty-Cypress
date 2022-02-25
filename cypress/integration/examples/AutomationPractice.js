/// <reference types="Cypress" />
describe('More automations test', function(){
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    })
    it('My test', function(){
        // Check Boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']) //mutiples check

        //Check Radio buttons
        cy.get("[value='radio1']").check().should('be.checked')
        
        //Static Dropdown
        cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3')

        // Dynamic dropdowns
        cy.get('#autocomplete').type('Ven')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==='Venezuela')
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Venezuela')
        
        // visble or invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()

    })
    

})