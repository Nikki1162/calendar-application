var submitButton = $(".saveButton");
var time = $(".time-block");
var currentHours = moment().hour();

// Display date and time at the top of the page

function timer() {
    let currentDay = moment().format('dddd Do MMM YYYY, HH:mm:ss');
    $("#currentDay").text(currentDay); 
  }
  setInterval(timer, 1000);

// Function to loop over timeblocks and display correct colour depending on the current hour
time.each(function (i, element){
    let elementTime = Number(element.id);
  
    if (elementTime === currentHours) {
      $(element).children(".description").addClass("present");
    } else if (elementTime > currentHours) {
      $(element).children(".description").addClass("future");
    } else {
      $(element).children(".description").addClass("past");
    }

// Function to save user input in text field to local storage

$(".saveButton").on("click", function () {
    let itemTime = $(this).siblings(".hour").text()
    let itemDescription = $(this).siblings(".description").val()
    localStorage.setItem(itemTime, itemDescription)
})

// Function to retrieve the value inputted by the user from local storage and display in the timeblock it was entered into

function retrieveEvent() {
    $(".hour").each(function () {
      let hourBlockLab

    })

// Call function to display corresponding colours with timeblocks

timeBlockState();

// Calling the retrieveEvent function to display the saved events

retrieveEvent();
})