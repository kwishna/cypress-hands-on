import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.log("Before")
  cy.fixture('example').then((data) =>
    global.val = data
  )
})

After(() => {
  cy.log("After")
})

beforeEach(function () {
  cy.log("Before Each TC")
})

afterEach(() => {
  cy.log("After Each TC")
})

Given(/I navigate to (.*)/i, (url) => {
  cy.visit(url);
});

When(/I enter some value in search box/i, () => {
  cy.get("[name='q']").should("be.visible");
  cy.get("[name='q']").type(global.val.name);
});

When(/I enter some value using datatable/, (dataTable) => {
  cy.get("[name='q']").type(String(dataTable.rawTable[1]));
})

Then("I hit search button", () => {
  cy.get('#search_button_homepage').click();
});

Then("I verify search result count", () => {
  cy.get('a.result__a:visible').should('have.length.lessThan', 20);
  cy.get('a.result__a:visible').not('have.length.lessThan', 10);
});