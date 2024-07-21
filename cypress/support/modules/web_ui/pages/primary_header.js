
class PrimaryHeader {
    #app_logo = '.app_logo'
    #title = '.title'
    #burger_menu_btn = '#react-burger-menu-btn'
    #logout_sidebar_link = '[data-test="logout-sidebar-link"]'
    #shopping_cart_link = '[data-test*="shopping-cart-link"]'

    constructor() {
        if (PrimaryHeader._instance) {
            return PrimaryHeader._instance
        }
        PrimaryHeader._instance = this;
    }

    getAppLogo() {
        return this.#app_logo;
    }

    getTitle() {
        return this.#title;
    }

    logout() {
        cy.get(this.#burger_menu_btn).click()
        cy.get(this.#logout_sidebar_link).click()
    }

    goToCart() {
        cy.get(this.#shopping_cart_link).click();
        return this;
    }
}

export default PrimaryHeader