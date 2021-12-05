// Get OR Create Elements
var container = $(".container");
var day = $("#currentDay");
var ul = document.createElement("ul");
container.append(ul);

// Declare Variables

// Create Time and list for time
var hours24 = []

for (i = 0; i < 24; i++) {
    var hourcreate = [i];
    hours24.push(hourcreate++);
    var li = document.createElement("li");
    li.innerHTML = hourcreate + ":00";
    ul.appendChild(li);
}

// Display Current Time
setInterval( function(){ 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    day.text(time);
}, 1000);
