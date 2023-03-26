import React from "react";

export default function Test() {
  //When creating a variable, there are two main ways TypeScript assigns a type:

  //Explicit;
  let myName: string = "rex";
  let myAge: number = 33;

  //Implicit;
  let today: string = "Tuesday";

  let month: number = 3;

  //Arrays
  const names: string[] = [];
  names.push("rex", "test");

  const age: readonly number[] = [1, 3]; //readonly prevents array value from being changed

  console.log(age);
  //type inference
  const numbers = [1, 2, 3]; // inferred to type number[]

  numbers.push(4); // no error

  console.log("numbers", numbers);

  let head: number = numbers[1]; // no error

  console.log("head", head);

  //Tuples
  let myTuple: [boolean, number, string];
  myTuple = [true, 5, "test"];

  console.log(myTuple);
  //readonly tuples
  let readyOnlyTuples: readonly [boolean, number, string];
  readyOnlyTuples = [false, 333, "Glory"];
  console.log(readyOnlyTuples);
  //named tuples
  const grades: [ped: number, rex: number] = [33, 42.3];
  grades.push(333);
  console.log(grades);

  //destructure
  const states: [string, string] = ["ogun", "Oyo"];
  const [a, b] = states;
  console.log(a);

  //objects
  const friend: { name: string; age: number; address: string } = {
    name: "emmyzay",
    age: 29,
    address: "Oyo",
  };

  console.log(friend);

  const car: { type: string; mileage?: number } = {
    // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
  };
  car.mileage = 2000;

  //index
 const nameAgeMap: { [index: string]: number } = {};

 nameAgeMap.Jack = 25; // no error
 nameAgeMap.Mark = 50; // no error
 nameAgeMap["Lisa"] = 30; // no error

 console.log(nameAgeMap);

  //enum number
  enum myBoys{
    ayo = 5,
    ola = 10,
    dami
  };

  let middlechild = myBoys.dami;
  console.log(middlechild)
  
  //enum strings
  enum bess {
    first = "ella",
    second = "tem",
    third = "ola"
  }

  let best = bess.first

  console.log(best)


  return (
    <div>
      <h1>
        My name is {myName} and my age is {myAge}.
      </h1>

      <h1>
        Today's {today} and month is {month}
      </h1>
    </div>
  );
}
