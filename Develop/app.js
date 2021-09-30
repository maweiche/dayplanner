///Establish variable for current day
var cDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        ampm: "am",
        task: "",
    },
        id: "1",
        hour: "10",
        time: "10",
        ampm: "am",
        task: "",
    },
        id: "2",
        hour: "11",
        time: "11",
        ampm: "am",
        task: "",
    },
        id: "3",
        hour: "12",
        time: "12",
        ampm: "pm",
        task: "",
    },
        id: "4",
        hour: "01",
        time: "13",
        ampm: "pm",
        task: "",
    },
        id: "5",
        hour: "02",
        time: "14",
        ampm: "pm",
        task: "",
    },
        id: "6",
        hour: "03",
        time: "15",
        ampm: "pm",
        task: "",
    },
        id: "7",
        hour: "04",
        time: "16",
        ampm: "pm",
        task: "",
    },
        id: "8",
        hour: "05",
        time: "17",
        ampm: "pm",
        task: "",
    }
]








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



setInterval(updateTime, 1000);
updateDate();


