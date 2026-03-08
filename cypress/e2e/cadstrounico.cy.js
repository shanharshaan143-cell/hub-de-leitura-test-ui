///<reference types="cypress"/>
describe('Funcionalidade: cadstro no hub de leitura  ', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso usando dados validos', () => {
        let email=`teste${Date.now()}@teste.com`
        cy.get('#name').type('Shanhar shaan')
        cy.get('#email').type(email)
        cy.get('#phone').type('67991111111')
        cy.get('#password').type('Test@123')
        cy.get('#confirm-password').type('Test@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include','dashboard')
    });
    
});