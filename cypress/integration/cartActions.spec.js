context('Application test:', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('add 1 to number of items in the cart', () => {
    cy.get('.add-btn')
      .first()
      .click();
    cy.get('.cart-block h2').should('contain', 'My Shopping Cart (Items: 1)');
  });

  it('add Item to the cart', () => {
    cy.get('.add-btn')
      .first()
      .click();
    cy.get('.cart-items').children().should('have.length', 1);
  });


  it('delete item from the cart', () => {
    cy.get('.add-btn')
      .first()
      .click()
      .click();
    cy.get('.cart-header').click();
    cy.get('.delete-btn').first().click();
    cy.get('.cart-items').children().should('have.length', 1);
  });

  it('add price of item to total', () => {
    cy.get('.add-btn')
      .eq(3)
      .click();
    cy.get('.total-price').should('contain', 19);
  });

  it('valid discount applies', () => {
    cy.get('.add-btn')
      .eq(2)
      .click();
    cy.get('.cart-block').click();
    cy.get('#discount').type('DISCOUNT5');
    cy.get('form').submit();
    cy.get('.discount').should('contain', 5);
  });

  it('price to pay with discount is displayed correctly', () => {
    cy.get('.add-btn')
      .first()
      .click();
    cy.get('.cart-block').click();
    cy.get('#discount').type('DISCOUNT5');
    cy.get('form').submit();
    cy.get('.to-pay').should('contain', 94);
  });

  it('error message is displayed if incorrect voucher is applied', () => {
    cy.get('.cart-block').click();
    cy.get('#discount').type('INCORRECT');
    cy.get('form').submit();
    cy.get('form').children().should('have.class', 'error');
  });
});