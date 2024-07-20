const URL = "https://www.saucedemo.com"
const USERNAME = '#user-name'
const PASSWORD = '#password'
const LOGIN_BUTTON = '#login-button'

class LoginPage{

    static visit() {
        cy.clearCookies()
        cy.clearAllSessionStorage({log: true})
        cy.visit(URL)
    }

    static enterCredentials(username, password) {
        cy.get(USERNAME).type(username)
        cy.get(PASSWORD).type(password)
    }

    static login() {
        cy.get(LOGIN_BUTTON).click()
    }

}

export default LoginPage