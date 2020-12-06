var currentDay = document.getElementById("currentDay");
currentDay.textContent = "Today is " + moment().format("MMMM Do YYYY");


var storageInputNote9 = document.getElementById("9AMnote");
var noteValueFor9AM = storageInputNote9.value;
console.log(noteValueFor9AM);
var saveBtn9 = document.getElementById("save9AM");
var storedNote9 = JSON.parse(localStorage.getItem("note9"))



// if(storedNote9) {
//     storageInputNote9.value = storedNote9
// }

var saveToLocalStorage = function() {
    localStorage.setItem("note9", JSON.stringify(noteValueFor9AM));
    console.log("here")
}

saveBtn9.addEventListener("click", saveToLocalStorage);