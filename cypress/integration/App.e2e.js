describe('App E2E', () => {
    it('should assert that true is equal to true', () => {
      expect(true).to.equal(true);
    });
  });
describe('App E2E', () => {
    it('should have a header', () => {
      cy.visit('/');
      cy.get('h3')
        .should('have.text', 'Welcome to Authors Haven');
    });
  });