console.log("Hello, World");

$("ul li").click( () => {
	console.log("clicked");
});

let zamboneyclick = false;
$("#zamboney").click( () => {
	if(!zamboneyclick){
		$("#zamboney").animate({
		width: "500px"
		});
		zamboneyclick = true;
	}
	else if(zamboneyclick){
		$("#zamboney").animate({
		width: "500px"
		});
		zamboneyclick = true;
	}
	
	console.log("zamboney clicked")
});