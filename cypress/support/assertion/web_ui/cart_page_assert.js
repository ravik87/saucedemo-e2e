import SwagLabs from "../../modules/web_ui/swag_labs";

class CartPageAssert {

    hasProducts(expected_items) {
        const actual_items = []
        cy.get('[data-test*="cart-list"]')
            .get('.cart_item')
            .find('.inventory_item_name')
            .each(($row) => {
                actual_items.push($row.text())
            })
            .then(() => {
                cy.log("Expected items: " + expected_items)
                cy.log("Actual items: " + actual_items)
                expect(actual_items).to.deep.equal(expected_items)
            })
        return this;
    }
}

export default CartPageAssert