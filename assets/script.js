
$(function () {
  // Defining our variables
  var currentDayEl = $('#currentDay');
  var timeBlocksEl = $('.time-block');
  var saveEl = $('.saveBtn');
  var currentTime = dayjs().hour();
  var text9 = $("#hour-9 .description");
  var text10 = $("#hour-10 .description");
  var text11 = $("#hour-11 .description");
  var text12 = $("#hour-12 .description");
  var text13 = $("#hour-13 .description");
  var text14 = $("#hour-14 .description");
  var text15 = $("#hour-15 .description");
  var text16 = $("#hour-16 .description");
  var text17 = $("#hour-17 .description");

  // This is providing our current date and time
  currentDayEl.text(dayjs().format('dddd, MMMM DD [at] hh:mm a'));

  // This sections deals with adding/remove the "past", "present", and "future" classes on each time-block div
  timeBlocksEl.each(function() {
    var hourId = $(this)[0].id.split('-')[1];

    if (hourId < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } 
    else if (hourId == currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }})

  // This section saves the input in the text box onto the local storage
  saveEl.each(function () {
    $(this).click(function () {
      var timeId = $(this).parent()[0].id.split('-')[1];
      var text = $(this).siblings('.description')[0].value;
      localStorage.setItem(timeId, text)
    })
  });
  // This section will then display anything that is store in the local store under that key
  text9.val(localStorage.getItem(9));
  text10.val(localStorage.getItem(10));
  text11.val(localStorage.getItem(11));
  text12.val(localStorage.getItem(12));
  text13.val(localStorage.getItem(13));
  text14.val(localStorage.getItem(14));
  text15.val(localStorage.getItem(15));
  text16.val(localStorage.getItem(16));
  text17.val(localStorage.getItem(17));
});
