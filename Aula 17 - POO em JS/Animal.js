class Animal{
  constructor(name){
    this.name = name;
  }

  speak(){
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
  }

  speak(){
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal('Luke');
const dog = new Dog('Spike');

animal.speak();
dog.speak();