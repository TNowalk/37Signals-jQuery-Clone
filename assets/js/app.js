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

  // Bind hover to links
  $(".productBox").hover(function() {
    // This function will fire on mouseover
    $(".productOverlay." + $(this).attr('data-product')).show();
  }, function() {
    // This function will fire on mouseout
    $(".productOverlay." + $(this).attr('data-product')).hide();
  })
});