function printAll(arrOfStrings) {
  if (arrOfStrings?.length&& typeof arrOfStrings !== "string") {
    for (const s of arrOfStrings) {
      console.log(s);
    }
  } else if (typeof arrOfStrings === "string") {
    console.log(arrOfStrings);
  } else {
    // do nothing
  }
}

printAll(["ball", "bat", "cat"]);
printAll("this is a string");
printAll(null);
