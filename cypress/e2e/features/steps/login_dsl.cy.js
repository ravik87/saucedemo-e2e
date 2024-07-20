/// <reference types="cypress" />
import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import SwagLabs from "../../../support/modules/web_ui/swag_labs.cy";

Before(() => {
    SwagLabs.loginPage().visit()
})

Given("I login to Swag Labs", (datatable) => {
    datatable.hashes().forEach((element) => {
        SwagLabs.loginPage().enterCredentials(element.username, 'secret_sauce')
        SwagLabs.loginPage().login()
    });
});

Then("I should see homepage", (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.get('.app_logo').should('have.text', element.title)
    });
});

Given("I logout from Swag Labs", () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
});