var currentDay = document.getElementById("currentDay");
currentDay.textContent = "Today is " + moment().format("MMMM Do YYYY");


var saveBtn9 = document.getElementById("save9AM");
var saveBtn10 = document.getElementById("save10AM");
var saveBtn11 = document.getElementById("save11AM");
var saveBtn12 = document.getElementById("save12AM");
var saveBtn1 = document.getElementById("save1AM");
var saveBtn2 = document.getElementById("save2AM");
var saveBtn3 = document.getElementById("save3AM");
var saveBtn4 = document.getElementById("save4AM");
var saveBtn5 = document.getElementById("save5AM");




var storedNote9 = JSON.parse(localStorage.getItem("note9"))
var storedNote10 = JSON.parse(localStorage.getItem("note10"))
var storedNote11 = JSON.parse(localStorage.getItem("note11"))
var storedNote12 = JSON.parse(localStorage.getItem("note12"))
var storedNote1 = JSON.parse(localStorage.getItem("note1"))
var storedNote2 = JSON.parse(localStorage.getItem("note2"))
var storedNote3 = JSON.parse(localStorage.getItem("note3"))
var storedNote4 = JSON.parse(localStorage.getItem("note4"))
var storedNote5 = JSON.parse(localStorage.getItem("note5"))



saveBtn9.addEventListener("click", save9ToLocalStorage);
saveBtn10.addEventListener("click", save10ToLocalStorage);
saveBtn11.addEventListener("click", save11ToLocalStorage);
saveBtn12.addEventListener("click", save12ToLocalStorage);
saveBtn1.addEventListener("click", save1ToLocalStorage);
saveBtn2.addEventListener("click", save2ToLocalStorage);
saveBtn3.addEventListener("click", save3ToLocalStorage);
saveBtn4.addEventListener("click", save4ToLocalStorage);
saveBtn5.addEventListener("click", save5ToLocalStorage);


if(storedNote9) {
    var storageInputNote9 = document.getElementById("9AMnote");
    storageInputNote9.value = storedNote9
}

if(storedNote10) {
    var storageInputNote10 = document.getElementById("10AMnote");
    storageInputNote10.value = storedNote10
}

if(storedNote11) {
    var storageInputNote11 = document.getElementById("11AMnote");
    storageInputNote11.value = storedNote11
}

if(storedNote12) {
    var storageInputNote12 = document.getElementById("12PMnote");
    storageInputNote12.value = storedNote12
}

if(storedNote1) {
    var storageInputNote1 = document.getElementById("1PMnote");
    storageInputNote1.value = storedNote1
}

if(storedNote2) {
    var storageInputNote2 = document.getElementById("2PMnote");
    storageInputNote2.value = storedNote2
}

if(storedNote3) {
    var storageInputNote3 = document.getElementById("3PMnote");
    storageInputNote3.value = storedNote3
}

if(storedNote4) {
    var storageInputNote4 = document.getElementById("4PMnote");
    storageInputNote4.value = storedNote4
}

if(storedNote5) {
    var storageInputNote5 = document.getElementById("5PMnote");
    storageInputNote5.value = storedNote5
}


    
function save9ToLocalStorage () {
    var storageInputNote9 = document.getElementById("9AMnote");
    var noteValueFor9AM = storageInputNote9.value;
    console.log(noteValueFor9AM);
    localStorage.setItem("note9", JSON.stringify(noteValueFor9AM));
}

function save10ToLocalStorage () {
    var storageInputNote10 = document.getElementById("10AMnote");
    var noteValueFor10AM = storageInputNote10.value;
    console.log(noteValueFor10AM);
    localStorage.setItem("note10", JSON.stringify(noteValueFor10AM));
}

function save11ToLocalStorage () {
    var storageInputNote11 = document.getElementById("11AMnote");
    var noteValueFor11AM = storageInputNote11.value;
    console.log(noteValueFor11AM);
    localStorage.setItem("note11", JSON.stringify(noteValueFor11AM));
}

function save12ToLocalStorage () {
    var storageInputNote12 = document.getElementById("12PMnote");
    var noteValueFor12PM = storageInputNote12.value;
    console.log(noteValueFor12PM);
    localStorage.setItem("note12", JSON.stringify(noteValueFor12PM));
}

function save1ToLocalStorage () {
    var storageInputNote1 = document.getElementById("1PMnote");
    var noteValueFor1PM = storageInputNote1.value;
    console.log(noteValueFor1PM);
    localStorage.setItem("note1", JSON.stringify(noteValueFor1PM));
}

function save2ToLocalStorage () {
    var storageInputNote2 = document.getElementById("2PMnote");
    var noteValueFor2PM = storageInputNote2.value;
    console.log(noteValueFor2PM);
    localStorage.setItem("note2", JSON.stringify(noteValueFor2PM));
}

function save3ToLocalStorage () {
    var storageInputNote3 = document.getElementById("3PMnote");
    var noteValueFor3PM = storageInputNote3.value;
    console.log(noteValueFor3PM);
    localStorage.setItem("note3", JSON.stringify(noteValueFor3PM));
}

