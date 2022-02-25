/// <reference types="Cypress" />
describe('More automations test', function(){

    })
    it('My test', function(){
        cy.visit('https://www.mercadolibre.com.ar/')
        cy.get('.nav-search-input').type('bicicleta{enter}')
        cy.get(':nth-child(2) > .ui-search-filter-highlighted > .ui-search-filter-highlighted__container > .ui-search-filter-highlighted__switch-container > .ui-search-animated-switch > .ui-search-animated-switch__switch-bar')
        .click()
        cy.get('.andes-tag__label').should('have.text', 'Full')

    })