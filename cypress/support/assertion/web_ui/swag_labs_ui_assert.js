import InventoryPageAssert from "./inventory_page_assert";
import AbstractUIAssert from "../abstract_ui_assert";

// Swag Labs UI Page Assert Factory
class SwagLabsUIAssert extends AbstractUIAssert{

    static inventoryPage() {
        return new InventoryPageAssert();
    }
}

export default SwagLabsUIAssert