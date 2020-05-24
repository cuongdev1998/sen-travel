function effectSection(){
    const sectionChallenge = document.querySelector('.challenge');
    const grid = document.querySelectorAll('.challenge__grid--item');
    const sectionPosition = sectionChallenge.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;
    let counter = 0;
    let excute = false;
    if(sectionPosition < screenPosition){  
       
        grid.forEach((item,index)=> {
            
            // console.log(counter);
            
            // if(counter == 1){
            //     if(item.style.animation){
            //         item.style.animation = '';
            //     }else{
            //         item.style.animation = `animationGrid .5s ease forwards ${index / 7 + .5}s`
            //     }
            // }if(counter > 1){
            //     return
            // }
            // let a =item.classList.add('grid__item--appear');
             let animationGrid = setInterval(() => {
                item.classList.add('grid__item--appear');
                 
             }, 500 * index );
             animationGrid;
             clearInterval(() => {
                animationGrid;
             }, 500 * index  );
        
        })
    }else{

        grid.forEach((item,index)=> {
            // let animationGrid = setInterval(() => {
            //     item.classList.remove('grid__item--appear');
                 
            //  }, 500 * index );
            //  animationGrid;
            //  clearInterval(() => {
            //     animationGrid;
            //  }, 500 * index  );
            // console.log("aaaaa")
            // setInterval(item.classList.remove('grid__item--appear'),500);
        })
    }
}
window.addEventListener('scroll', effectSection);

