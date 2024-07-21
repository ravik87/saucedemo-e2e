const URL = "https://www.saucedemo.com/cart.html"

class CartPage {
    #cart_footer = '.cart_footer'
    #checkout_button = '[data-test*="checkout"]'

    constructor() {
        if (CartPage._instance) {
            return CartPage._instance
        }
        CartPage._instance = this;
    }

    visit() {
        cy.visit(URL)
    }

    checkout() {
        cy.get(this.#cart_footer)
            .find(this.#checkout_button)
            .click();
        return this;
    }
}

export default CartPage