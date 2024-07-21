const URL = "/cart.html"

class CartPage {
    #cart_footer = '.cart_footer'
    #checkout_button = '[data-test*="checkout"]'
    #cart_list = '[data-test*="cart-list"]'
    #cart_item = '.cart_item'
    #inventory_item_name = '.inventory_item_name'

    constructor() {
        if (CartPage._instance) {
            return CartPage._instance
        }
        CartPage._instance = this;
    }

    visit() {
        cy.visit(URL)
    }

    cartList() {
        return this.#cart_list;
    }

    cartItem() {
        return this.#cart_item;
    }

    inventoryItemName() {
        return this.#inventory_item_name;
    }

    checkout() {
        cy.get(this.#cart_footer)
            .find(this.#checkout_button)
            .click();
        return this;
    }
}

export default CartPage