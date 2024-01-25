describe('Display homepage', () => {
  beforeEach(() => {
    cy.intercept('GET','https://newsapi.org/v2/top-headlines?country=us&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
      statusCode: 200,
      fixture: 'generalstories'
    }).as('Homepage')
    cy.visit('http://localhost:3000/')
    cy.wait('@Homepage', { timeout: 10000 })
  })
  
  it('should show header and stories on page load', () => {
    cy.get("[data-test='logo']").should('be.visible')
  })
})