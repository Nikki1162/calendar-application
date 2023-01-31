// Declare consts

const submitBtn = $(".saveBtn");
const time = $(".time-block");
const currentHours = moment().hour();

// Display the current date

var timeDisplayEl = $("#currentDay");
var today = moment();
setInterval(displayTime, 1000);
function displayTime() {
    var currentTime = moment().format("dddd Do MMM YYYY");
    timeDisplayEl.text(currentTime);
}

