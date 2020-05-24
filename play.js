var interval = 30;
var angle = 0;
var angle_increment = 6;
var circle = document.getElementById('play');
let excute = false;

function run(){
  
  window.timer = window.setInterval(function () {

    circle.setAttribute("stroke-dasharray", angle + ", 20000");

    if (angle >= 360) {
      window.clearInterval(window.timer);
    }
    angle += angle_increment;
  }.bind(this), interval);
  window.setTimeout(window.timer, interval)
}

window.addEventListener('scroll' , ()=>{
  const sectionPlace = document.querySelector('.places');
  const sectionPosition = sectionPlace.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.4;
  if (sectionPosition < screenPosition && !excute) {
    excute = true;
    console.log(excute);
    run();
    
  }

});
