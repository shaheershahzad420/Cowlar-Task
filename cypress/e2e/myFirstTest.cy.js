describe('My First Test', () => 
{
    it('First Task', () => {
      cy.visit("https://demoqa.com/");
      cy.get('.category-cards > :nth-child(2) > :nth-child(1) > :nth-child(3) ').click();
      cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
      cy.get('#firstName').type("Cowlar");
      cy.get('#lastName').type("Developer");
      cy.get('#userEmail').type("qaengineer@cowlar.com");
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
      cy.get('#userNumber').type("0123456789");
      cy.get('#dateOfBirthInput').type("01 Sept 2023");
      cy.get('.subjects-auto-complete__value-container').type("Computer Science");
      cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
      cy.get('#currentAddress').type("Address 1");
      cy.get('#close-fixedban').click()
      cy.get('#submit').click();
      cy.get('.table > tbody > :nth-child(1) > :nth-child(2)  ').should('have.text','Cowlar Developer');
      cy.get('.table > tbody > :nth-child(2) > :nth-child(2)   ').should('have.text','qaengineer@cowlar.com');
      cy.get('.table > tbody > :nth-child(3) > :nth-child(2)   ').should('have.text','male');
      cy.get('.table > tbody > :nth-child(4) > :nth-child(2)   ').should('have.text','0123456789');
      cy.get('.table > tbody > :nth-child(5) > :nth-child(2)   ').should('have.text','01 September,2023');
      cy.get('.table > tbody > :nth-child(6) > :nth-child(2)   ').should('have.text','01 September,2023');
      cy.get('.table > tbody > :nth-child(7) > :nth-child(2)   ').should('have.text','music');
      cy.get('.table > tbody > :nth-child(9) > :nth-child(2)   ').should('have.text','Address 1');
      cy.get('.table > tbody > :nth-child(9) > :nth-child(2)   ').should('have.text','Address 1');
      cy.get('.table > tbody > :nth-child(10) > :nth-child(2)   ').should('have.text','NCR DELHI');
      cy.get("#closeLargeModal").click();
      
    })

    it('Seond Task', () => {
      cy.visit("https://demoqa.com/");
      cy.get('.category-cards > :nth-child(5) > :nth-child(1) > :nth-child(3) ').click();
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").should("have.text","elements")
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").should("have.text","Forms")
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").should("have.text","Alerts, Frame & Windows")
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").should("have.text","Widgets")
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").should("have.text","Interactions")
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(6) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").should("have.text","Book Store Application")
      cy.get(".btn btn-light").click();
      cy.get(".main-header").should("have.text","Resizable")
      cy.get("#resizableBoxWithRestriction").should("have.width","200px")
      cy.get("#resizableBoxWithRestriction").should("have.height","200px")
      cy.get("#resizable").should("have.property","resizable");
    })


    it('Third Task', () => {
      cy.visit("https://demoqa.com/");
      cy.get(".row > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(6) >:nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)").click();
      cy.get("body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2)").click();
      cy.get("a[href='/books?book=9781593277574']").click();
      cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('apiRequest');
      cy.wait('@apiRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(isbn.title.subTitle.author.publish_date.publisher.pages.description.website).to.equal('9781593277574','Understanding ECMAScript 6','The Definitive Guide for JavaScript Developers','Nicholas C. Zakas','2016-09-03T00:00:00.000Z','No Starch Press','352','ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E','https://leanpub.com/understandinges6/read');
    })
})