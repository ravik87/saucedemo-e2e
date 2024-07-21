import InventoryPageAssert from "./inventory_page_assert";
import CartPageAssert from "./cart_page_assert";
import CheckoutCompletePageAssert from "./checkout_complete_page_assert";

// Swag Labs UI Page Assert Factory
class SwagLabsUIAssert {

    static inventoryPage() {
        return new InventoryPageAssert();
    }

    static cartPageAssert() {
        return new CartPageAssert();
    }

    static checkoutCompletePageAssert() {
        return new CheckoutCompletePageAssert();
    }
}

export default SwagLabsUIAssert