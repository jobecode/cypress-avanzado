import {url} from "../../../config"
import Navbar from "../../fixtures/page-objects/components/Navbar"
import LoginPage from "../../fixtures/page-objects/pages/LoginPage"



describe('Login Fail', () => {
	
	before(function() {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('Probar con credenciales invalidas'), ()=> {
		LoginPage.submitLogin('invalid username', 'invalid password')
	}




})