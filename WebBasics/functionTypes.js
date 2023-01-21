

function  func1(){


    console.log("Welcome to Java script function");

}

func1();


  const f1 =  function  (){

            let x = 90;  // let or const for local

            console.log("Annonymous Function called..")


    }



    f1();



  const  arrow =      ()=>{ 

                console.log("Arrow Function called..")

        }

        arrow();


    const add = (a,b)=>{

            console.log(a+b)

    }    



  function   getSum(add){

        console.log("getSum() called..");

  }      

  getSum(add(5,15));