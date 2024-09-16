import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should check whether the login button render or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // If there is multiple button we can differentiate it by it's name
  const loginbutton = screen.getByRole("button", { name: "Login" });

  expect(loginbutton).toBeInTheDocument();
});

it("should check whether the Cart is render or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // If there is multiple button we can differentiate it by it's
  const Cart = screen.getByText("Cart - (0 items)");

  expect(Cart).toBeInTheDocument();
});

it("should check that click event is triggering", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // If there is multiple button we can differentiate it by it's
  const Loginbutton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(Loginbutton);

  const Logoutbutton = screen.getByRole("button", { name: "Logout" });
  expect(Logoutbutton).toBeInTheDocument();
});

it("should check the Cart is rendered or not by passing regex", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Cart = screen.getByText(/Cart/);

  expect(Cart).toBeInTheDocument();
});
