(function(){

    const slides = [
                    `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-1.png" alt="interface-slider">`,
                    `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-2.png" alt="interface-slider">`,
                    `<img class="carousel__block-picture" src="img/pictures/interface-app.png" alt="interface-slider">`,
                    `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-4.png" alt="interface-slider">`,
                    `<img class="carousel__block-picture" src="img/pictures/app-inretface-slidel-5.png" alt="interface-slider"></img>`,
    ]

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.interface__carousel__block');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function showNextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }
    showCurrentSlide();

    setInterval(showNextSlide, 4000);
})()