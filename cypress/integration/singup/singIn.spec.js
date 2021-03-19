/// <reference types="cypress" />

describe("Sing in with valid and invalid credentials", () => {
    beforeEach(() => {
        cy.visit('?controller=authentication');
    })
    it("Enter invalid credentials and ensure you wont log in", () => {
        cy.login('a@a.com', 'password')

        cy.get('#center_column > :nth-child(2)').should('be.visible');


    })

    it("Enter valid credentials", () => {
        cy.login('janedoe@doe.com', 'password')

        cy.location().should((loc) => {
            expect(loc.href).to.include('?controller=my-account')
        })
    })
})