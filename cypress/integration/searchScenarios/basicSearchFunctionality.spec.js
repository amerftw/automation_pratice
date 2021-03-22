/// <reference types="cypress" />

describe('Testing for basic search functionality on website', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Check is there placeholder in search box', () => {
        cy.get('#search_query_top')
            .should('have.attr', 'placeholder', 'Search')
    })

    it('User should be able to search when he enters the keyword and hits ‘Enter’ button on keyboard', () => {
        cy.get('#search_query_top')
            .type('dress{enter}')

        cy.url()
            .should('contain', 'search_query=dress')
    })

    it('Type "text", refresh the page "text" should remain',()=>{
        //This functionality is not on this site and it will always clear search box when you refresh page
        //but i think it should be implemented, so this test will always fail

        cy.get('#search_query_top')
            .type('text')

        cy.reload()

        cy.get('#search_query_top')
            .should('have.value', 'text')
    })

    it('Enter nothing/ click on the search button', () => {
        /**
         * this should allow you to stay on same page
         * i dont know why does it reddirect to search page
         */
        cy.get('[name="submit_search"]')
            .click()

        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Please enter a search keyword')
    })

    it('Total number of search records/results should be displayed on page', () => {
        cy.search('dress')

        cy.get('#center_column > h1 > span.heading-counter')
            .should('be.visible')
            .and('contain', '7 results have been found.')
    })

    it('Enter invalid search term, it should load the result page with an error message.',()=>{
        cy.search('car')

        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'No results were found')
    })
})