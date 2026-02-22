///<reference types="cypress"/> 

describe('Funcionalidade catalog de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botão adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve clicar em todos os botoẽs adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true }) 
    });

    it('Deve clicar no primeiro botão adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no ultimo botão adicionar à cesta', () => {
        cy.get('.btn-primary').last().click() 
    });

    it('Deve clicar terceiro botão adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
    });

    it('Deve clicar quinto botão adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain','A Metamorfose" foi adicionado à cesta!')
        
    });




    
});