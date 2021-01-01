describe("Learning Cypress: ", function() {
    it("DuckduckGo Search", function(){
        cy.visit("https://www.duckduckgo.com/");
        cy.get("[name='q']").should("be.visible");
        cy.get("[name='q']").type('krishna');
        cy.get('#search_button_homepage').click();
        cy.get('a.result__a:visible').should('have.length.lessThan', '15');
        cy.get('a.result__a:visible').not('have.length.lessThan', '18');
        cy.reload()
        cy.debug()
    });
});