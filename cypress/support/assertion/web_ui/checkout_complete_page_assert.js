import SwagLabs from "../../modules/web_ui/swag_labs";

class CheckoutCompletePageAssert {

    checkOrderConfirmation() {
        cy.get(SwagLabs.checkoutCompletePage().completeHeader())
            .should('have.text', 'Thank you for your order!');
        cy.get(SwagLabs.checkoutCompletePage().completeText())
            .should('have.text', 'Your order has been dispatched, ' +
                'and will arrive just as fast as the pony can get there!');
        return this;
    }

}

export default CheckoutCompletePageAssert