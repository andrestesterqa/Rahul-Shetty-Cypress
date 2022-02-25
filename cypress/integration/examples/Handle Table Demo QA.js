/// <reference types="Cypress" />
describe('More automations test', function(){
    beforeEach(function(){
        cy.visit('https://demoqa.com/webtables');
    })
    it('Handle tables', function(){
        // Invoke function
        cy.get('.rt-table .rt-td:nth-child(1)').each(($el, index, $list) =>{

            const text=$el.text()
            if(text.includes('Kierra'))
            {
                cy.get('.rt-table .rt-td:nth-child(1)').eq(index).next().next().then(function(age)
                {
                    const ageText= age.text()
                    expect(ageText).to.equal('29')
                })
            }
        })
    })
    it('Handle other values in the tables', function(){

        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Andrés')
        cy.get('#lastName').type('Hernández')
        cy.get('#userEmail').type('test@mail.com')
        cy.get('#age').type('40')
        cy.get('#salary').type('100000')
        cy.get('#department').type('Quality Control')
        cy.get('#submit').click()
        // Invoke function
        cy.get('.rt-table .rt-tdclave').each(($el, index, $list) =>{

            const text=$el.text()
            if(text.includes('test@mail.com'))
            {
                cy.get('.rt-table .rt-td').eq(index).next().next().then(function(department)
                {
                    const departmentText= department.text()
                    expect(departmentText).to.equal('Quality Control')
                })
            }
        })
    })

})
