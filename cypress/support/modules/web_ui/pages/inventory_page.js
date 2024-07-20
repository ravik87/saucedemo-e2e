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
}

export default InventoryPage