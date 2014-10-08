// — FUNCIONES LOCALES A ESTE SITE
$(document).ready(function() {
	// la magia aquí
  console.log('eo');

  function v_center_videos() {
    $('video.js-autocenter').each(function(index, el) {
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
  v_center_videos();

  $(window).resize(function() {
    v_center_videos();
  });

});
