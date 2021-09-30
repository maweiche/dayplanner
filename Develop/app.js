//Current hour

let currentHour = moment().format("HH");


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
    var taskInput = $(".textarea");

    // create timeblocks as rows
    var hrRow = $("<section>").attr({
        "class" : "row"
    });
    $(".container").append(hrRow);

    //creates time display


    //creates text area for schedule
    var hrDisp = $("<p>")
        .attr({"class": "col-6 description p-0"});
    var txtData =$("<textarea>");
    
    hrDisp.append(hrRow);
    txtData.attr("id", cDay.id);
    if (cHour.time < currentHour) {
        txtData.attr({
            "class" : "past",
        })
    } else if (cHour.time === currentHour) {
        txtData.attr({
            "class": "present"
        })
    } else if (cHour.time > currentHour) {
        txtData.attr({
        "class": "future"
        })
    }
})








setInterval(updateTime, 1000);
updateDate();


