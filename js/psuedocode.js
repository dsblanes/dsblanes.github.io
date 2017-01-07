// When someone clicks the sign up button link
$('#sign-up').on('click', function(e) {
  // prevent the page from reloading
  e.preventDefault();
  // use the href of the link to identify what section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset (how many pixels down the page the element is)
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's scrollTop property to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});