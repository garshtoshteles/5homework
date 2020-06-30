$(document).ready(function () {
  //
  //
  //   need to get the current time
  console.log("moment().format() : " + moment().format("kk:mm:ss"));
  var currenthour;
  console.log(currenthour);
  //
  for (let i = 9; i <= 17; i++) {
    //   create a new div for the timeblock
    var newblock = $("<div>");
    newblock.append(i + " </br>");
    // assign a val attr to the div consisting of the index number
    newblock.attr({ "data-time": i, class: "time-block" });
    // does making the div color responsive go here?
    $(".container").append(newblock);
    //
  }
  setInterval(function () {
    currenthour = parseInt(moment().format("kk")); // this needs to run in the interval
    for (let i = 9; i <= 17; i++) {
      // this is the running check
      if (i < currenthour) {
        // adding class to make it grey
        $("[data-time=" + i + "]").attr("class", "past");
      } else if (i == currenthour) {
        // add a class to these to make it red
        $("[data-time=" + i + "]").attr("class", "present");
      } else {
        // add a class to make these green
        $("[data-time=" + i + "]").attr("class", "future");
      }
    }
  }, 1000);
});
