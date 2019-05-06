function moveMe() {
	$('#me').css({
		//'background-position': '100px 60%' 
		'transform': 'translate( 30px , 30px)'
	});
}

$('#me').mousemove(function(event) {
	//var x = event.pageX - $('#me').offset().left;
	//var y = evt.pageY - $('#me').offset().top;	
	//console.log(x);
	
	moveMe();
});