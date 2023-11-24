// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// function for username  digit requirement

var form = document.getElementById('form');

// alert for form completion
function alertFunction() {
  if (form.checkValidity()) {
    alert("Thank you for consideration in learning more about the ISUD.");
  }
}
