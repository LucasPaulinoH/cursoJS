//Type
type Hobbie = {
  hobbieId: number;
  name: string;
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
  password?: string | number; //when this attribute is opcional
  hobbies: Hobbie[];
};
/* it works like a struct in C++ */

const user: User = {
  firstName: "Lucas",
  lastName: "Paulino",
  age: 20,
  password: "lucaspaulino12",
  hobbies: [
    { hobbieId: 1, name: "watch F1" },
    { hobbieId: 2, name: "learn TS" },
  ],
};
