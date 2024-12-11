import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@pages/index";

describe("Home", () => {
  it("Renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Country Search",
    });

    expect(heading).toBeInTheDocument();
  });

  it("Test that all search elements appear.", () => {
    render(<Home />);
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();

    const clearButton = screen.getByTestId("clear-button");
    expect(clearButton).toBeInTheDocument();

    const refetchButton = screen.getByTestId("refetch-button");
    expect(refetchButton).toBeInTheDocument();

    const countriesGrid = screen.getByTestId("countries-grid");
    expect(countriesGrid).toBeInTheDocument();
  });

  it("Test that search input excepts value changes.", async () => {
    render(<Home />);

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "A" } });
    expect(searchInput).toHaveValue("A");

    fireEvent.change(searchInput, { target: { value: "AD" } });
    expect(searchInput).toHaveValue("AD");
  });

  it("Test that the default countries list appears with children.", async () => {
    render(<Home />);

    const countriesGrid = await screen.findByTestId("countries-grid");
    expect(countriesGrid).toBeInTheDocument();

    const countriesGridChildren = await screen.findAllByTestId(
      "countries-grid-item"
    );

    expect(countriesGridChildren.length).toBeGreaterThan(0);
  });
});
