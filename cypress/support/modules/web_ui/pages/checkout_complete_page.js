const URL = "/checkout-complete.html"

class CheckoutCompletePage {
    #complete_header = '[data-test*="complete-header"]'
    #complete_text = '[data-test*="complete-text"]'

    constructor() {
        if (CheckoutCompletePage._instance) {
            return CheckoutCompletePage._instance
        }
        CheckoutCompletePage._instance = this;
    }

    visit() {
        cy.visit(URL)
    }

    completeHeader() {
        return this.#complete_header;
    }

    completeText() {
        return this.#complete_text;
    }
}

export default CheckoutCompletePage