import { useState } from "react";



// its not a component , its just a user-defined hook func
export default function  useCustomCounter(){

        const [count,setCount]  = useState(0);

 const   handleIncrement = ()=>{

            setCount(count + 1);


    }

    return {

            count,
            handleIncrement
    }


}