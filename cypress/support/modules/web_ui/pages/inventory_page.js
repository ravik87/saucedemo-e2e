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
        products.forEach((product) => {
            const selector = "add-to-cart-" + product.toString()
                .replaceAll(" ", "-")
                .toLowerCase();

            cy.get('[data-test*="inventory-list"]')
                .find('[data-test*='+ selector + ']')
                .click()
        });
        return this;
    }
}

export default InventoryPage