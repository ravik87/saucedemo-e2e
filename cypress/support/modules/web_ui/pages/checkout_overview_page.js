const URL = "https://www.saucedemo.com/checkout-step-two.html"

class CheckoutOverviewPage {
    #cart_footer = '.cart_footer'
    #finish = '[data-test*="finish"]'

    constructor() {
        if (CheckoutOverviewPage._instance) {
            return CheckoutOverviewPage._instance
        }
        CheckoutOverviewPage._instance = this;
    }

    visit() {
        cy.visit(URL)
    }

    finish() {
        cy.get(this.#cart_footer)
            .find(this.#finish)
            .click();
        return this;
    }
}

export default CheckoutOverviewPage