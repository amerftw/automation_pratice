/// <reference types="cypress" />

describe("Test authentication page", () => {

    beforeEach(()=>{
        cy.visit('?controller=authentication&back=my-account');
    })

    it('Enter invalid email', () => {
        cy.get('#email_create').
        type('a@a.com');

        cy.get('#SubmitCreate').
        click();

        cy.get('#create_account_error').
        should('be.visible')

        cy.contains("An account using this email address has already been registered. ").
        should('exist')

    })

    it('Enter valid email',  () => {
        cy.get('#email_create')
        .type("janedoe1@doe.com")

        cy.get('#SubmitCreate')
        .click()

        //if email contains account-creation it means we got reddirected and email is valid
        cy.url()
        .should('contain', '#account-creation');
    })

})