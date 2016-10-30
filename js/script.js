// Recomendation Drawer
$(document).ready(function() {
  $('.drawer').drawer();

  });
// Ingredient Carousel 

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
 
      autoPlay: 6000, //Set AutoPlay to 5 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
});
    $(document).ready(function () {
        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
    });


});


