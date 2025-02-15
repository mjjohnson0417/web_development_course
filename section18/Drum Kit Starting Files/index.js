//below is an example of called an anonymous function, aka it has no name
//event listeners are added to each element with the class drum
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) { 
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;  
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

/*this adds the listener for the keydown event to the entire document */
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    switch(key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(buttonInnerHTML)
    }
}
/*example of a constructor function using this keyword, basicaly creating an object with an array of properties

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleanRoom = function () {
        alert("Cleaning in progress..."); 
    }
};
*/
/*example of object with array of properties, some of those properties being methods. This is the manual way of creating the object

var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French","English"],
    moveSuiteCase: function () { //Where did pickUpSuitcase and move methods come from?
        alert("May I take your suitcase:"); 
        pickUpSuitcase();
        move();
    }
}

*/