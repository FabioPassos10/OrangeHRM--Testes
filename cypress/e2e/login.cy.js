describe('001 - Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('CT001.001 - Login com sucesso (usuário e senha corretos)', () => {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
    
        // Aguarda até que a URL mude para a página de dashboard
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    
        // Espera até que algum elemento na página de dashboard seja visível antes de tirar a captura de tela
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').then(() => {
            cy.wait(3000);
            cy.screenshot('Login com sucesso', { overwrite: true, capture: 'viewport' });
        });
    });
    

    it('CT0012.001 - Login com credenciais inválidas.', () => {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('A');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('a');
        cy.get('.oxd-button').click();
        cy.get('.oxd-alert').should('contain.text', 'Invalid credentials');


        cy.screenshot('Login inválido', {overwrite: true})
    });
});
