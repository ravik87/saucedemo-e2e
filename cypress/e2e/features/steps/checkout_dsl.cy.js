/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import Utility from "../../../support/general/utils/utility";
import SwagLabs from "../../../support/modules/web_ui/swag_labs";


Given("I add random {string} items to my cart", (items_count, datatable) => {
    let items = Utility.getRandomSubsetOfList(datatable.rows(), items_count)
    SwagLabs.inventoryPage()
        .addProductsToCart(items)
        .goToCart();
});

When("I checkout items with my details", (datatable) => {
});

Then("I place the order with checkout items", () => {
});