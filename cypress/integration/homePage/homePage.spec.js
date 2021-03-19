describe("Testing the home page for automationpractice as anonymous user ", () => {
    before(() => {
        cy.visit("/")
    });

    it('check for image in the header', () => {
        cy.get('div.banner img')
        .should('have.attr', 'src' ,'http://automationpractice.com/modules/blockbanner/img/sale70.png');
    });

    it("Check the contact us", () => {
        cy.get('span.shop-phone')
        .within(() => {
            cy.get('strong')
            .contains('0123-456-789');
        })
    });

    it("Find the content 'Contact us'", () => {
        cy.get('div#contact-link > a')
        .contains('Contact us')
        .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=contact')
        .and('have.attr' ,'title', 'Contact Us');
    });

    it("Find the content 'Sign in'", () => {
        cy.get('div.header_user_info > a')
        .contains('Sign in')
        .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=my-account')
        .and('have.attr' ,'title', 'Log in to your customer account');
    });

    it("Test the logo", () => {
        cy.get('div#header_logo > a').as('logo')
        .should('have.attr', 'href', 'http://automationpractice.com/')
        .and('have.attr', 'title', 'My Store')
    });

    it("Should have 4 social media icons", () => {
        cy.get('section#social_block ul>li')
        .should('have.length', '4');
    })
});