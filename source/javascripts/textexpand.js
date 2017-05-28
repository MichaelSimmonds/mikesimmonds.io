$(document).ready(function() {
  console.log("AARRSSEE")
  $(".readMore").click(function(){
    var $elem = $(this).parent().parent().find(".examples-content");
    var $btn = $(this).parent().parent().find(".readMore");

        if($elem.hasClass("short"))
        {
            $elem.removeClass("short").addClass("full");
            $btn.html("read less")
            $(this).html("read less")
        }
        else
        {
            $elem.removeClass("full").addClass("short");
            $btn.html("read more")

        }
  })

});
