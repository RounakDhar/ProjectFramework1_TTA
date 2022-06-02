# ProjectFramework1_TTA
Basic Project Structure Famework(.spec.js) using Mochawesome to generate HTML Reports


Run the Commands in Terminal to generate HTML Reports:

npm install --save-dev mochawesome

npm install --save-dev mocha



===============
===============

If you are Using this line in class ==> cy.visit(Cypress.env('baseUrl'))
then use this command in Terminal to Run the Script ==> cypress run --env baseUrl="https://katalon-demo-cura.herokuapp.com/" --spec cypress/e2e/cura.spec.js --browser=chrome

=============
=============


Run Using this Command in terminal , if you are not able to run From Cypress App. ==> cypress run --spec cypress/e2e/cura.spec.js --browser=chrome
