// ..

// $(document).ready(function() {
// var movementStrength = 25;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $(".wide").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = 1050 + (height * pageY * -1 - 50);
//           //var newvalueX = 0;
//           //var newvalueY = 1200;
//           $('.wide').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });

// $(document).ready(function() {
// var movementStrength = 45;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $(".wide2").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = 1050 + (height * pageY * -1 - 50);
//           //var newvalueX = 0;
//           //var newvalueY = 1200;
//           $('.wide2').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function() {
	if(true) {
		var height = $(window).height();
		var newheight = height / 15;
		$(".wide").css("background-position", "-45px " + newheight + "%");
	}
});

$(document).ready(function() {
	if(true) {
		var height = $(window).height();
		var newheight = height / 15;
		$(".wide2").css("background-position", "-90px " + newheight + "%");
	}
});

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
    x2 = 0,
    y2 = 0,
    friction2 = 1 / 20;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  x2 += (lFollowX - x2) * friction2;
  y2 += (lFollowY - y2) * friction2;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate2 = 'translate(' + x2 + 'px, ' + y2 + 'px) scale(1.1)';

  $('.wide').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.wide2').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

// $(document).ready(function() {
// var movementStrength = 25;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $(".wide").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = 1050 + (height * pageY * -1 - 50);
//           //var newvalueX = 0;
//           //var newvalueY = 1200;
//           $('.wide').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });

// $(document).ready(function() {
// var movementStrength = 45;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $(".wide2").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = 1050 + (height * pageY * -1 - 50);
//           //var newvalueX = 0;
//           //var newvalueY = 1200;
//           $('.wide2').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });