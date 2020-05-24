const number = document.querySelector('.contact__info--number');
const numberFinal = parseInt(number.textContent);
let numberRun = 1;
let count = false;

    function tickNumber(){
        let timer = setInterval(()=> {
            numberRun += 2;
            number.textContent = "+" + numberRun;
            if(numberRun >= numberFinal){
                clearInterval(timer);
            }
        }, 005)
    }
    
    // timer;
window.addEventListener('scroll' , ()=>{
    const sectionContact = document.querySelector('.contact');
    const sectionPosition = sectionContact.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.6;
    if (sectionPosition < screenPosition && !count) {
        count = true;
      tickNumber();
      
    }
  
  });