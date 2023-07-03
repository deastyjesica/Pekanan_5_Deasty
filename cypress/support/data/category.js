describe('Category Test', ()=>{
    beforeEach(()=>{
        //Open kasirdemo
        cy.visit('https://kasirdemo.belajarqa.com')
        //Input Email
        cy.get('#email').type('deastyje@gmail.com')
        //Input Password
        cy.get('#password').type('Deasty00!')
        //Click login button
        cy.get('.chakra-button').click()
    })
    it('Open the Dashboard Category page', () => {
        //Click 'Category' on the left sidebar
        //cy.get('a[href="/categories"]').click()
        cy.get('a[href="/categories"]').eq(0).click()
        //Sukses Ke Dashboard Category Page
        cy.url().should('include', '/categories')
        cy.get('.css-1piskbq').click()
    })
    it('Edit category', () => {
        //Click 'Category' on the left sidebar
        //cy.get('[href="/products"]').click()
        cy.get('a[href="/categories"]').eq(0).click()
        //Click titik tiga menu button
        cy.get('[id^=menu-button-]').eq(1).click()
        //Click Ubah
        cy.get('a').contains('ubah').click()
        //Click nama, lalu ganti dengan 'Film'
        cy.get('#nama').clear().type('Film')
        //Click Save button
        cy.get('.chakra-button.css-l5lnz6').click()
        //Sukses ubah category
        cy.get('.chakra-alert__desc').eq(0).should('have.text', 'item diubah')
    })
})
