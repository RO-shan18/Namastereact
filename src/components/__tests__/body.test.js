import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resdatamockdata.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const beforefilter = screen.getAllByTestId("rescards");

  expect(beforefilter.length).toBe(16);

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchinput = screen.getByTestId("search");

  fireEvent.change(searchinput, { target: { value: "burger" } });

  fireEvent.click(searchbtn);

  const afterfilter = screen.getAllByTestId("rescards");

  expect(afterfilter.length).toBe(3);
});

it("should render the filtered restaurant ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterbtn = screen.getByRole("button", {name : "High Rated Restaurant"});

  fireEvent.click(filterbtn);

  const Afterfilter = screen.getAllByTestId("rescards");

  expect(Afterfilter.length).toBe(9);

});
