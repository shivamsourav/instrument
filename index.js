
var drumbutton= document.querySelectorAll(".drum").length;
for(var i=0; i<drumbutton ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
    var buttonclk = this.innerHTML;
makesound(buttonclk);
animation(buttonclk);
});
}

document.addEventListener("keypress" , function(event){
  makesound(event.key);
  animation(event.key);
});

function makesound(key){
  switch (key) {
    case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;
      case "a":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
        break;
        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
          break;
          case "d":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
            break;
            case "j":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
              break;
              case "k":
              var snare = new Audio('sounds/snare.mp3');
              snare.play();
                break;
                case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                  break;
    default: console.log(key);

  }

}

function animation(currentkey){
  var current = document.querySelector("."+currentkey);
  current.classList.add("pressed");
  setTimeout(function(){
    current.classList.remove("pressed")
  },100);
}
