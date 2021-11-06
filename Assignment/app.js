$(document).ready(function () {
  $("#button-hide").click(function () {
    $("p").hide("slow", function () {
      alert("The paragraph is now hidden");
    });
  });
});
