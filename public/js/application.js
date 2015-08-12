$(document).ready(function() {
  // La magia aquí
  console.log('domready');

  // Video.js settings
  videojs("video-js").ready(function(){
    myPlayer.muted(true);
  });

  // Autohide vídeo-js controls if fail
  /*setTimeout(function(){
    V('video-js').controlBar.fadeOut(); // or hide()
  }, 2000);*/

});