function save4ToLocalStorage () {
    var storageInputNote4 = document.getElementById("4PMnote");
    var noteValueFor4PM = storageInputNote4.value;
    console.log(noteValueFor4PM);
    localStorage.setItem("note4", JSON.stringify(noteValueFor4PM));
}

function save5ToLocalStorage () {
    var storageInputNote5 = document.getElementById("5PMnote");
    var noteValueFor5PM = storageInputNote5.value;
    console.log(noteValueFor5PM);
    localStorage.setItem("note5", JSON.stringify(noteValueFor5PM));
}

var date = new Date
var hour = date.getHours();
console.log(hour)

    var colorCode9 = document.getElementById("9AMnote");
    var colorCode10 = document.getElementById("10AMnote");
    var colorCode11 = document.getElementById("11AMnote");
    var colorCode12 = document.getElementById("12PMnote");
    var colorCode1 = document.getElementById("1PMnote");
    var colorCode2 = document.getElementById("2PMnote");
    var colorCode3 = document.getElementById("3PMnote");
    var colorCode4 = document.getElementById("4PMnote");
    var colorCode5 = document.getElementById("5PMnote");

    colorCode9.setAttribute("class", "past textBoxWidth");
    colorCode10.setAttribute("class", "past textBoxWidth");
    colorCode11.setAttribute("class", "past textBoxWidth");
    colorCode12.setAttribute("class", "past textBoxWidth");
    colorCode1.setAttribute("class", "past textBoxWidth");
    colorCode2.setAttribute("class", "past textBoxWidth");
    colorCode3.setAttribute("class", "past textBoxWidth");
    colorCode4.setAttribute("class", "past textBoxWidth");
    colorCode5.setAttribute("class", "past textBoxWidth");


    if(hour === 9) {
        colorCode9.setAttribute("class", "present textBoxWidth");
        colorCode10.setAttribute("class", "future textBoxWidth");
        colorCode11.setAttribute("class", "future textBoxWidth");
        colorCode12.setAttribute("class", "future textBoxWidth");
        colorCode1.setAttribute("class", "future textBoxWidth");
        colorCode2.setAttribute("class", "future textBoxWidth");
        colorCode3.setAttribute("class", "future textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 10) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "present textBoxWidth");
        colorCode11.setAttribute("class", "future textBoxWidth");
        colorCode12.setAttribute("class", "future textBoxWidth");
        colorCode1.setAttribute("class", "future textBoxWidth");
        colorCode2.setAttribute("class", "future textBoxWidth");
        colorCode3.setAttribute("class", "future textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 11) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "present textBoxWidth");
        colorCode12.setAttribute("class", "future textBoxWidth");
        colorCode1.setAttribute("class", "future textBoxWidth");
        colorCode2.setAttribute("class", "future textBoxWidth");
        colorCode3.setAttribute("class", "future textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 12) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "past textBoxWidth");
        colorCode12.setAttribute("class", "present textBoxWidth");
        colorCode1.setAttribute("class", "future textBoxWidth");
        colorCode2.setAttribute("class", "future textBoxWidth");
        colorCode3.setAttribute("class", "future textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 13) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "past textBoxWidth");
        colorCode12.setAttribute("class", "past textBoxWidth");
        colorCode1.setAttribute("class", "present textBoxWidth");
        colorCode2.setAttribute("class", "future textBoxWidth");
        colorCode3.setAttribute("class", "future textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 14) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "past textBoxWidth");
        colorCode12.setAttribute("class", "past textBoxWidth");
        colorCode1.setAttribute("class", "past textBoxWidth");
        colorCode2.setAttribute("class", "present textBoxWidth");
        colorCode3.setAttribute("class", "future textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 15) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "past textBoxWidth");
        colorCode12.setAttribute("class", "past textBoxWidth");
        colorCode1.setAttribute("class", "past textBoxWidth");
        colorCode2.setAttribute("class", "past textBoxWidth");
        colorCode3.setAttribute("class", "present textBoxWidth");
        colorCode4.setAttribute("class", "future textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 16) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "past textBoxWidth");
        colorCode12.setAttribute("class", "past textBoxWidth");
        colorCode1.setAttribute("class", "past textBoxWidth");
        colorCode2.setAttribute("class", "past textBoxWidth");
        colorCode3.setAttribute("class", "past textBoxWidth");
        colorCode4.setAttribute("class", "present textBoxWidth");
        colorCode5.setAttribute("class", "future textBoxWidth");
    }
    if(hour === 17) {
        colorCode9.setAttribute("class", "past textBoxWidth");
        colorCode10.setAttribute("class", "past textBoxWidth");
        colorCode11.setAttribute("class", "past textBoxWidth");
        colorCode12.setAttribute("class", "past textBoxWidth");
        colorCode1.setAttribute("class", "past textBoxWidth");
        colorCode2.setAttribute("class", "past textBoxWidth");
        colorCode3.setAttribute("class", "past textBoxWidth");
        colorCode4.setAttribute("class", "past textBoxWidth");
        colorCode5.setAttribute("class", "present textBoxWidth");
    }


