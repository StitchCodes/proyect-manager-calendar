// Get OR Create Elements
var container = $(".container");
var day = $("#currentDay");

// Declare Variables

// Create Time and list for time
var hours24 = []

for (i = 9; i < 17; i++) {
    var hourcreate = [i];
    hours24.push(hourcreate++);

    var section = document.createElement("section");
    $("section").addClass("hour row");
    section.innerHTML = "<p>" + hourcreate + ":00 </p>";
    
    var textarea = document.createElement("textarea");
    $("textarea").attr("data-box", hourcreate);
    $("textarea").addClass("flex-fill past");

    var button = document.createElement("button");
    $("button").attr("data-save", hourcreate)
    button.innerHTML = "&#x23FA";

    container.append(section);
    section.appendChild(textarea);
    section.appendChild(button);
    button.addEventListener("click", storeTask);
}

// STORE TASK FUNCTION
function storeTask (event) {
    var saveBtnClick = event.target;
    console.log("You clicked: ",saveBtnClick);

    var test = saveBtnClick
    console.log(test);
    // IF EVENT CLICK SAVE EVENT BOX DATA
    // $(this).find(':selected').data('box');

    localStorage.getItem("task", "text from box");
}

// Display Current Time
setInterval( function(){ 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    day.text(time);
}, 1000);
