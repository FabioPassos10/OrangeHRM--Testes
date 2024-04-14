describe('Testando', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
    it('Teste', () => {
        cy.get('.oxd-text--h5').then((element) => {
            // Use .text() para obter o texto do elemento
            const nome = element.text();
            // Exibir o texto no console
            console.log(nome);
        });
    });
});