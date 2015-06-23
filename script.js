var art = document.getElementsByTagName('article');

for ( i in art ) {
	
	att = document.createAttribute("title");       // Create a "class" attribute
	att.value = "click me (~ '.' )~"; 
	art[i].setAttributeNode(att); 
}

function liftArticle(artNum){
	att = document.createAttribute("class");
	att.value = "clicked";
	art[artNum].setAttributeNode(att);
}

window.onload = function(){
	for (i in art){
		art[i].addEventListener('click', function(){
			liftArticle(i);
		});
	}
}
