///<reference types="cypress"/>

describe('Funcionalidade login', () => {
    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include','dashboard')
    });

    it('Deve fazer login com sucesso-usando comando customizado', () => {
        cy.login()
        
    });

    it.only('Deve fazer login com sucesso com conta admin-usando comando cutomizado', () => {
        cy.login('admin@biblioteca.com','admin123')
        
    });
    
});