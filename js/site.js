// Get string from the page
// Controller
function getValue() {
  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;

  let revString = reverseString(userString);

  displayString(revString);
}

// Reverse the string
// Logic
function reverseString(userString) {
  let revString = [];

  // reverse string using a for loop
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }

  return revString;
}

// Display the reversed string to the user
// View
function displayString(revString) {
  // write to the page
  document.getElementById("msg").innerHTML = `<strong>${revString}</strong>`;

  // show the alert box
  document.getElementById("alert").classList.remove("invisible");
}
