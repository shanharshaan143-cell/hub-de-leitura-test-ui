///<reference types="cypress"/>
import catalog from "../fixtures/livros.json"

describe('Funcionalidade: Busca no catalog', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });

it('Deve fazer a busca do livro 1984 com sucesso', () => {
    cy.get('#search-input').type('1984')
    cy.get('.card > .card-body').should('contain', '1984')
    
});

it('Deve fazer a busca de um livro do arquivode massa de dados', () => {
    cy.get('#search-input').type(catalog[2].livro)
    cy.get('.card-title').should('contain', catalog[2].livro)
    
});
    
});