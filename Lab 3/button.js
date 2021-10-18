function showAndHide(answer, button) {
  let ans = document.getElementById(answer);
  var button = document.getElementById(button);

  if (ans.style.display === "block") {
    ans.style.display = "none";
    if (button.value == "Hide") button.value = "Show";
  } else {
    ans.style.display = "block";
    if (button.value == "Show") button.value = "Hide";
  }
}

function showAndHide1() {
  showAndHide("answer1", "button1");
}
function showAndHide2() {
  showAndHide("answer2", "button2");
}
function showAndHide3() {
  showAndHide("answer3", "button3");
}

function create(){
var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
document.body.appendChild(btn);   
}

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

function swapStyleProfessional() {
  swapStyleSheet("professional.css");
}

function swapStyleCreative() {
  swapStyleSheet("creative.css");
}
