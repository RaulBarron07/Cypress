describe('Formulario de Acceso', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('Debe mostrar acceso concedido para usuarios mayores de 18 años', () => {
        cy.get('#email-input').type('correo@example.com');
        cy.get('#name-input').type('Juan');
        cy.get('#surname-input').type('Pérez');
        cy.get('#age-input').type('20');
        cy.get('#submit-btn').click();

        cy.get('#greeting').should('contain', 'Acceso concedido, Juan Pérez');
    });

    it('Debe mostrar acceso denegado para usuarios menores de 18 años', () => {
        cy.get('#email-input').type('correo@example.com');
        cy.get('#name-input').type('Juan');
        cy.get('#surname-input').type('Pérez');
        cy.get('#age-input').type('17');
        cy.get('#submit-btn').click();

        cy.get('#greeting').should('contain', 'Acceso denegado. Debes ser mayor de 18 años.');
    });
    
    
});
