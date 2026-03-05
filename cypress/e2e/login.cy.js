///<reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade login', () => {
    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com dados validos', () => {
        cy.get('#email').type('test143@test.com')
        cy.get('#password').type('Test@123')
        cy.get('#login-btn').click()
        cy.url().should('include','dashboard')
        
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include','dashboard')
    });

    it('Deve fazer login com sucesso-usando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')
        
    });

    it('Deve fazer login com sucesso com conta admin-usando comando cutomizado', () => {
        cy.login('admin@biblioteca.com','admin123')
        
    });

    it('Deve fazer login com sucesso- Usando importação da massa de dados ', () => {
         cy.login(user.email,user.senha)
        
    });
    
});