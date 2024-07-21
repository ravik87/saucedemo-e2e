import LoginPage from "./pages/login_page";
import InventoryPage from "./pages/inventory_page";
import CartPage from "./pages/cart_page";
import CheckoutInfoPage from "./pages/checkout_info_page";
import CheckoutOverviewPage from "./pages/checkout_overview_page";
import CheckoutCompletePage from "./pages/checkout_complete_page";

// Swag Labs UI Page Factory
class SwagLabs {

    static loginPage() {
        return new LoginPage();
    }

    static inventoryPage() {
        return new InventoryPage();
    }

    static cartPage() {
        return new CartPage();
    }

    static checkoutInfoPage() {
        return new CheckoutInfoPage();
    }

    static checkoutOverviewPage() {
        return new CheckoutOverviewPage();
    }

    static checkoutCompletePage() {
        return new CheckoutCompletePage();
    }
}

export default SwagLabs