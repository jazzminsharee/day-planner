// layout of rows from 9am-5pm
// input text to change events and lick on the side to save it to local storage
// moment.js says what day it is at the top of the screen and keeps the current time
// events in the planner change color based on past hours, current hour, and future hours

var saveBtnEl = $(".saveBtn");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('LLL'));


// color-coding time blocks

var timeColor = function() {
   if (moment().format('HH') == 9) {
     $("#9").addClass("present")
   }
   if (moment().format('HH') > 9) {
    $("#9").addClass("past")
  }
  if (moment().format('HH') < 9) {
    $("#9").addClass("future")
  }
   if (moment().format('HH') == 10) {
    $("#10").addClass("present")
  }
  if (moment().format('HH') > 10) {
    $("#10").addClass("past")
  }
  if (moment().format('HH') < 10) {
    $("#10").addClass("future")
  }
  if (moment().format('HH') == 11) {
    $("#11").addClass("present")
  }
  if (moment().format('HH') > 11) {
    $("#11").addClass("past")
  }
  if (moment().format('HH') < 11) {
    $("#11").addClass("future")
  }
  if (moment().format('HH') == 12) {
    $("#12").addClass("present")
  }
  if (moment().format('HH') > 12) {
    $("#12").addClass("past")
  }
  if (moment().format('HH') < 12) {
    $("#12").addClass("future")
  }
  if (moment().format('HH') == 13) {
    $("#13").addClass("present")
  }
  if (moment().format('HH') > 13) {
    $("#13").addClass("past")
  }
  if (moment().format('HH') < 13) {
    $("#13").addClass("future")
  }
  if (moment().format('HH') == 14) {
    $("#14").addClass("present")
  }
  if (moment().format('HH') > 14) {
    $("#14").addClass("past")
  }
  if (moment().format('HH') < 14) {
    $("#14").addClass("future")
  }
  if (moment().format('HH') == 15) {
    $("#15").addClass("present")
  }
  if (moment().format('HH') > 15) {
    $("#15").addClass("past")
  }
  if (moment().format('HH') < 15) {
    $("#15").addClass("future")
  }
  if (moment().format('HH') == 16) {
    $("#16").addClass("present")
  }
  if (moment().format('HH') > 16) {
    $("#16").addClass("past")
  }
  if (moment().format('HH') < 16) {
    $("#16").addClass("future")
  }
  if (moment().format('HH') == 17) {
    $("#17").addClass("present")
  }
  if (moment().format('HH') > 17) {
    $("#17").addClass("past")
  }
  if (moment().format('HH') < 17) {
    $("#17").addClass("future")
  }
}

// save button click
var saveActivity = function() {

  var time = $(this).siblings(".hour").text();
  var activity = $(this).siblings(".activity").val();

  console.log(this);

  // THEN the text for that event is saved in local storage
  localStorage.setItem(time, activity);
};

// storage persists upon refreshing the page



timeColor();
saveBtnEl.on("click", saveActivity);