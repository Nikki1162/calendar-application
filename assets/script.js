// Declare consts

const submitBtn = $(".saveBtn");
const time = $(".time-block");
const currentHours = moment().hour();

// Display the current date

var timeDisplayEl = $("#currentDay");
var today = moment();

// Timer function

setInterval(displayTime, 1000);
function displayTime() {
    var currentTime = moment().format("dddd Do MMM YYYY");
    timeDisplayEl.text(currentTime);
}



time.each(function(i, element){
let elementTime = Number(element.id);

if (elementTime === currentHours) {
    $(element).children(".description")
.addClass("present");
} else if (elementTime > currentHours) {
    $(element).children(".description").addClass("future");
    } else {
        $(element).children(".description").addClass("past");
    }

    let hour = $(element).first().text().trim();
    let description = localStorage.getItem(hour);

    if(description) {
        $(element).children(".description").val(description);
    }
});