// Display the current date and check for previously saved user input upon page loading

var timeDisplayEl = $("#currentDay");
var textInputs = $('.description');
renderText();

// Timer function

setInterval(displayTime, 1000);
function displayTime() {
    var currentTime = moment().format("dddd Do MMM YYYY");
    timeDisplayEl.text(currentTime);
}

// Get text fields by class and compare current time block with text area ID for each time block

const rows = document.getElementsByClassName("description");
var currentHour = parseInt(moment().format('H'));

// Select colour attributes according to current time of day

for (var i=0; i<rows.length; i++){
    var compareHours = rows[i].id;
    var selectColor = rows[i];
    if(compareHours < currentHour){
        setColor.setAttribute('class', 'past col-10 description');
    } else if(compareHours > currentHour){
        setColor.setAttribute('class', 'future col-10 description');
    } else {
        setColor.setAttribute('class', 'present col-10 description');
    }


    // time.each(function(i, element){
    // let elementTime = Number(element.id);

    // if (elementTime === currentHours) {
    //     $(element).children(".description")
    // .addClass("present");
    // } else if (elementTime > currentHours) {
    //     $(element).children(".description").addClass("future");
    //     } else {
    //         $(element).children(".description").addClass("past");
    //     }

    //     let hour = $(element).first().text().trim();
    //     let description = localStorage.getItem(hour);

    //     if(description) {
    //         $(element).children(".description").val(description);
    //     }
    // });

    // $('.saveBtn').on('click', function(){
    //     var hourSaved = parseIn(this.id);
    //     var textToSave = getText(hourSaved);
    //     var saveObject = {
    //         time: hourSaved,
    //         description: textToSave
    //     }
    //     updateLocalMemory(saveObject);
    // });

