// Make sound when button is clicked
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        addAmination(this.innerHTML);
    }); 
}
// Make sound when key is pressed
document.addEventListener("keydown", function (event){
       makeSound(event.key);
       addAmination(event.key);
    })
// Function to make sound
function makeSound(sound)
{
    switch(sound){
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(sound);
    }
}
//function to add animation
function addAmination(button){
    var activeButton= document.querySelector("."+button);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);
}