describe('Testando', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').wait(3000).screenshot('deucerto', { overwrite: true, capture: 'viewport',capture: 'runner' });

    });
    it('Teste1', () => {
        cy.get('.orangehrm-login-branding').should('be.visible').then(() => {
            cy.wait(2000);
            cy.screenshot('Teste1', { overwrite: true, capture: 'viewport', capture: 'runner' });
        });
        
    });
    it('Teste2', () => {
        cy.get('.orangehrm-login-branding').should('be.visible').then(() => {
            cy.wait(2000);
            cy.screenshot('Teste2', { overwrite: true, capture: 'viewport', capture: 'runner' });
        });
        
    });
    it('Teste3', () => {
        cy.get('.orangehrm-login-branding').should('be.visible').then(() => {
            cy.wait(2000);
            cy.screenshot('Teste3', { overwrite: true, capture: 'viewport',capture: 'runner' });
        });
        
    });
});