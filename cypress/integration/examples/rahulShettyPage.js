/// <reference types="Cypress" />

describe('Practice Page with Rahu', function(){
beforeEach(function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.viewport(1024, 768);
})
it('My firts test case', function(){
    cy.get('.search-keyword').type('ca');
    cy.get('.product:visible').should('have.length', 4);
    //Parent child channing
    cy.get('.products').find('.product').should('have.length', 4);
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();

    })


})