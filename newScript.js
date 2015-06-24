var entry = [],
	right = ["articleRight", "articleMiddle", "articleLeft"],
    combo = [],
    notes = [],
    winnerText = $(".notify");

winnerText.hide();

$("article").click(function(e){
	var chk = $(this).hasClass("sunk"),
	    ths = $(this),
	    cls = ths.attr("class");
	if ( !chk ) {
		ths.addClass("sunk");
	}
	combo.plus(cls);
});

combo.plus = function(t) {
	winner = false;
	entry.push(t);
	if (entry.length > 2) {
		combo.check();
		//update notepad
		$(".notepad").append("<p>" + entry + "</p>");
		if ($(".notepad p").length > 5){
			notes.rem();
		}
		//clear for new game
		$("article").removeClass("sunk");
		entry.length = 0;
	}
}

combo.check = function() {
	//  validate the combo or reset the array 
	for (i=0; i<3; i++){
		if (entry[i] != right[i]){
			winnerText.hide();
			$(".notepad").show();
			return;
		}
	}
	winner = true;
	winnerText.show();
	$(".notepad").hide();
}

notes.rem = function(){
	$(".notepad p:nth-child(2)").remove();
}
