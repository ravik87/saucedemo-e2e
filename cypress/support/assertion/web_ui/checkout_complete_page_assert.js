import SwagLabs from "../../modules/web_ui/swag_labs";
import UIContent from "../../general/enums/ui_contents";

class CheckoutCompletePageAssert {

    checkOrderConfirmation() {
        cy.get(SwagLabs.checkoutCompletePage().completeHeader())
            .should('have.text', UIContent.CHECKOUT_COMPLETE_MSG);
        cy.get(SwagLabs.checkoutCompletePage().completeText())
            .should('have.text', UIContent.CHECKOUT_COMPLETE_INFO);
        return this;
    }

}

export default CheckoutCompletePageAssert