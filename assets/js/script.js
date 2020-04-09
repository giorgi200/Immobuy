$(document).ready(function() {
    $("#other").click(function() {
         $('html, body').animate({
             scrollTop: $(".steps").offset().top
         }, 500);
     });
});