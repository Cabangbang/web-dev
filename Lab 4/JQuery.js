document.title = "Lab 4";

// Text Section
$("#Name").append("<h1>Raphael Bien Cabanbang</h1>");

$("#About").append("<h2>About</h2>");
$("#About").append("<p id='About-p'></p>");
$("About-p").attr("id", "p");
$("#About-p").text(
  "Hello I'm Raphael Bien Cabangbang. I am a 3rd year student at TU Dublin." +
    "I know the basics of HTML, Java, Python, C and SQL Databases." +
    "I am a team worker that will always be ready to help others."
);

// List 1 Section
$("#list").append("<h2>Past Education & Employment</h2>");
$("#list").append('<ul id="ul1"></ul>');
$("#ul1").append(
  '<li id="School"><a href="https://www.clonkeencollege.ie/" target="_blank">Clonkeen College</a></li>'
);
$("#ul1").append('<ul id="ul2"></ul>');
$("#ul2").append("<li>Graduated 2019</a></li>");
$("#ul2").append("<li>Library Committee</li>");
$("#ul2").append("<li>Graphic Design Class</li>");

$("#ul1").append(
  '<br><li id="Job1"><a href="https://www.mcdonalds.com/ie/en-ie.html" target="_blank">McDonalds</a></li>'
);
$("#ul1").append('<ul id="ul3"></ul>');
$("#ul3").append("<li>Cashier</li>");
$("#ul3").append("<li>Cook</li>");

$("#ul1").append(
  '<br><li id="Job2"><a href="https://www.mcdonalds.com/ie/en-ie.html" target="_blank">Tesco</a></li>'
);
$("#ul1").append('<ul id="ul4"></ul>');
$("#ul4").append("<li>Cashier</li>");
$("#ul4").append("<li>Team Worker</li>");

// List 2
$("#list2").append("<h2>Programming Languages</h2>");
$("#list2").append('<ul id="ul5"></ul>');
$("#ul5").append("<li>Python</li>");
$("#ul5").append("<li>Java</li>");
$("#ul5").append("<li>C</li>");
$("#ul5").append("<li>HTML</li>");
$("#ul5").append("<li>SQL</li>");

// Table Section
$("#table").append('<table id="table1"></table>');
$("#table1").append('<tr id="1stRow"></>');
$("#1stRow").append("<th>Education</th>");
$("#1stRow").append("<th>Year</th>");
$("#1stRow").append("<th>Percentage / Grade</th>");

$("#table1").append('<tr id="2ndRow"></>');
$("#2ndRow").append("<td>Clonkeen College</td>");
$("#2ndRow").append("<td>2013-2019</td>");
$("#2ndRow").append("<td>75.57%</td>");

$("#table1").append('<tr id="3rdRow"></>');
$("#3rdRow").append("<td>TU Dublin</td>");
$("#3rdRow").append("<td>2019-2020</td>");
$("#3rdRow").append("<td>72.40%</td>");

$("#table1").append('<tr id="4thRow"></>');
$("#4thRow").append("<td>TU Dublin</td>");
$("#4thRow").append("<td>2020-2021</td>");
$("#4thRow").append("<td>N/A</td>");

// Bottoms Section
$("#buttons").append("<h2>Questions</h2>");

$("#parent1").append('<p id="Question">How old am I?</p>');
$("#parent1").append(
  '<input onclick="button1()" type="button" value="Show" id="button1"></input>'
);
$("#parent1").append('<div id="myDiv1"></div>');

$("#parent2").append('<p id="Question">Where do I live?</p>');
$("#parent2").append(
  '<input onclick="button2()" type="button" value="Show" id="button2"></input>'
);
$("#parent2").append('<div id="myDiv2"></div>');

$("#parent3").append('<p id="Question">Where am I from?</p>');
$("#parent3").append(
  '<input onclick="button3()" type="button" value="Show" id="button3"></input>'
);
$("#parent3").append('<div id="myDiv3"></div>');

$("#buttons").append(
  '<input onclick="swapStyleCreative()" type="button" value="Change style" id=swapButton></input>'
);
