/// <reference types="Cypress" />
describe('More automations test', function(){
    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })
    it('Handle tables', function(){
        // Invoke function
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{

            const text=$el.text()
            if(text.includes('Postman'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().next().then(function(city)
                {
                    const cityText= city.text()
                    expect(cityText).to.equal('46')
                })
            }

        })

    })

})