

class  Fruits{

    name ;
    color;
    constructor(name,color){

            console.log('object created...')

            this.name = name;
            this.color = color;
    }
      display(){  //method

            console.log(this.name)

    }

}
const  obj = new Fruits('apple','red'); // calling construtor();
const  obj2 = new Fruits('banana','yellow');

console.log(obj)
console.log(obj.name +" "+obj.color)

obj.display();