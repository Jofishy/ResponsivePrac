var entry = [],
	right = ["articleRight", "articleMiddle", "articleLeft"],
    combo = [],
    winnerText = $('.notify');

winnerText.hide();

$('article').click(function(e){
	var chk = $(this).hasClass("sunk"),
	    ths = $(this),
	    cls = ths.attr("class");
	if ( !chk ) {
		ths.addClass("sunk");
	} else {
		ths.removeClass("sunk");
	}
	combo.plus(cls);
	console.log(entry);
	console.log("winner: \r" + winner);
});

combo.plus = function(t) {
	winner = false;
	entry.push(t);
	if (entry.length > 2) {
		combo.check();
		entry.length = 0;
	}
}
combo.check = function() {
	//  validate the combo or reset the array 
	for (i=0; i<3; i++){
		if (entry[i] != right[i]){
			winnerText.hide();
			return;
		}
	}
	winner = true;
	winnerText.show();
}
