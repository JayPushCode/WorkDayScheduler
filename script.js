// Code that inserts and runs the clock on the screen.
function displayTime() {
  var time = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  $("#currentDay").text(time);;
}
setInterval(displayTime, 1000);

// Function that changes css of the timeblocks corresponding to current time
function timeChecker() {
  var present = moment().hours()
  var time = $(".time-block");
  time.each(function() {
      var hour = parseInt($(this).attr("id"))
      if (hour === present) {
          $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
      } else if (present > hour) {
          $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
      } else {
          $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
      }
  })
};

// Code that runs the color code and refreshes it every 15 minutes;
timeChecker();
setInterval(timeChecker, 900000);

// Save text into local storage after clicking a save button

$(".saveBtn").on("click", function() {
  var time = $(this).parent().attr("id");
  var task = $(this).siblings("textarea").val().replace(/[""]+/g, "");
  

  localStorage.setItem(time, JSON.stringify(task));
});

// Waits for page to finish loading then loads previous value from localStorage
$(document).ready(function() {

  $("#9 textarea").val(localStorage.getItem("9").replace(/[""]+/g, ""));
  $("#10 textarea").val(localStorage.getItem("10").replace(/[""]+/g, ""));
  $("#11 textarea").val(localStorage.getItem("11").replace(/[""]+/g, ""));
  $("#12 textarea").val(localStorage.getItem("12").replace(/[""]+/g, ""));
  $("#13 textarea").val(localStorage.getItem("13").replace(/[""]+/g, ""));
  $("#14 textarea").val(localStorage.getItem("14").replace(/[""]+/g, ""));
  $("#15 textarea").val(localStorage.getItem("15").replace(/[""]+/g, ""));
  $("#16 textarea").val(localStorage.getItem("16").replace(/[""]+/g, ""));
  $("#17 textarea").val(localStorage.getItem("17")).replace(/[""]+/g, "");
});