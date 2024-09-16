import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resmenumockdata.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should render the cart items", () => {
  it("should render restaurnt menu ", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
        </BrowserRouter>
      );
    });

    const accordion = screen.getByText("Recommended (3)");

    expect(accordion).toBeInTheDocument();

    fireEvent.click(accordion);

    const cartitems = screen.getAllByTestId("fooditems");

    expect(cartitems.length).toBe(3);

    const addbtn = screen.getAllByRole("button", {name : "ADD"})

    fireEvent.click(addbtn[0]);

    const CartItem = screen.getAllByText(/Cart/)

    const Heading = screen.getByText("Clear Cart")

    fireEvent.click(Heading);

    expect(cartitems.length).toBe(3);

  });
  
});
