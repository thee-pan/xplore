
$('a[href^="#"]').click(function () {
  $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 700);

  return false;
});


$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});