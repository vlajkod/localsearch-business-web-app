context('Localsearch basic flow', () => {
    // since we are using hard coded references on BE,
    // it perfactly fine to use it here as well
    const place = {
        name: 'Casa Ferlin',
        reference: 'GXvPAor1ifNfpF0U5PTG0w'
    };

    before(() => {
        cy.visit('/');
    });

    it('checks if search input is visible and works', () => {
        findPlace(place);
        cy.get('[data-test-id="searchClear"]').click();
        cy.get('[data-test-id="searchInput"]').should('be.empty');
    });

    it('search for place and see detail page', () => {
        findPlace(place);
        cy.get(`[data-test-id="${place.reference}"]`).click();
        cy.url().should('include', `place/${place.reference}`);
        cy.get('[data-test-id="placeDetail"]').should('be.visible');
        cy.get('[data-test-id="placeBackButton"]').should('be.visible');
        cy.get('[data-test-id="placeBackButton"]').click();
        cy.get('[data-test-id="searchInput"]').should('be.visible');
    });

    function findPlace({ name, reference }) {
        cy.get('[data-test-id="searchInput"]').should('be.visible');
        cy.get('[data-test-id="searchInput"]').type(name);
        cy.get('[data-test-id="searchClear"]').should('be.visible');
        cy.get(`[data-test-id="${reference}"]`).should('be.visible');
    }
});
