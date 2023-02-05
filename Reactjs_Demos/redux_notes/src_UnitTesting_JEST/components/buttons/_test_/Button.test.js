import { render , screen } from "@testing-library/react";
import Button from "../Button";



it("testing button component",()=>{

    render(<Button label="Login" />);

     const buttonElement =   screen.getByTestId("bid");

        expect(buttonElement).toHaveTextContent("Login");


});