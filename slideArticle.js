const articleSlide = document.querySelector('.places__section--content--slide');
const articles = document.querySelectorAll('.article');
const leftArticle = document.querySelector('.control-left');
const rightArticle = document.querySelector('.control-right');

// params

let widthArticle = articles[0].clientWidth;
counter = 1;
console.log(articleSlide);

articleSlide.style.transform = 'translateX(' + (-widthArticle * counter) + 'px)';

leftArticle.addEventListener('click', ()=>{
    if(counter <= 0){
        return;
    }else{
        articleSlide.style.transition = 'transform .4s linear';
        counter--;
        articleSlide.style.transform = 'translateX(' + (-widthArticle * counter) + 'px)';
    }
    

})
rightArticle.addEventListener('click', ()=>{
    if(counter >= articles.length - 1){
        return;
    }else{
        articleSlide.style.transition = 'transform .4s linear';
        counter++;
        articleSlide.style.transform = 'translateX(' + (-widthArticle * counter) + 'px)';
    }
    

})