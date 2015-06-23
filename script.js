var art = document.getElementsByTagName('article');

for ( var i = 0 ; i < art.length ; i++ ) {
	
	att = document.createAttribute("title");       // Create a "class" attribute
	att.value = "click me (~ '.' )~"; 
	art[i].setAttributeNode(att); 
}

function liftArticle(artNum){
	// att = document.createAttribute("class");
	// att.value = "clicked";
	console.log( 'artNum = \n' + artNum); // debug time
	art[artNum].getAttributeNode("class").value += "clicked";
}

window.onload = function(){
	for (var i = 0 ; i < art.length ; i++ ){
		art[i].addEventListener('click', function(i){
			console.log('i = \r' + i); //debug value of i
			liftArticle(i);
		});

