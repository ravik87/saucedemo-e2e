import SwagLabs from "../../modules/web_ui/swag_labs";
import AbstractUIAssert from "../abstract_ui_assert";

class InventoryPageAssert extends AbstractUIAssert {

    hasLogo(logo_name) {
        cy.get(SwagLabs.inventoryPage().getAppLogo())
            .should('have.text', logo_name);
        return this;
    }

    hasTitle(title) {
        cy.get(SwagLabs.inventoryPage().getTitle())
            .should('have.text', title);
        return this;
    }
}

export default InventoryPageAssert