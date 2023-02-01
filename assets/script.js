// Display the current date and check for previously saved user input upon page loading

var timeDisplayEl = $("#currentDay");
var textInput = $('.description');
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
}

// Save button click function to save to local storage

$('.saveBtn').on('click', function(){
    var savedHour = parseIn(this.id);
    var savedText = getText(savedHour);
    var saveObject = {
        time: savedHour,
        description: savedText
    }
    updateLocalMemory(saveObject);
});

// Select input for the parallel hour save button and return that input

function getText(selectedHour){
    var hour = selectedHour;
    for(var i=0; i<textInput.length; i++){
        var compareTime = parseInt(textInputs[i].id);
        if(compareTime === hour){
            return textInput[i].value;
        }
    }

// Update to local storage

function updateLocalMemory(saveObject){
    localStorage.setItem(saveObject.time, saveObject.description);
    renderText();
}

// Loop over cells
// Get value for current cell
// Select text area which corresponds with current cell
// Display text

function renderText(){
    let cells = Object.keys(localStorage);

    for(var i=0; i<cells.length;i++) {
        var textContent = window.localStorage.getItem(cells[i]);
        var textElement = findText(parseInt(cells[i]));
        textElement.value = textContent;
    }
}

function findText(key){ //take the key and find the textarea with the matching id
    var textEls = $('.description');
    for(var i=0; i<textEls.length;i++){
        id = parseInt(textEls[i].id);
        if(id === key )
        return textEls[i];
    }
    
}

$("#reset").on("click", function(){ //clear local storage and text inputs
    localStorage.clear();
    var clearText = $('.description');
    for(var i=0; i<clearText.length; i++){
        clearText[i].value="";
    }
    renderText();
})


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

