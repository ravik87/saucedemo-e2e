/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import Utility from "../../../support/general/utils/utility";
import SwagLabs from "../../../support/modules/web_ui/swag_labs";
import SwagLabsUIAssert from "../../../support/assertion/web_ui/swag_labs_ui_assert";
import CartPage from "../../../support/modules/web_ui/pages/cart_page";


Given("I add random {string} items to my cart", (items_count, datatable) => {
    let items = Utility.getRandomSubsetOfList(datatable.rows(), items_count)
    SwagLabs.inventoryPage()
        .addProductsToCart(items)
        .goToCart();

    SwagLabsUIAssert.cartPageAssert()
        .hasProducts(items);
});

When("I checkout items with my details", (datatable) => {
    SwagLabs.cartPage()
        .checkout();

    SwagLabs.checkoutInfoPage()
        .withInfo(datatable.hashes()[0])
        .continue();
});

Then("I place the order with checkout items", () => {
    SwagLabs.checkoutOverviewPage()
        .finish();

    SwagLabsUIAssert.checkoutCompletePageAssert()
        .checkOrderConfirmation();
});