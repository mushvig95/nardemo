// slide partners

$(document).ready(function(){
    $('.slider__box').slick({
      speed: 300,
      infinite: true,
    slidesToShow: 5,
    draggable: true,
    swipeToSlide: true,
    slidesToScroll: 1,
   autoplay: true,
    autoplaySpeed: 7000,
    arrows: false
    
    });
});
  

//slide slogan
$(document).ready(function(){
  $('.sloganslide__box').slick({
    draggable: true,
    swipeToSlide: true,
  });
  $('.slick-next').append('<span></span>');
  $('.slick-prev').append('<span></span>');
});

// prevent default for navigation
$('.navigation__list-link').click(function(event) {
  event.preventDefault();
    $('.navigation__list-link').css('textDecoration','none');
  $('.navigation__list-link').css('color','#000');
});


/* navigation controls */
$('.navigation__list-link1').click(function(e) {
  $('.submenu1').toggle();
  e.stopPropagation();
  $('.submenu').not('.submenu1').hide();
});


$('.navigation__list-link2').click(function(e) {
  $('.submenu2').toggle();
  e.stopPropagation();
  $('.submenu').not('.submenu2').hide();
});


$('.navigation__list-link3').click(function(e) {
  $('.submenu3').toggle();
  e.stopPropagation();
  $('.submenu').not('.submenu3').hide();
});


$('.navigation__list-link4').click(function(e) {
  $('.submenu4').toggle();
  e.stopPropagation();
  $('.submenu').not('.submenu4').hide();
});


$('.navigation__list-link5').click(function(e) {
  $('.submenu5').toggle();
  e.stopPropagation();
  $('.submenu').not('.submenu5').hide();
});


$('.navigation__list-link6').click(function(e) {
  $('.submenu6').toggle();
  e.stopPropagation();
  $('.submenu').not('.submenu6').hide();
});

$(document).click(function(event) {
  if ( !$(event.target).hasClass('.submenu')) {
        $(".submenu").hide();
  }
});
  
/* navigation controls */


/* popup trigger */
$('.membership-btn').click(function(){
  $('.popup').css({
                    'display':'block',
                    'backgroundColor':'rgba(0,0,0,.4)'
  });
  $('.wrapper').css('filter','blur(10px)');
});

$('.close-btn').click(function(event){
  $('.popup').css('display','none');
  $('.wrapper').css('filter','blur(0px)');

});

//focus of input-phone
$('.input-phone').focus(function(){
  $('.other').css('borderColor','#E30334');
});
$('.input-phone').focusout(function(){
  $('.other').css('borderColor','#D8D8D8');
});
//focus of input-phone
var siteopen;

$('.opensitemap').click(function(){
  $('.sitemap').slideToggle(500);
  $('.navigation__list-item').toggle();
  $( ".opensitemap" ).toggleClass('fa-times');
})