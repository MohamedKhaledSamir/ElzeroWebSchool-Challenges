/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...data) {
  let message = ``;
  let name = "Unknown";
  let age = "UnKnown";
  let show = false;
  let err = false;

  data.forEach((argument) => {
    typeof argument === "string"
      ? (name = argument)
      : typeof argument === "number"
      ? (age = argument)
      : typeof argument === "boolean"
      ? (show = argument)
      : (err = true);
  });

  if (err) {
    console.error("Your Entries aren't right");
    return;
  }

  show
    ? (message = `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
    : (message = `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);

  console.log(message);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, undefined); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
