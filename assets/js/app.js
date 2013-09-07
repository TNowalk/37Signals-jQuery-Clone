$(document).ready(function (){
  // This section of code will be exectued once the DOM
  // is ready to be manipulated.  
  
  // Store days in an array
  var daysOfWeek = 
  [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  // Get the current date
  var today = new Date();

  // Get the current day of the week
  var dayOfWeek = today.getDay();

  // Set the text of the date message
  $('#dateMessage').text("Happy " + daysOfWeek[dayOfWeek] + ".");
});