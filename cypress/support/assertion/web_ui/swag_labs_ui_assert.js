import InventoryPageAssert from "./inventory_page_assert";

// Swag Labs UI Page Assert Factory
class SwagLabsUIAssert {

    static inventoryPage() {
        return new InventoryPageAssert();
    }
}

export default SwagLabsUIAssert