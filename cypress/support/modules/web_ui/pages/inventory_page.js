import PrimaryHeader from "./primary_header";

const URL = "https://www.saucedemo.com/inventory.html"

class InventoryPage extends PrimaryHeader {

    constructor() {
        super();
        if (InventoryPage._instance) {
            return InventoryPage._instance
        }
        InventoryPage._instance = this;
    }

    visit() {
        cy.visit(URL)
    }

    addProductsToCart(products) {
        cy.get('[data-test*="inventory-list"]')
            .get('[data-test*="inventory-item-description"]')
            .each(($row) => {
                if (products.includes($row.find('.inventory_item_name').text())) {
                    cy.wrap($row)
                        .find('button')
                        .contains('Add to cart')
                        .click()
                }
            })
        return this;
    }
}

export default InventoryPage