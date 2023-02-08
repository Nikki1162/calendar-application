const saveButton = $(".saveBtn");
const time = $(".time-block");
const currentHour = moment().hour();

// Use Moment.JS to set the current date (and maybe time) at the top of the calendar page

function timer() { 
  let currentDay = moment().format('dddd DD MMM, YYYY, hh:mm');
  $("#currentDay").text(currentDay);
}

setInterval(timer, 1000);

// Use if else statement to determine which colour is set according to which current hour is 'true' - assign classes to change to corresponding colours

time.each(function (i, element){
  let elementTime = Number(element.id);

  if (elementTime === currentHour) {
    $(element).children(".description").addClass("present");
  } 
  else if (elementTime > currentHour) {
    $(element).children(".description").addClass("future");
  } 
  else {
    $(element).children(".description").addClass("past");
  }

  let hour = $(element).first().text().trim();
  let description = localStorage.getItem(hour);

  if(description) {
    $(element).children(".description").val(description);
  }
});

// Save button to transfer user input to local storage - able to retrieve both the description and the hour timeblock it was inputted into

saveButton.on("click", function(event) {
  let description = $(event.currentTarget)
  .parent()
  .children(".description")
  .val();

  let hour = $(event.currentTarget).parent().first().text().trim();
  localStorage.setItem(hour, description);
});

// Implement a 'clear schedule' button to allow the user to empty their entire schedule

$(".clearSchedule").on("click", function () {
  let deleteConfirm = confirm("Do you want to clear today's schedule?")

  // If statement to determine whether to clear schedule, or keep events on schedule

  // If user confirms, page reloads with empty schedule

  if (deleteConfirm === true) {
      localStorage.clear()
      location.reload();
  } 

  // If user clicks cancel, page does not reload and user is alerted that no events were cleared from their schedule
  
  else {
      alert("Schedule not cleared")
  }
})