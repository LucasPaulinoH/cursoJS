class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  increaseAge(){
    this.age++;
  }

  static speak(){ 
    console.log('Hello World!');
  } /* este método pode ser executado mesmo sem haver instâncias da classe,
       por isso ele se denomina por 'static'. */
}

const person = new Person('Lucas', 'Paulino', 20);


person.increaseAge(); //aumenta a idade

console.log(`${person.getFullName()} tem ${person.age} anos.`);

Person.speak(); //execução do método estático