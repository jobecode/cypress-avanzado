export default class Navbar{

	static clickOnLogo(){
		cy.get('.brand').click()
	}

	static clickSignIn() {
		cy.get('#signin_button').click()
	}

}