$(document).ready(function() {
		
// Tabs JS
	$(".tab-content__item").not(":first").hide();

	$(".features .tabs__item").click(function() {
		$(".features .tabs__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-content__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active"); 


// Headhesive
	var options = {
	offset: 300
	}
	var header = new Headhesive('.navbar');


// Nav smooth transition
  $(".navbar-nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

}); //--> END READY


