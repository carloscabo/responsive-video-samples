$(document).ready(function() {
  // La magia aquí
  console.log('eo');

  // ///////////////////////////////////////////////////////////
  // Sample A
  // ///////////////////////////////////////////////////////////

  // Check if HTML5 video is supported nativelly
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
  var myPlayer = videojs('video-js').ready(function(){
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
  // ///////////////////////////////////////////////////////////

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
  // Once loadad it will call the onYouTubePlayerAPIReady() function.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // ///////////////////////////////////////////////////////////
  // Smaple D. Full container BG with Bideo.js
  // ///////////////////////////////////////////////////////////
  window.bideo = new Bideo();
  window.bideo.init({
    // Video element
    // videoEl: document.querySelector('#bideo-bg'),
    videoEl: $('#bideo-bg')[0],
    // Container element
    container: document.querySelector('#bideo-container'),
    // Resize
    resize: true,
    autoplay: true,
    muted: true,
    isMobile: window.matchMedia('(max-width: 768px)').matches,

    // Use standard click events instead of this.
    // playButton: document.querySelector('#bideo-play'),
    // pauseButton: document.querySelector('#bideo-pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'img/sample.mp4',
        type: 'video/mp4'
      },
      {
        src: 'sample.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],
    onLoad: function () {
      // What to do once video loads (initial frame)
      // document.querySelector('#video_cover').style.display = 'none';
      // We can use standard JS functionallity
      $vsD = $('#bideo-bg');
      $(document)
        .on('click', '#bideo-play', function(e) {
          e.preventDefault();
          $vsD[0].play();
        })
        .on('click', '#bideo-pause', function(e) {
          e.preventDefault();
          $vsD[0].pause();
        })
        .on('click', '#bideo-mute', function(e) {
          e.preventDefault();
          if ( $vsD[0].muted ) {
            $vsD.prop('muted', false); //unmute
          } else {
            $vsD.prop('muted', true); //mute
          }
        });
    }
  });

});
