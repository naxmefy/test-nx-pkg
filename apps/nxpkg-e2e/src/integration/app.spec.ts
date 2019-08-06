import { getGreeting } from '../support/app.po';

describe('nxpkg', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nxpkg!');
  });
});
