//Function to swap style sheet
function swapStyleSheet(sheet) {
  if (sheet == "creative.css") {
    document.getElementById("Style").setAttribute("href", "creative.css");
    document
      .getElementById("swapButton")
      .setAttribute("value", "Change to Professional");
    document
      .getElementById("swapButton")
      .setAttribute("onClick", "swapStyleProfessional()");
  }
  if (sheet == "professional.css") {
    document.getElementById("Style").setAttribute("href", "professional.css");
    document
      .getElementById("swapButton")
      .setAttribute("value", "Change to Creative");
    document
      .getElementById("swapButton")
      .setAttribute("onClick", "swapStyleCreative()");
  }
}

//functions that call to the swap style sheet function
function swapStyleProfessional() {
  swapStyleSheet("professional.css");
}

function swapStyleCreative() {
  swapStyleSheet("creative.css");
}

//function to remove the answer
function removediv() {
  var oldDiv = document.getElementById("answer");
  var blank = document.createElement("p");
  var text = document.createTextNode("");

  blank.id = "answer";
  blank.appendChild(text);
  oldDiv.replaceWith(blank);
}

//function to display the answers
function replaceDiv(button) {
  if (button == "button1") {
    var text = document.createTextNode("21");
  }
  if (button == "button2") {
    var text = document.createTextNode("Blackrock");
  }
  if (button == "button3") {
    var text = document.createTextNode("Manila, Philippines");
  }

  var oldDiv = document.getElementById("answer");
  var parent = document.getElementById("container");
  var newDiv = document.createElement("p");

  newDiv.id = "answer";
  newDiv.appendChild(text);
  oldDiv.replaceWith(newDiv);
}
