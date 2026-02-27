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

it('Deve fazer uma busca- Usando Fixture', () => {
    cy.fixture('livros').then((cat)=>{
        cy.get('#search-input').type(cat[0].livro)
        cy.get('.card-title').should('contain', cat[0].livro)
    })
    
});

it.only('Deve validar todos os livros da lista', () => {
    cy.fixture('livros').then((cat)=>{
        cat.forEach(item=>{
            cy.get('#search-input').clear().type(item.livro)
            cy.get('.card-title').should('contain', item.livro)
        })
    })
    
});
    
});