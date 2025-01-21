/// <reference types="cypress" />

describe('example react app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('should increment count on button click', () => {
    const button = cy.get('button');
    button.click();
    button.should('have.text', 'count is 1');
  });
});