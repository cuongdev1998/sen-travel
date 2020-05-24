const bgBack = document.querySelector('.container__back--slide')
const bgSlide = document.querySelectorAll('.container__back--slide--item');
const slideHeader = document.querySelector('.header__right--slide');
const headerItem = document.querySelectorAll('.header__right--slide--image');
const prev = document.querySelector('.header__control--left');
const next = document.querySelector('.header__control--right');

const size = bgSlide[0].clientWidth;
const itemSize = headerItem[0].clientWidth;
let counter =0 ;
// console.log(bgSlide.length);

bgBack.style.transform = 'translateX('+(-size * (bgSlide.length-1))+ 'px)';
beforeTranslate = -size * (bgSlide.length-1);
console.log(beforeTranslate);

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

function prevSlide(){
    
    
    if(counter < 1){
        
        return
    }else{
        counter--;
        let sizeMove = (size *  counter);
        bgBack.style.transition = 'transform .3s ease-in-out';
        slideHeader.style.transition = 'transform .3s ease-in-out';
        bgBack.style.transform = 'translateX(' +( beforeTranslate + sizeMove) + 'px)';
        slideHeader.style.transform = 'translateX(' +(-itemSize *  counter) + 'px)';
        
    }

}
function nextSlide(){
    if(counter >= bgSlide.length - 1 && counter >= headerItem.length -1){
        
        return
    }else{
        counter++;
        let sizeMove = (size *  counter);
        bgBack.style.transition = 'transform .3s ease-in-out';
        slideHeader.style.transition = 'transform .3s ease-in-out';
        
        bgBack.style.transform = 'translateX(' +( beforeTranslate + sizeMove) + 'px)';
        slideHeader.style.transform = 'translateX(' +(-itemSize *  counter) + 'px)';
    }

}

