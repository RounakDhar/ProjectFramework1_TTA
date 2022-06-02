///<reference types ="Cypress" />

describe('Cura Make Appointment', function () {
    it('Visit the URL', function () {

        //cy.visit(Cypress.env('baseUrl'))
        cy.visit('https://katalon-demo-cura.herokuapp.com/')

    })

    it('Click on Make Appointment', function () {
        //#btn-make-appointment ; Click on this Button

        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()

    })

    it('Make Appointment', function () {
        //#Hongkong CURA Healthcare Center ; select this
        //#chk_hospotal_readmission ; click checkbox
        //#radio_program_medicaid ; click radiobutton
        //#txt_visit_date ; Input Date
        //#txt_comment ; Input Comment
        //#btn-book-appointment ; click on this button
        

        cy.get('select').select('#Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicaid').click()
        cy.get('#txt_visit_date').type('21/06/2022')

        cy.get('#txt_comment').click({force:true})
        cy.get('#txt_comment').type('Test Automation at 21/06/2022')

        cy.get('#btn-book-appointment').click()



    })

    it('Verify Appointment', function () {
        //h2 : Appointment Confirmation ; 
        //#comment ; Navigate Comment


        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains('Test Automation at 21/06/2022')



    })


})