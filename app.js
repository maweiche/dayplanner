//Current date
let updateDate = function () {
    let currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
}
//Current time
let updateTime = function () {
   let currentTime = moment().format('h:mm:ss');
   $("#timestamp").text(currentTime);
}


///Establish variable for current day
var cDay = [
    {
        id: "0",
        hour: "9",
        time: "09",
        ampm: "AM",
        task: "",
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ampm: "AM",
        task: "",
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ampm: "AM",
        task: "",
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ampm: "PM",
        task: "",
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        ampm: "PM",
        task: "",
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        ampm: "PM",
        task: "",
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        ampm: "PM",
        task: "",
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        ampm: "PM",
        task: "",
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        ampm: "PM",
        task: "",
    }
]
//save text to localStorage
function saveText() {
    localStorage.setItem("cDay", JSON.stringify(cDay));
    console.log("this text saved :", saveText);
}
//
function displayText() {
    cDay.forEach(function(cHour) {
        $(`#${cHour.id}`).val(cHour.task);
    })
}

//view localStorage data if it exists
function init () {
    var storedCDay = JSON.parse(localStorage.getItem("cDay"));

    if (storedCDay) {
        cDay = storedCDay
    }
    saveText();
    displayText();
}

////For each loop to iterate through every element in cDay array
cDay.forEach(function(cHour) {

    // create timeblocks as rows by creating a form tag and adding a class:row attribute to it 
    var hrRow = $("<form>").attr({
        "class" : "row"
    });
    $(".container").append(hrRow);

    //creates time display
    var hrDisp = $("<div>")
        .text(`${cHour.hour}${cHour.ampm}`)
        .attr({"class": "col-md-2 hour"});


    //creates text area for schedule
    var hrToDo = $("<section>")
        .attr({"class": "col-md-8 description p-0"});
    var txtData =$("<textarea>");
    
    hrToDo.append(txtData);
    txtData.attr("id", cHour.id);
    if (cHour.time < moment().format("HH")) {
        txtData.attr({
            "class" : "row col past",
        })
    } else if (cHour.time === moment().format("HH")) {
        txtData.attr({
            "class": "row col present"
        })
    } else if (cHour.time > moment().format("HH")) {
        txtData.attr({
        "class": "row col future"
        })
    }

    ///creates the save button using an i tag and logo, and a button tag to append the i class to
    var saveButton = $("<i class = 'fa fa-save fa-lg'></i> ")
    var saveToDo = $("<button>")
        .attr({"class": "col-md-2 saveBtn"});

    ///Append everything to page!!!!
    saveToDo.append(saveButton);
    hrRow.append(hrDisp, hrToDo, saveToDo);
    
})

//create click event for save button
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    //establish an index of what is being saved
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    cDay[saveIndex].task = $(this).siblings(".description").children(".future").val()
    console.log(saveIndex);
    saveText();
    displayText();
})
setInterval(updateTime, 1000);
updateDate();
init();