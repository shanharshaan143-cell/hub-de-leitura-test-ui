///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no hub de leitura', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });
    
    it('Deve fazer cadastro com sucesso usando função Js',()=>{
        let email=`teste${Date.now()}@teste.com`
        cy.get('#name').type('Shanhar Saleem')
        cy.get('#email').type(email)
        cy.get('#phone').type('67991111111')
        cy.get('#password').type('Test@123')
        cy.get('#confirm-password').type('Test@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include','dashboard')
        
        })

     it('Deve fazer cadastro com sucesso usando Faker',()=>{
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('67991111111')
        cy.get('#password').type('Test@123')
        cy.get('#confirm-password').type('Test@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include','dashboard')
        cy.get('#user-name').should('contain', nome)
        
        })

});