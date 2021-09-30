//Current date
let updateDate = function () {
    let currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate)
}
//Current time
let updateTime = function () {
   let currentTime = moment().format('h:mm:ss');
   $("#1").text(currentTime)
}


///Establish variable for current day
var cDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        ampm: "am",
        task: "",
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ampm: "am",
        task: "",
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ampm: "am",
        task: "",
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ampm: "pm",
        task: "",
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        ampm: "pm",
        task: "",
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        ampm: "pm",
        task: "",
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        ampm: "pm",
        task: "",
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        ampm: "pm",
        task: "",
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        ampm: "pm",
        task: "",
    }
]

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
        .attr({"class": "col-6 description p-0"});
    var txtData =$("<textarea>");
    
    hrToDo.append(txtData);
    txtData.attr("id", cHour.id);
    if (cHour.time < moment().format("HH")) {
        txtData.attr({
            "class" : "past",
        })
    } else if (cHour.time === moment().format("HH")) {
        txtData.attr({
            "class": "present"
        })
    } else if (cHour.time > moment().format("HH")) {
        txtData.attr({
        "class": "future"
        })
    }
    hrRow.append(hrDisp, hrToDo);
})








setInterval(updateTime, 1000);
updateDate();

