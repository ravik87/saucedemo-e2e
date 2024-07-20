const URL = "https://www.saucedemo.com"

class LoginPage{
    #username = '#user-name'
    #password = '#password'
    #login_button = '#login-button'

    constructor() {
        if (LoginPage._instance) {
            return LoginPage._instance
        }
        LoginPage._instance = this;
    }

    visit() {
        cy.clearCookies()
        cy.clearAllSessionStorage({log: true})
        cy.visit(URL)
    }

    enterCredentials(username, password) {
        cy.get(this.#username).type(username)
        cy.get(this.#password).type(password)
    }

    login() {
        cy.get(this.#login_button).click()
    }

}

export default LoginPage