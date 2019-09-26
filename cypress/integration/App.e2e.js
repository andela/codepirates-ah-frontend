describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('/');
    cy.get('h3')
      .should('have.text', 'Welcome to Authors Haven');
  });
});
