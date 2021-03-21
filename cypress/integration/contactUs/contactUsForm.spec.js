/// <reference types="cypress" />

describe('Testing contact us from on webpage', () => {
    beforeEach(() => {
        cy.visit('?controller=contact')
    })

    it('Checks does page render form to fill', () => {
        cy.get('h1')
            .contains('Customer service - Contact us')

        cy.get('#message')
            .should('be.visible')

        cy.get('#id_contact')
            .should('be.visible')
    })

    it('Submit empty form it should throw error on webpage', () => {
        cy.get('#submitMessage').click()

        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Invalid email address.')
    })

    it('Enter only email and submit form - It should throw error', () => {
        cy.get('#email')
            .type('a@a.com')

        cy.get('#submitMessage')
            .click()

        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'The message cannot be blank.')
    })

    it('Enter email and message and submit form', () => {
        cy.get('#email')
            .type('a@a.com')

        cy.get('#id_contact')
            .select('2')

        cy.get('#message')
            .type('Hello, World')


        cy.get('#submitMessage')
            .click()

        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Your message has been successfully sent to our team.')

    })
})