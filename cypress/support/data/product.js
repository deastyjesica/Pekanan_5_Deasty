describe('Product Test', ()=>{
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
    it('Open the Dashboard Product page', () => {
        //Click 'Product' on the left sidebar
        cy.get('a[href="/products"]').click()
        //Sukses Ke Dashboard Product Page
        cy.url().should('include', '/products')
        cy.get('.css-1piskbq').click()
    });
    it('Add new product', ()=>{
        //Click 'Product' on the left sidebar
        cy.get('[href="/products"] > .css-ewi1jp').click()
        //cy.get('[href="/products"]').click()
        //Sukses Ke Dashboard Product Page
        cy.url().should('include','/products')
        //Click 'tambah' button
        cy.get('.css-1piskbq').click()
        //Double Click di field 'kode' dan clear
        cy.get('#kode').clear()
        //Entering 'DJKas001' in kode field 
        cy.get('#kode').type('DJKas001')
        //Entering 'Buku' in nama field 
        cy.get('#nama').type('Buku')
        //Entering 'Elemental' in deskripsi field
        cy.get('#deskripsi').type('Elemental')
        //Entering '80000' in harga beli field
        cy.get('#harga\\ beli').type('80000')
        //Entering '100000' in harga jual field
        cy.get('#harga\\ jual').type('100000')
        //Entering '40' in stock field
        cy.get('#stok').type('40')
        //Click kategori
        cy.get('#kategori').click()
        //Click 'Film'
        cy.contains('Film').click()
        //Click 'Simpan' button
        cy.get('.chakra-button').click()
        //Sukses Add Product
        cy.url().should('include', '/products')
    })
    it('Delete product', ()=>{
        //Click 'Product' on the left sidebar
        cy.get('[href="/products"] > .css-ewi1jp').click()
        //cy.get('[href="/products"]').click()
        //Sukses Ke Dashboard Product Page
        cy.url().should('include','/products')
        //Click titik tiga menu button
        cy.get('#menu-button-21')
        //Click 'Hapus' button
        cy.get('.chakra-table').last().find('tbody tr').eq(0).find('.chakra-button').click()
        cy.get('.chakra-table').last().find('tbody tr').eq(0).find('.chakra-menu__menu-list').contains('hapus').click({force:true})
        //Click Hapus button
        cy.get('.css-n45e6f').click()
    });
})