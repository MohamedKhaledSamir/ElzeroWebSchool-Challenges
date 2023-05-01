/*
  If Condition Challenge
*/

// Write This Condition With Ternary If Syntax

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("unKnown");

/////////////////////////////////////////////

let st = "Elzero Web School";

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good");
}

if (st.slice(0, 5) !== "string") {
  console.log("Good");
}

if (typeof parseInt(st) === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
