import SwagLabs from "../../modules/web_ui/swag_labs";

class CartPageAssert {

    hasProducts(expected_items) {
        const actual_items = []
        cy.get(SwagLabs.cartPage().cartList())
            .get(SwagLabs.cartPage().cartItem())
            .find(SwagLabs.cartPage().inventoryItemName())
            .each(($row) => {
                actual_items.push($row.text())
            })
            .then(() => {
                cy.log("Expected items: " + expected_items)
                cy.log("Actual items: " + actual_items)
                expect(actual_items.sort()).to.deep.equals(expected_items.sort())
            })
        return this;
    }
}

export default CartPageAssert