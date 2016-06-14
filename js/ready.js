$(document).ready(function() {
  // La magia aquí
  console.log('eo');

  // Smaple A
  // If HTML5 video is supported nativelly
  if(!!document.createElement('video').canPlayType) {
    var
      $vsA = $('#video-sample-A');
    $(document)
      .on('click', '#video-sample-A-play', function(e) {
        e.preventDefault();
        $vsA[0].play();
      })
      .on('click', '#video-sample-A-pause', function(e) {
        e.preventDefault();
        $vsA[0].pause();
      })
      .on('click', '#video-sample-A-mute', function(e) {
        e.preventDefault();
        if ( $vsA[0].muted ) {
          $vsA.prop('muted', false); //unmute
        } else {
          $vsA.prop('muted', true); //mute
        }
      });
  }


  // Video.js settings
  videojs("video-js").ready(function(){
    myPlayer.muted(true);
  });

  // Autohide vídeo-js controls if fail
  /*setTimeout(function(){
    V('video-js').controlBar.fadeOut(); // or hide()
  }, 2000);*/

  // Ejemplo de poner vídeos de baja resolución en móviles
  /*sources = {
    mp4: '//ws-shop.s3.amazonaws.com/public/files/videos/ItsHEREitsNOW_OK_{{RES}}w.mp4',
    webm: '//ws-shop.s3.amazonaws.com/public/files/videos/ItsHEREitsNOW_OK_{{RES}}w.webm'
    },
    res = ($('body').width() < 769) ? res = 640 : res = 1024,
    $vjs = $('#video-js');
  if (res === 640) {
    $vjs.removeAttr('autoplay').removeAttr('muted');
  }
  $.each(sources, function(key, value) {
    $('<source>').attr('type','video/'+key).attr('src', value.replace('{{RES}}', res)).appendTo($vjs);
  });
  $.getScript('//vjs.zencdn.net/4.12/video.js');*/

});
