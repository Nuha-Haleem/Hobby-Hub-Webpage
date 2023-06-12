$(document).ready(function() {
    $('form').submit(function(event) {
      var name = $('#name').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      var message = $('#message').val();
      var isValid = true;
      
      if (name === '') {
        alert
  