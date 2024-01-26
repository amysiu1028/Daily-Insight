
describe('Network Errors', () => {
  it('should show server error', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
      status: 500,
    }).as('ServerError')
    cy.visit('http://localhost:3000/')
    cy.wait('@ServerError')
    cy.get("[data-test='error-message']").contains('Server is down, please try again later.')
  })

  it('should show page not found for 404 error', () => {
    cy.intercept('GET','https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
      status: 200,
    }).as('Homepage')
    cy.visit('http://localhost:3000/')
    cy.wait('@Homepage')

    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?q=business&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
      statusCode: 404,
    }).as('NotFound');
    cy.visit('http://localhost:3000/source/business/i')    
    // cy.wait('@NotFound')
    cy.get("[data-test='not-found']").contains('p', "404 Page Not Found: The page you are looking for doesn't exist.");
  })
})