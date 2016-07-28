$(function() {

  function toggleSidebar() {
    $(".menubutton").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".menubutton").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

  var height = document.getElementById('home').clientHeight;
  var audio = document.getElementById('audio');

  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();

    if (height <= scrollTop) {
      audio.pause();
    } else {
      audio.play();
    }
  });


});