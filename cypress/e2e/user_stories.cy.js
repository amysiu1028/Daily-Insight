
//network errros
//favicon

//Best practice: to have a separate component for your main content, such as a HomePage component, and use the App component for overall layout and routing. This approach follows the principle of component-based architecture and helps in organizing your code in a modular and maintainable way.

//implement local storage
describe('Display homepage', () => {
  beforeEach(() => {
    cy.intercept('GET','https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
      statusCode: 200,
      fixture: 'generalstories'
    }).as('Homepage')
    cy.visit('http://localhost:3000/')
    cy.wait('@Homepage', { timeout: 10000 })
  })
  
  it('should show header on page load', () => {
    cy.get("[data-test='logo']").should('be.visible')
    cy.get("[data-test='search-input']").should('have.attr', 'placeholder', 'Search within category...')
    cy.get("[data-test='search-img']").should('have.attr','src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg==')
  })

  it('should show general stories on page load', () => {
    cy.get("[data-test='all-articles']").children().should('have.length',3)

    cy.get("[data-test='all-articles']").first().contains('h2','Carlos Alcaraz crashes out of Aussie Open with loss to Zverev - ESPN')
    cy.get("[data-test='all-articles']").first().contains('p','Alexander Zverev made no mistake with his second chance to close out a win over No. 2-ranked Carlos Alcaraz and moved into an Australian Open semifinal against two-time finalist Daniil Medvedev.')
    cy.get("[data-test='article-img']").first().should('have.attr','src','https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0124%2Fr1281644_1296x729_16%2D9.jpg')

    cy.get("[data-test='all-articles']").last().contains('h2','New Hampshire voter exit polls show how Trump won the state')
    cy.get("[data-test='all-articles']").last().contains('p','How Trump won the 2024 New Hampshire Republican primary election, according to CBS News')
    cy.get("[data-test='article-img']").last().should('have.attr','src','https://assets3.cbsnewsstatic.com/hub/i/r/2024/01/24/6e8e35b8-bd36-49af-a7c1-3379aced743e/thumbnail/1200x630g1/ef9ceb1eaf145754b1e1c6e4c8a1de17/gettyimages-1948407129.jpg?v=1acc31b0e955989267fc7dd28b496c5e')
  })

  it('should be able to show an error message letting user know to fill out search input if search field is empty preventing user from searching until they fill out the input fields', () => {
    cy.get("[data-test='search-input']").should('have.value', '')
    cy.get("[data-test='search-button']").click()
    cy.get("[data-test='search-error-message']").should('exist').contains('Please fill out search input.')
  })

  //search input works
  it('should be able fill out search input, click search button, and a show filtered stories based on search input', () => {
    cy.get("[data-test='search-input']").type('Carlos').should('have.value', 'Carlos')
    cy.get("[data-test='search-button']").click()

    cy.get("[data-test='all-articles']").children().should('have.length',1)
    .get("[data-test='all-articles']").contains('h2','Carlos Alcaraz crashes out of Aussie Open with loss to Zverev - ESPN')
    .get("[data-test='all-articles']").contains('p','Alexander Zverev made no mistake with his second chance to close out a win over No. 2-ranked Carlos Alcaraz and moved into an Australian Open semifinal against two-time finalist Daniil Medvedev.')
    .get("[data-test='article-img']").should('have.attr','src','https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0124%2Fr1281644_1296x729_16%2D9.jpg')
  })
})

describe('Display new stories based on user category click', () => {
  beforeEach(() => {
    cy.intercept('GET','https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
      fixture: 'generalstories'
    }).as('Homepage')
    cy.visit('http://localhost:3000/')
    cy.wait('@Homepage')

    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?q=business&apiKey=3709c47b921c4a5b92f4cf84b4035408', {
    statusCode: 200,
    fixture: 'businessStories'
    }).as('Businesspage');
    cy.get("[data-test='business-link']").click();
    cy.visit('http://localhost:3000/source/business')
    cy.wait('@Businesspage', { timeout: 10000 });
  })

  it('should be be able to click a category on left column and show the stories of that category', () => {
    cy.get("[data-test='all-articles']").children().should('have.length',4)
    cy.get("[data-test='all-articles']").first().contains('h2','Raskin demands Trump Org turn over business records in probe of foreign payments')
    cy.get("[data-test='all-articles']").first().contains('p','The top Democrat on the House Oversight Committee is asking the Trump Organization to turn over the entirety of its business records, arguing it’s the only way the panel can understand the full extent to which former President Trump profited from foreign gove…')
    cy.get("[data-test='article-img']").last().should('have.attr','src','https://thehill.com/wp-content/uploads/sites/2/2024/01/raskinjamie_011024gn01_w.jpg?w=1280')

    cy.get("[data-test='all-articles']").last().contains('h2','Live news: Canada on track to miss fiscal targets aimed at keeping deficit in control')
    cy.get("[data-test='all-articles']").last().contains('p','The Financial Post brings you the top business stories as they happen for January 22, 2024. Read on for breaking news you need to know.')
    cy.get("[data-test='article-img']").last().should('have.attr','src','https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/01/freeland-trudeau-vw0122.jpg')
  })
})