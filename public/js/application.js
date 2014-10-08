$(document).ready(function() {

  // Centers the video element to its parent container
  function video_bg_center_v() {
    $('video.js-video-bg-autocenter').each(function(index, el) {
      var
        pw = $(el).parent().outerWidth(),
        ph = $(el).parent().outerHeight(),
        ew = $(el).outerWidth(),
        eh = $(el).outerHeight();
      $(el).css({
        'margin-top': ((eh/2)-(ph/2))*(-1),
        'margin-left': ((ew/2)-(pw/2))*(-1)
      });
    });
  }
  video_bg_center_v();

  $(window).resize(function() {
    video_bg_center_v();
  });

});
