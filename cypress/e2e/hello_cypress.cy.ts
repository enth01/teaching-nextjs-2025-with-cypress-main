describe('Album Catalog - Basic Checks', () => {
  // it('opens the homepage', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   const title = cy.get('[data-cy="title"]');
  //   // assert
  //   title.should('be.visible');
  //   title.should('contain.text', 'Spotify');
  // });

  // it('displays the site title in the header', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   const header = cy.get('header');
  //   // assert
  //   header.should('be.visible');
  //   header.should('contain.text', 'Spotify');
  // });

  // it('shows at least one album card', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   const albumCards = cy.get('[data-cy="album-card"]');
  //   // assert
  //   albumCards.should('be.visible');
  // });

  // it('album card has a title and price', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   const title = cy.get('[data-cy="album-card"]').first().within(() => { return cy.get('[data-cy="album-title"]') });
  //   const price = cy.get('[data-cy="album-card"]').first().within(() => { cy.get('[data-cy="album-price"]') });
  //   // assert
  //   title.should('be.visible').and('not.be.empty');
  //   price.should('be.visible').and('not.be.empty');
  // });

  // it('has a visible search input on the top', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   cy.get('[data-cy="search-input"]')
  //     // assert
  //     .should('be.visible');
  // });

  // it('album card has an author name', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   cy.get('[data-cy="album-author"]')
  //     // assert
  //     .should('be.visible').and('not.be.empty');
  // });

  // it('album card has a release date', () => {
  //   // arrange
  //   cy.visit('/');
  //   // act
  //   cy.get('[data-cy="album-release-date"]')
  //     // assert
  //     .should('be.visible').and('not.be.empty');
  // });

  // it('album card has a detail button', () => {
  //   // arrenge
  //   cy.visit('/');
  //   // act
  //   cy.get('[data-cy="album-detail-button"]')
  //     // assert
  //     .should('be.visible');
  // });

  // it('page not found', () => {
  //   // arrange
  //   cy.visit('/album/99999999999999999999999999999999999');
  //   // act
  //   cy.get('[data-cy=album-not-found]')
  //     // assert
  //     .should('be.visible');
  // })

  it('zochova test', () => {
    cy.visit('https://zochova.sk/');
    cy.get('[id=hamburger]').click();
    cy.get('a[href*="https://zochova.sk/kontakt"]').click();
    cy.get('body').contains('beniak@zochova.sk');
    cy
  })

  it('zochova test', () => {
    cy.visit('https://zochova.sk/');
    cy.get('[id=hamburger]').click();
    cy.get('a').contains("Naša škola").click();
    cy.get('a[href*="skolsky-psycholog"]').first().click();
    cy.get('span').contains('nemcova@zochova.sk').should('be.visible')
  })


});
