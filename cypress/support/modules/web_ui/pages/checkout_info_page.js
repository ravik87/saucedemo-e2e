const URL = "/checkout-step-one.html"

class CheckoutInfoPage {
    #first_name = '[data-test*="firstName"]'
    #last_name = '[data-test*="lastName"]'
    #postalCode = '[data-test*="postalCode"]'
    #checkout_buttons = '.checkout_buttons'
    #continue = '[data-test*="continue"]'

    constructor() {
        if (CheckoutInfoPage._instance) {
            return CheckoutInfoPage._instance
        }
        CheckoutInfoPage._instance = this;
    }

    visit() {
        cy.visit(URL)
    }

    withInfo(checkout_info) {
        cy.get(this.#first_name).type(checkout_info['first_name'])
        cy.get(this.#last_name).type(checkout_info['last_name'])
        cy.get(this.#postalCode).type(checkout_info['postal_code'])
        return this;
    }

    continue() {
        cy.get(this.#checkout_buttons)
            .find(this.#continue)
            .click();
        return this;
    }
}

export default CheckoutInfoPage