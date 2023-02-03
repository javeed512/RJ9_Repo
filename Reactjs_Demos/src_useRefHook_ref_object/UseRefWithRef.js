

import React, { useRef } from 'react'

export default function UseRefWithRef() {


            const use_ref = useRef(null);

            const b1 = useRef(null);


           const handleClick = (e)=>{


                    use_ref.current.value = 'Alan';
                    use_ref.current.focus();
                    use_ref.current.style.color = 'red';

                    b1.current.value = "Javeeds Button"

               

                
                    


            }

            const clickMe = ()=>{

                    console.log('MyButton clicked');

            }


  return (
    <div>

           UserName: <input type="text"      ref={use_ref}    />
        

            <button onClick={handleClick}  >Click</button><br/>

            <input type="submit" onClick={clickMe} ref={b1} value="MyButton" /><br/>


      
    </div>
  )
}
