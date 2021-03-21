// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**
 * Custom command in cypress to login into site
 * @param email <string> pw <string>
 */
Cypress.Commands.add('login', (email, pw) => {
    cy.get('#email')
        .type(email)

    cy.get('input[name=passwd]')
        .type(pw)

    cy.get('#SubmitLogin')
    .click();
})

Cypress.Commands.add('verifyUrl', (item, destination)=>{
    const position = `#block_various_links_footer > ul > li:nth-child(${item}) > a`
    cy.get(position)
      // an <a> also has an 'href' property which always resolves
      // to the fully qualified URL. by asserting on this property
      // we are testing this element more thoroughly
      .should('have.prop', 'href')
      .and('equal', destination)
})