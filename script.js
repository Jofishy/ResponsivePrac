var art = document.getElementsByTagName('article');

for ( i in art ) {
	
	att = document.createAttribute("title");       // Create a "class" attribute
	att.value = "click me (~ '.' )~"; 
	art[i].setAttributeNode(att); 
}

function liftArticle(artName){
	article = document.getElementById(artName);
	att = document.createAttribute("class");
	att.value = "clicked";
	article.setAttributeNode(att);

	if(artName == "articleLeft"){
		article = document.getElementById("articleRight");
		att = document.createAttribute("class");
		att.value = "unclicked";
		article.setAttributeNode(att);
		article = document.getElementById("articleMiddle");
		att = document.createAttribute("class");
		att.value = "unclicked";
		article.setAttributeNode(att);
	}
	else if(artName == "articleMiddle"){
		article = document.getElementById("articleRight");
		att = document.createAttribute("class");
		att.value = "unclicked";
		article.setAttributeNode(att);
		article = document.getElementById("articleLeft");
		att = document.createAttribute("class");
		att.value = "unclicked";
		article.setAttributeNode(att);
	}
	else {
		article = document.getElementById("articleMiddle");
		att = document.createAttribute("class");
		att.value = "unclicked";
		article.setAttributeNode(att);
		article = document.getElementById("articleLeft");
		att = document.createAttribute("class");
		att.value = "unclicked";
		article.setAttributeNode(att);
	}

}
