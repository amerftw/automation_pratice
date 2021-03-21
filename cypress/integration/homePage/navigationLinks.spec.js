/// <reference types="cypress" />

describe('Testing navigation bar and its links', () => {

    it('Check does navigation bar exists', () => {
        cy.visit('/')

        cy.get('#block_top_menu > ul')
            .should('be.visible')

    })

    it('Check depth of navigation bar', () => {
        cy.get('#block_top_menu > ul > li:nth-child(2) > ul >li')
            .should('have.length', 3)
    })

    it('Click on women tab and check does it reddirect', () => {
        cy.get('.sf-menu > :nth-child(1) > a')
            .contains("Women")
            .click()

        cy.url()
            .should('contain', 'id_category=3')
    })
})