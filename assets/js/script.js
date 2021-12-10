// Get OR Create GLOBAL Elements
var container = $(".container");
var day = $("#currentDay");
var hour;


// FUNCTION TO CREATE ELEMENTS
function createEl (hour) {
    // CREATE ELEMENTS
    var section = document.createElement("section");
    var textarea = document.createElement("textarea");
    var button = document.createElement("button");
    var p = document.createElement("p")
    
    // ADD/CREATE TEXT
    p.innerHTML = hour;
    button.innerHTML = '&#x23FA'; 
    
    // CALL APPEND FUNCTION
    container.append(section);
    section.append(p);
    section.append(textarea);
    section.append(button);

    // ADD CLASS & ATTRIBUTES
    $("section").addClass("row past");
    $("p").addClass("hour");
    $("textarea").addClass("flex-fill past");
    $("textarea").attr("data-box", hour);
    $("button").addClass("saveBtn");
    $("button").attr("data-save", hour);

};


// FOR LOOPS
// CREATE ENOUGH ELEMENTS

for (let i = 10; i < 18; i++) {
    var momentHour = moment().set('hour', i).format("HH:00");
    // var roundHour = momentHour.add(30, "minutes").startOf("hour");
    hour = momentHour;
    // CALL TO CREATE ELEMENTS 
    createEl(hour);
}


// STORE TASK FUNCTION
function storeTask () {
    var target = $(this).find(":selected").data("save");
    console.log("You clicked: ", this);
    console.log("target is: ", target);

    // IF EVENT CLICK SAVE EVENT BOX DATA
    // $(this).find(':selected').data('box');

    // localStorage.getItem("task", "text from box");
};

    
// EVENT LISTENER
$(".saveBtn").click(storeTask);

// DISPLAY LOCAL TIME
setInterval( function() { 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    day.addClass("time-block hour");
    day.text(time);
}, 1000);