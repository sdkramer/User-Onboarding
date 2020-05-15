describe("First test", () => {
  it("should return true", () => {
    expect(NaN).to.equal(NaN);
  });
});

describe("Testing form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });

  it("inputs name into name input", () => {
    cy.get(":nth-child(1) > .input-field")
      .type("Sean Kramer")
      .should("have.value", "Sean Kramer")
      .clear()
      cy.contains('Please enter name');
  });

  it("inputs email into email input", () => {
    cy.get(":nth-child(2) > .input-field")
      .type("email@mail.com")
      .should("have.value", "email@mail.com");
  });

  it("types password into password input", () => {
    cy.get(":nth-child(3) > .input-field")
      .type("1234567")
      .should("have.value", "1234567");
  });

  it("checks to see if a user can check the terms of service box", () => {
    cy.get('input[type="checkbox"]').check().should("be.checked");
  });

  it("checks to see if a user can submit the form", () => {
    cy.get('form').submit();
  });
   

});
