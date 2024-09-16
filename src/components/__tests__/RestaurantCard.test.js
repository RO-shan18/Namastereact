import { render, screen } from "@testing-library/react"
import RestaurantCard, { withpromotedcard } from "../RestaurantCard"
import Mock_Data from "../mocks/Mock_Data.json"
import "@testing-library/jest-dom"

it("should render the Resataurant Card ", ()=>{

    render(<RestaurantCard resdata={Mock_Data}/>)

    const name = screen.getByText("abCoffee");

    expect(name).toBeInTheDocument();
}) 

const Promotedrestaurantcard = withpromotedcard(RestaurantCard);

it("should render the promoted card", ()=>{

    render(<Promotedrestaurantcard resdata={Mock_Data}/>)

    const promoted = screen.getByText("Promoted")

    expect(promoted).toBeInTheDocument();
})