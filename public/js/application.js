$(document).ready(function() {

  // Function that centers an element to its parent
  // setting margin-top, and margin-left
  // Usage:
  // $('selector').center_on_parent();
  $.fn.center_on_parent = function() {
    return this.each(function() {
      new cop(this);
    });
    function cop(el){
      var
        $el = $(el),
        pw =  $el.parent().outerWidth(),
        ph =  $el.parent().outerHeight(),
        vw =  $el.outerWidth(),
        vh =  $el.outerHeight();
      $el.css({
        'margin-top': ((vh/2)-(ph/2))*(-1),
        'margin-left': ((vw/2)-(pw/2))*(-1)
      });
    }
  };

  // Binds the loadeddata event from the video element to Jquery
  // The centers the video and shows it.
  $('video.js-video-bg-autocenter').bind('loadeddata', function(e) {
    $(this).center_on_parent().show();
  });

  // We "recenter" the video when window its resized
  $(window).resize(function() {
    $('video.js-video-bg-autocenter').center_on_parent();
  });

});
