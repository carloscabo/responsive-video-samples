$(document).ready(function() {
  // La magia aquí
  console.log('eo');

  // ///////////////////////////////////////////////////////////
  // Sample A
  // If HTML5 video is supported nativelly
  if(!!document.createElement('video').canPlayType) {
    var
      $vsA = $('#video-sample-A');
    // Basic video functionallity
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

  // ///////////////////////////////////////////////////////////
  // Sample B
  // Video.js settings
  var myPlayer = videojs("video-js").ready(function(){
    myPlayer.muted(true);
  });
  $(document)
    .on('click', '#video-js-play', function(e) {
      e.preventDefault();
      myPlayer.play();
    })
    .on('click', '#video-js-pause', function(e) {
      e.preventDefault();
      myPlayer.pause();
    })
    .on('click', '#video-js-mute', function(e) {
      e.preventDefault();
      if ( myPlayer.muted() ) {
        myPlayer.muted(false); //unmute
      } else {
        myPlayer.muted(true); //mute
      }
    });

  // ///////////////////////////////////////////////////////////
  // Smaple C. Youtube IFrame API

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var yt_player;
  window.onYouTubePlayerAPIReady = function() {
    yt_player = new YT.Player('video-yt-player', {
      // width: '640',
      // height: '390',
      autoplay: 1,
      videoId: 'YE7VzlLtp-4'
    });

    $(document)
      .on('click', '#video-yt-play', function(e) {
        e.preventDefault();
        yt_player.playVideo();
      })
      .on('click', '#video-yt-pause', function(e) {
        e.preventDefault();
        yt_player.pauseVideo();
      })
      .on('click', '#video-yt-mute', function(e) {
        e.preventDefault();
        if ( yt_player.isMuted() ) {
          yt_player.unMute(); // unmute
        } else {
          yt_player.mute(); // mute
        }
      });
  };

  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
  */

});
