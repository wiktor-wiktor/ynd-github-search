import { SearchBox } from "./SearchBox";

describe("SearchBox", () => {
  beforeEach(() => {
    cy.mount(<SearchBox />);
  });

  it("renders", () => {
    cy.getCy("search-input").should("exist");
    cy.getCy("search-button").should("exist");
  });

  it("has a placeholder", () => {
    cy.getCy("search-input").should("have.attr", "placeholder");
  });

  it("allows resseting the input", () => {
    cy.getCy("search-input").type("test");
    cy.getCy("search-input").should("have.value", "test");
    cy.getCy("reset-button").click();
    cy.getCy("search-input").should("have.value", "");
  });

  it("allows searching only when more than 3 characters are typed", () => {
    cy.getCy("search-input").type("te");
    cy.getCy("search-button").should("be.disabled");
    cy.getCy("search-input").type("st");
    cy.getCy("search-button").should("not.be.disabled");
  });
});
