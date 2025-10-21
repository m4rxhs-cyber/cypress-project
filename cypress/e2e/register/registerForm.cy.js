import { RegisterForm } from "../../support/pages/RegisterForm";

const registerForm = new RegisterForm();

const colors = {
  errors: "rgb(220, 53, 69)",
  success: "rgb(25, 135, 84)",
};

describe("Image Registration", () => {
  describe("Submitting an image with invalid inputs", () => {
    after(() => {
      cy.clearAllLocalStorage();
    });

    const input = {
      title: "",
      url: "",
    };

    it("Given I am on the image registration page", () => {
      cy.visit("/");
    });

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title);
    });

    it(`Then I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url);
    });

    it(`Then I click the submit button`, () => {
      registerForm.clickSubmit();
    });

    it(`Then I should see "Please type a title for the image" message above the title field`, () => {
      registerForm.elements
        .titleFeedback()
        .should("contains.text", "Please type a title for the image");
    });

    it(`And I should see "Please type a valid URL" message above the imageUrl field`, () => {
      registerForm.elements
        .urlFeedback()
        .should("contains.text", "Please type a valid URL");
    });

    it(`And I should see an exclamation icon in the title and URL fields`, () => {
      registerForm.elements.titleInput().should(([element]) => {
        const styles = window.getComputedStyle(element);
        const border = styles.getPropertyValue("border-color");
        expect(border).to.equal(colors.errors);
      });

      registerForm.elements.imageUrlInput().should(([element]) => {
        const styles = window.getComputedStyle(element);
        const border = styles.getPropertyValue("border-color");
        expect(border).to.equal(colors.errors);
      });
    });
  });

  describe("Submitting an image with valid inputs using enter key", () => {
    after(() => {
      cy.clearAllLocalStorage();
    });

    const input = {
      title: "Alien BR",
      url: "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg",
    };

    input.title = "Alien BR";
    input.url =
      "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg";

    it(`I am on the image registration page`, () => {
      cy.visit("/");
    });

    it(`I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title);
    });

    it(`I should see a check icon in the title field`, () => {
      registerForm.clickSubmit();

      registerForm.elements.titleInput().should(([element]) => {
        const styles = window.getComputedStyle(element);
        const border = styles.getPropertyValue("border-color");
        expect(border).to.equal(colors.success);
      });
    });

    it(`I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url);
    });

    it(`I should see a check icon in the imageUrl field`, () => {
      registerForm.elements.imageUrlInput().should(([element]) => {
        const styles = window.getComputedStyle(element);
        const border = styles.getPropertyValue("border-color");
        expect(border).to.equal(colors.success);
      });
    });

    it(`I can hit enter to submit the form`, () => {
      registerForm.clickSubmit();
    });

    it(`the list of registered images should be updated with the new item`, () => {
      cy.get('#card-list article').should('have.length.greaterThan', 3)
    });
  });

  describe("Submitting an image and updating the list", () => {
    
  })
});
