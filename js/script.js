$(function(){ 
	$("#input-01").rating({
		 emptyStar: '<img src="img/chriscoyier.jpg" width="48" height="48" style="opacity: 0.75;" />',
		 filledStar: '<img src="img/chriscoyier.jpg" width="48" height="48" />',
		 showClear: false
	});


	$("#input-02").rating({
		stars: 1,
		 emptyStar: '<img src="img/1m-empty.png" width="260" height="52" />',
		 filledStar: '<img src="img/1m-filled.png" width="260" height="52" />',
		 showCaption: false,
		 showClear: false
	});

	$("#input-03").rating({
		stars: 1,
		emptyStar: '<img src="img/different-empty.png" width="320" height="48" style="opacity: 0.75;" />',
		filledStar: '<img src="img/different-filled.png" width="320" height="48" />',
		// showClear: false,
		clearCaption: 'Hey, you can rate even this!',
		starCaptions: {
			0.5: '0.5',
			1: '1.0',
			1.5: '1.5',
			2: '2.0',
			2.5: '2.5',
			3: '3.0',
			3.5: '3.5',
			4: '4.0',
			4.5: '4.5',
			5: '5.0'
		}
	});
});