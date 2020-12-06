var currentDay = document.getElementById("currentDay");
currentDay.textContent = "Today is " + moment().format("MMMM Do YYYY");

document.getElementById("save9AM").addEventListener("click", function() {
    document.getElementById("9AMnote").innerHTML;
    // var noteFor9AM = noteFor9AM.innerHTML;
    console.log(document.getElementById("9AMnote").innerHTML)
    console.log("Made it here!")

});