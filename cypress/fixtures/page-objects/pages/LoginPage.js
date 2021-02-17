import BasePage from "../BasePage"

export default class LoginPage extends BasePage {

	static submitLogin(username, password) {
		cy.login(username,password)
	}

	static clickForgotPasswordLink() {
		cy.contains("Forgot your password?").click()
	}




}