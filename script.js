$(document).ready(function () {
  //

  $(".saveBtn").click(function () {
    var innerText = $(this).siblings(".description").val();
    console.log(innerText);
    var timeBlock = $(this).parent().data("time");
    console.log(timeBlock);
    localStorage.setItem(timeBlock, innerText);
  });

  var currenthour;
  var j;
  var daylabelvalue = moment().format("dddd, MMMM Do YYYY");

  $("#currentDay").text(daylabelvalue);
  //
  for (let i = 9; i <= 17; i++) {
    //   create a new div for the timeblock
    //
    // add text box iwth .description class, <textarea> tag
    //
    // add .saveBtn
    var newblock = $("<div>");
    j = moment().hour(i);
    j = moment(j).format("h A");
    newblock.append(j + " </br>");
    // assign a val attr to the div consisting of the index number
    newblock.attr({ "data-time": i, class: "time-block hour" });
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

  $("[data-time=9] .description").val(localStorage.getItem("9"));
  $("[data-time=10] .description").val(localStorage.getItem("10"));
  $("[data-time=11] .description").val(localStorage.getItem("11"));
  $("[data-time=12] .description").val(localStorage.getItem("12"));
  $("[data-time=13] .description").val(localStorage.getItem("13"));
  $("[data-time=14] .description").val(localStorage.getItem("14"));
  $("[data-time=15] .description").val(localStorage.getItem("15"));
  $("[data-time=16] .description").val(localStorage.getItem("16"));
  $("[data-time=17] .description").val(localStorage.getItem("17"));
});
