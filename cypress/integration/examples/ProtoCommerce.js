/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage'
import ProductsPage from '../PageObjects/ProductsPage'

describe('More automations test', function(){
    before(function(){
        cy.fixture("exampleTwo").then(function(data){
this.data=data

        })
        
    })
    it('Fullfill a form', function(){
        const homePage=new HomePage()
        const productsPage=new ProductsPage()
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGemnder().select(this.data.gender)
        homePage.getTwoDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        
        //this.data.productName

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        });
        
        //cy.selectProduct('Nokia Edge')
        
    })

})