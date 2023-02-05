import Counter from "../../Counter";

import {fireEvent, render , screen } from "@testing-library/react"


test("testing increment counter",()=>{


    render(
    <>
    <Counter />
     </>)  // render counter component


    const counterValue = screen.getByTestId("counterid");  // access counter value byTestId

       

    const plusButton =    screen.getByTestId("increment"); // access plus button byTestid

         

     fireEvent.click(plusButton);  // click plusbutton using fireEvent.click();
     fireEvent.click(plusButton);
     fireEvent.click(plusButton);


     expect(counterValue).toHaveTextContent("3") // capture countervalue compare with given value

    
});



   

