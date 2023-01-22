

 const obj = {fname:"javeed",lname:"mohammed",age:30}


 function  get(){

    //   const  f = obj.fname;

    //   console.log(f);

    //   const  l = obj.lname;

    //   console.log(l);

        const{fname:f , lname: l}  = obj; 
        console.log(f);
        console.log(l);

 }


 get();