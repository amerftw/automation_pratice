/// <reference types="cypress" />

describe('Testing links in footer,each link should have unique destination',()=>{

    /**
     * Should this be each link in different 'it' block or not 
     * It's probably better to group them all together 
     */
    //const homePage = new homePage()

    it('Verify the href, dont click through',()=>{
        cy.visit('/')

        //this looks ugly should prolly do page object 

        cy.verifyUrl(1,'http://automationpractice.com/index.php?controller=prices-drop')
        cy.verifyUrl(2,'http://automationpractice.com/index.php?controller=new-products')
        cy.verifyUrl(3,'http://automationpractice.com/index.php?controller=best-sales')
        cy.verifyUrl(4,'http://automationpractice.com/index.php?controller=stores')
        cy.verifyUrl(5,'http://automationpractice.com/index.php?controller=contact')
        cy.verifyUrl(6,'http://automationpractice.com/index.php?id_cms=3&controller=cms')
    })
})