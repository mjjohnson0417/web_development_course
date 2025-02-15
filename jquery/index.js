//$("h1").css("color", "red");
//syntax is $(element).css(property to change, value)
$("h1").text("Hello");
$("button").text("test");
//console.log($("img").attr("src"));
//$("a").attr("href", "https://www.yahoo.com");
//.hasClass will show the classes an element has added to it. 

//this adds a single event listener using jquery
//$("h1").click(function() {
//    $("h1").css("color", "purple");
//});

/*
$("button").on("click", function() {
    $("h1").animate({opacity: 0.5});
});
*/

//you can stack methods, but they will be executed in order
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

//add an element 
/*$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
*/
//hide an element, there is  a hide method that only turns it off, use toggle
//elements can fade in and fade out using toggle as well
//slide up and slide down collapses an element, think drop down menu
/*$("button").on("click", function() {
    $("h1").toggle();
});
*/
    

//this will select all buttons and attach an event listener to them. 
/*$("button").click(function() {
    $("h1").css("color", "purple");
});
*/
//detect keystrokes in a text box, better to add to variable
/*$("input").keypress(function(event) {
    //console.log(event.key);
    $("h1").text(event.key);
});
*/

//detect mouseover event
/*$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});
*/