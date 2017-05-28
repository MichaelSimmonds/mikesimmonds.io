$(document).ready(function(){
  var title_anim = new TimelineLite();

  var $title= $(".page-title");
  var $tagline = $(".page-title-tag");
  var $training_tagline =$(".page-title-tag-training");
  var $scroll_arrow = $(".scroll_arrow");



  title_anim.staggerFrom($title, 0.8, {
    x: 500,
    opacity: 0
    // scale: 0.5
    // ease: Bounce.easeOut
    // onComplete: changePage(2000)
  }, 0.4)
  .from($tagline, 0.83, {
    x: 500,
    opacity: 0
  }, '-=0.3')
  .from($training_tagline, 0.9, {
    opacity: 0
  }, '+=0.2')
  .from($scroll_arrow, 0.1, {
    opacity: 0
  })
  .to($scroll_arrow, 0.4, {
    y: "20em",
  }, '+=0.5')
  .to($scroll_arrow, 0.2, {
    y: "-20em",
  }, '+=0')
  .to($scroll_arrow, 0.5, {
    rotationY: 180,
    scale: 0.5,
    opacity: 0
  }, '+=0.3')
});

$(document).one('scroll', function(){
  var $about_section = $(".about-section, .icons-section");
  // title_anim.pause();

  var about_anim = TweenLite.from($about_section, 3, {
    opacity: 0.6
  })
})

$(document).ready(function(){
  var quote_anim = new TimelineLite();
  var $quote = $("#the_quote");
  var $quote_by = $("#quote_by");
  var already_fired = false;

  $(window).scroll(function(){
    var top_of_element = $(".quote-section").offset().top;
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    if (bottom_of_screen>top_of_element && already_fired==false){
      quote_anim.from($quote, 1, {
        x: 1000
      },'+=0.1')
      .from($quote_by, 1,{
        x:-1000
      },'-=0.5')

      already_fired = true;
    }
  })
})
