import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Group of function", () => {
  it("Test function for contact page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Test function for finding the button inside contact component", () => {
    render(<Contact />);

    // Same as getByRole
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Test function for finding the placeholder inside the input ", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name...");

    expect(input).toBeInTheDocument();
  });

  // Multiple input testing
  it("Test function for multiple input ", () => {
    render(<Contact />);

    const multipleinput = screen.getAllByRole("textbox");
    console.log(multipleinput); //Returns an array of input boxes

    expect(multipleinput.length).toBe(2);
  });
});
