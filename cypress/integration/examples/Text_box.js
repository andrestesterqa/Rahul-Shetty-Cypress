/// <reference types="Cypress" />
describe('Test on text_box', function(){

})
it ('Fullfit a form', function(){
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('Test from Cypress');
    cy.get('#userEmail').type('testCypress@mail.com');
    cy.get('#currentAddress').type('My first test from Cypress. I like automation');
    cy.get('#permanentAddress').type('Whatever');
    cy.get('#submit').click();
    cy.get('#name').should('have.text', "Name:Test from Cypress");
})
it('Add information', function(){
    cy.visit('https://demoqa.com/webtables');
    cy.get('#addNewRecordButton').click();
    cy.get('#registration-form-modal').should('have.text', 'Registration Form');
    cy.get('#firstName').type('Cypress Test');
    cy.get('#lastName').type('Automation');
    cy.get('#userEmail').type('cypress@mail.com');
    cy.get('#age').type('40');
    cy.get('#salary').type('30000');
    cy.get('#department').type('QA/QC');
    cy.get('#submit').click();
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('have.text', 'Cypress Test');



})