describe("Learning Cypress: ", function() {

    before(() => {
        cy.log('I Am Before');
    });

    after(() => {
        cy.log('I Am After');
    });

    beforeEach(() => {
        cy.log('I Am Before Each');
    });

    afterEach(() => {
        cy.log('I Am After Each');
    });

    it("Google Search", function(){
        cy.log('Google Search TC');
    });

    it("Yahoo Search", function(){
        cy.log('Yahoo Search TC');
    });
});