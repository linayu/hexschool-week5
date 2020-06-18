$(document).ready(function() {
  var check_url = location.pathname;
  console.log(check_url);
  if (check_url) {
    $(".nav .nav-link").find(".active").removeClass("active");
    $('a[href="' + location.pathname + '"]').addClass('active'); 
  }

});