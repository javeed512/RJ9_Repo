

function  empList(){


        let  list = ["Ankesh","Surya Narayan","Javeed Mohammed","Ankita","Tom"];

        console.log(list);

     

            list.push("Yadav")


        list.forEach((data)=>{
            console.log(data)

        });

        console.log("Deleted values are "+list.splice(0,2));


            let   x = "Javeed";

            console.log(x.slice(0,5))

            console.log(list.slice(0,2))


     list.filter((name)=>{return name.length > 6 }).forEach((data)=>{console.log(data)})


     let  salaries= [3000,5000,7000,2000,4000,8000];

       let totalSal =     salaries.reduce((s1,s2)=>{return s1+s2;})

        console.log(totalSal)


        salaries.map((sal)=>{ 

                console.log("Old Sal "+sal)
           
                return sal + 1000;

             })
             .forEach((data)=>{console.log("New Sal "+data)})


}
