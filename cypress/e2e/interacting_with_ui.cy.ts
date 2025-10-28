describe('Album Catalog - Interactions', () => {
    it('looks for songs when searching via search bar', () => {
        // arrange
        cy.visit('/');
        // act
        cy.get('[data-cy="search-input"]').type('a');
        cy.get('[data-cy="search-button"]').click();
        cy.get('[data-cy="song-result"]')
            // assert
            .should('have.length.at.least', 1);
    });

    it('navigates to the first album detail', () => {
        // arrange
        cy.visit('/');
        // act
        cy.get('[data-cy="album-card"]').first().within(() => {
            cy.get('[data-cy="album-detail-button"]').click();
        });
        cy.url()
            // assert
            .should('eq', 'http://localhost:3000/album/1');
    });

    it('navigates to home page after clicking on Spotify logo', () => {
        // arrange
        cy.visit('/');
        // act
        cy.get('[data-cy="spotify-logo"]').click();
        cy.url()
            // assert
            .should('eq', 'http://localhost:3000/');
    });

    it('can type into the search input', () => {
        // arrange
        cy.visit('/');
        // act
        cy.get('[data-cy="search-input"]').type('Test Album')
            // assert
            .should('have.value', 'Test Album');
    });

    it('clicking on author navigates to author detail page', () => {
        // arrange
        cy.visit('/');
        // act
        cy.get('[data-cy="album-card"]').first().within(() => {
            cy.get('[data-cy="album-author"]').click();
        });
        cy.url()
            // assert
            .should('eq', 'http://localhost:3000/author/1');
    });

    it('clicking on author, then clicking on album navigates to album detail page', () => {
        // arrange
        cy.visit('/');
        // act
        cy.get('[data-cy="album-card"]').first().within(() => {
            cy.get('[data-cy="album-author"]').click();
        });
        cy.get('[data-cy="album"]').first().click();
        cy.url()
            // assert
            .should('eq', 'http://localhost:3000/album/1');
    });

});
