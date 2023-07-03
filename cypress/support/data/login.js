describe('Login Account', () => {
    it('Login with invalid data', () => {
        //Open kasirdemo login page
        cy.visit('https://kasirdemo.belajarqa.com')
        //Input username
        cy.get('#email').type('deastyje@gmail.com')
        //Input password
        cy.get('input#password').type('12345')
        //Click Login
        cy.get('button[type="submit"]').click()
        //Gagal login
        cy.get('div[role="alert"].chakra-alert').should('be.visible').contains('Kredensial yang Anda berikan salah');
    })

    it('Login with valid data', () => {
        //Open kasirdemo login page
        cy.visit('https://kasirdemo.belajarqa.com')
        //Input username
        cy.get('#email').type('deastyje@gmail.com')
        //Input password
        cy.get('#password').type('Deasty00!')
        //Click Login
        cy.get('[type = "submit"]').click()
        //Sukses login
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })
})