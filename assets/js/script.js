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
    section.innerHTML = hourcreate + ":00";
    
    var textarea = document.createElement("textarea");
    $("textarea").addClass("past");

    var button = document.createElement("button");
    button.innerHTML = "&#x23FA";

    container.append(section);
    section.appendChild(textarea);
    section.appendChild(button);
}

// Display Current Time
setInterval( function(){ 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    day.text(time);
}, 1000);
