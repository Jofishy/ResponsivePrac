var art = document.getElementsByTagName('article');

for ( i in art ) {
	
	att = document.createAttribute("title");       // Create a "class" attribute
	att.value = "click me (~ '.' )~"; 
	art[i].setAttributeNode(att); 
}