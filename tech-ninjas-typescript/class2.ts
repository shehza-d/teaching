// One last word on narrowing
const fruits: string[] = ["apple", "mango"];

const fr: number[] = [3, 4, 5, 6];

const numberAndStringArr: (number | string)[] = ["str2", 2, "str3", 3];

let user: IUser = {
  name: "shehzad",
  age: 21,
};

let user2: IUser = {
  name: "ali",
  age: 30,
  height: "5",
};

interface IUser {
  name: string;
  age: number;
  height?: number | string;
}

interface IStudent extends IUser {
  schoolName: string;
}

const user3: IStudent = {
  name: "okasha",
  age: 25,
  schoolName: "SMIT",
};

// array of objects
const listOfAllUser: IUser[] = [
  { name: "ahmed", age: 25 },
  { name: "rehan", age: 25 },
  user3,
  user2,
];

//
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point): number {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  return 6;
}

const a = printCoord({ x: 100, y: 100 });

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

let something = 4;
let testing = something > 5 ? "myString" : 55;

const test = "Shehzad";

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "right");

const obj = { counter: 0 };

if (true) {
  obj.counter = 10;
}

let testing2 = null;

function liveDangerously(parameter?: number | string) {
  // No error
  if (typeof parameter === "number") {
    // Narrowing
    console.log(parameter.toFixed());
  }

  if (typeof parameter === "string") {
    // Narrowing
    console.log(parameter.toUpperCase());
  }

  // console.log(parameter.toFixed());
}

liveDangerously(4);
liveDangerously("stringgg");
liveDangerously(6);

function printAll(arrOfStrings: string | string[] | null) {
  if (typeof arrOfStrings === "string") {
    console.log(arrOfStrings);
  } else if (arrOfStrings?.length) {
    for (const s of arrOfStrings) {
      console.log(s);
    }
  } else {
    // do nothing
  }
}

printAll(null);
printAll("this is a string");
printAll(["ball", "bat", "cat"]);

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

getUsersOnlineMessage(0)
