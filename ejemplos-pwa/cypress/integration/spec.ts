describe('Portal de ofertas', () => {
  it('si guardamos una nueva oferta debería de aparecer en la página de inicio', () => {
    cy.visit('/')

    cy.fixture('datos-oferta.json')
      .then(datosOferta => {

        cy.contains('a', 'Nueva oferta')
          .click()

        // cy.get('No-existe')
        //   .click()

        cy.get('#titulo')
          .clear()
          .type(datosOferta.titulo)

        cy.get('#salario')
          .clear()
          .type(datosOferta.salario)

        cy.get('select')
          .select('Valencia')

        cy.get('form')
          .screenshot('formulario-oferta', {
            blackout: ['[data-cy="input-salario"]']
          })


        cy.get('[data-cy="formulario"]')
          .submit()

        cy.get('[data-cy="titulo-oferta"]')
          .last()
          .should('contain.text', datosOferta.titulo)
      })

  })
})
