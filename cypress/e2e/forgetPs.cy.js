describe('002 - Esqueci a senha', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    });

    it('CT001.002 - Tentativa de recuperação de senha', () => {
        cy.get('.oxd-input').type('Admin');
        cy.get('.oxd-button--secondary').click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset');
        cy.get('.orangehrm-card-container').should('be.visible').then(() => {
            cy.wait(3000);
            cy.screenshot('Recuperar senha sucesso', { overwrite: true, capture: 'viewport' });
        });
    });
    it('CT002.002 - Cancelar a recuperação de senha', () => {
        cy.get('.oxd-input').type('Admin');
        cy.get('.oxd-button--ghost').click();
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').then(() => {
            cy.wait(3000);
            cy.screenshot('Cancelar Recuperação de senha', { overwrite: true, capture: 'viewport' });
        });;
    });
    
});