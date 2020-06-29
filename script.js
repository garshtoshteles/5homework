$(document).ready(function () {
  //
  //
  //   need to get the current time
  console.log("moment().format() : " + moment().format("kk:mm:ss"));
  var currenthour = parseInt(moment().format("kk"));
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
});
