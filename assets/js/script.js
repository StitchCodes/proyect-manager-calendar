// Get OR Create GLOBAL Elements
var container = $(".container");
var day = $("#currentDay");
var dataval = 0;

// FUNCTION TO CREATE ELEMENTS
function createEl (i) {
    // CREATE ELEMENTS
    var section = document.createElement("section");
    var textarea = document.createElement("textarea");
    var button = document.createElement("button");
    var p = document.createElement("p")

    // ADD/CREATE TEXT
    p.innerHTML = i + ":00";
    button.innerHTML = '&#x23FA'; 

    // CALL APPEND FUNCTION
    container.append(section);
    section.append(p);
    section.append(textarea);
    section.append(button);

     // ADD CLASS
    $("section").addClass("row past");
    $("p").addClass("hour");
    $("textarea").addClass("flex-fill past");
    $("button").addClass("saveBtn");
    // ADD ATTRIBUTES
    $("textarea").attr("data-box", dataval);
    $("button").data("save", 1);
};


// FOR LOOPS
// CREATE ENOUGH ELEMENTS
for (i=10; i < 18; i++) {
    // CALL CREATE ELEMENTS FUNCTION
    createEl(i);
};
// CREATE DATA VALUES
for (let i = 0; i < 9; i++) {
    dataval = [i];
    console.log(dataval);  
};

// STORE TASK FUNCTION
function storeTask (event) {
    var target = event.target;
    console.log("You clicked: ", target);

    // IF EVENT CLICK SAVE EVENT BOX DATA
    // $(this).find(':selected').data('box');

    // localStorage.getItem("task", "text from box");
};

// DISPLAY LOCAL TIME
setInterval( function() { 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    day.addClass("time-block hour");
    day.text(time);
}, 1000);