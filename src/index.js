import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  //  fullName  -- would be a nested object called fullName with its keys
  ...fullName, // this speads all the items in fullName object into this
  //  user object, so all items in one object like so
  id: 1,
  username: "jamesbond"
};

console.log(user);
