/// <reference types="cypress" />
import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import SwagLabs from "../../../support/modules/web_ui/swag_labs";
import SwagLabsUIAssert from "../../../support/assertion/web_ui/swag_labs_ui_assert";

Before(() => {
    SwagLabs.loginPage()
        .visit();
})

Given("I login to Swag Labs", (datatable) => {
    const credentials = datatable.rowsHash();
    SwagLabs.loginPage()
        .withCredentials(credentials["username"], Cypress.env('PASSWORD'))
        .login();
});

And("I see products inventory page", (datatable) => {
    const page_info = datatable.rowsHash();
    SwagLabsUIAssert.inventoryPage()
        .hasLogo(page_info["logo_name"])
        .hasTitle(page_info["title"]);
});

Given("I logout from Swag Labs", () => {
    SwagLabs.inventoryPage()
        .logout();
});