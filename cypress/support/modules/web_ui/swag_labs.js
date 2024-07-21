import LoginPage from "./pages/login_page";
import InventoryPage from "./pages/inventory_page";
import CartPage from "./pages/cart_page";

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
}

export default SwagLabs