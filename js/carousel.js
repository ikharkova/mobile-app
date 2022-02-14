// (function(){

//     const slides = [
//                     `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-1.png" alt="interface-slider">`,
//                     `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-2.png" alt="interface-slider">`,
//                     `<img class="carousel__block-picture" src="img/pictures/interface-app.png" alt="interface-slider">`,
//                     `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-4.png" alt="interface-slider">`,
//                     `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-5.png" alt="interface-slider"></img>`,
//     ]

//     let currentSlideIdx = 0;

//     function showCurrentSlide() {
//         const slideContainer = document.querySelector('.interface__carousel__block');
//         slideContainer.innerHTML = slides[currentSlideIdx];
//     }

//     function showNextSlide() {
//         currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
//         showCurrentSlide();
//     }
//     showCurrentSlide();

//     setInterval(showNextSlide, 4000);
// })()

const arrowLeft = `<svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.55835 14L16.8708 24.3125L13.925 27.2584L0.666687 14L13.925 0.741699L16.8708 3.68753L6.55835 14Z"/>
</svg>`;

const arrowRight = `<svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4416 14L0.129152 3.68746L3.07498 0.741633L16.3333 14L3.07498 27.2583L0.129151 24.3125L10.4416 14Z"/>
</svg>`;

const slider = tns({
    container: '#interface-carousel',
    items: 1,
    slideBy: 1,
    autoplay: false,
    controls: true,
    controlsText: [arrowLeft, arrowRight],
    nav: true,
    navPosition: 'bottom',
    loop: false,
    startIndex: 2,
});