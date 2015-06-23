var entry = [],
    combo = [];

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
});

combo.plus = function(t) {
	entry.push(t);
	if (entry.length == 3) {
		combo.check();
	}
}
combo.check = function() {
	//  validate the combo or reset the array 
}