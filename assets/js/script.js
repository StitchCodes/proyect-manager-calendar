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
    container.append(section);
}

// Display Current Time
setInterval( function(){ 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    day.text(time);
}, 1000);
