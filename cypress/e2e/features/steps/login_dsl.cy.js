/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("I login to Swag Labs UI", (datatable) => {
    cy.visit("https://www.saucedemo.com/")
    datatable.hashes().forEach((element) => {
        cy.get('#user-name').type(element.username)
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
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