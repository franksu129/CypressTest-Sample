describe('empty spec', () => {
  it('passes', () => {
    // 訪問網站
    cy.visit('https://google.com');
    // 下面用法就很像 JQuery 就不在解釋了
    cy.get('.gLFyf').type("Cypress Test")
    cy.get('.CqAVzb > center > .gNO89b').click()
    cy.url().should('include', '/search')
  })
})