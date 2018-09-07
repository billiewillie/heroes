// year
var currentTime = new Date();
var year = currentTime.getFullYear();
$('.year').html(year);


// scroll
$('a.scroll').on('click',function(e){
  e.preventDefault();
  var $this = $(this);
  var attr = $this.attr('href');
  $("html, body").animate({
    scrollTop: $(attr).offset().top
  }, 1000);
});


// video
var video = $('video')[0];
var cover = $('.video__cover');
var play = $('.play');
play.on('click', function(){
	video.play();
	play.addClass('hide');
	cover.addClass('hide');
});

video.addEventListener('ended',function(){
	play.removeClass('hide');
	cover.removeClass('hide');
});

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    mobile: false, // default
})
wow.init();