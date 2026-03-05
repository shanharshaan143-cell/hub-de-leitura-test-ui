///<reference types="cypress"/>
describe('Funcionalidade: cadstro no hub de leitura  ', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso usando dados validos', () => {
        cy.get('#name').type('Shanhar shaan')
        cy.get('#email').type('test101@test.com')
        cy.get('#phone').type('67991111111')
        cy.get('#password').type('Test@123')
        cy.get('#confirm-password').type('Test@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include','dashboard')
    });
    
});