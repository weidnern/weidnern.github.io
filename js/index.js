$("#container-nz").mousemove(function(e) {
  parallaxIt(e, ".nzme", -100);
  parallaxIt(e, ".nzname", -50);
  parallaxIt(e, ".nzbg", -30);
  
});

function parallaxIt(e, target, movement) {
  var $this = $("#container-nz");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}