//Current date
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Current time
let updateTime = function () {
   let currentTime = moment().format('h:mm:ss');
   $("#1").text(currentTime)
}
setInterval(updateTime, 1000);



