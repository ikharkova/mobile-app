const carousel = document.querySelector('#animated_carousel .customers__carousel-holder');
const carouselItems = carousel.children;

const controls = document.querySelector('#animated_carousel .customers__carousel-controls');
const carouselButtons = controls.children;

function clearClassName(className) {
  return className.replace(/before|after|active|\s/gi, '');
}

function setItemStateClass(className, state) {
  return `${clearClassName(className)} ${state}`;
}

function prepareItems(nodeList, classRegex) {
  for(let i = 0; i < nodeList.length; i += 1) {
    nodeList[i].dataset.order = i;

    nodeList[i].addEventListener('click', (e) => {
      e.preventDefault();

      if(e.target.className.match(classRegex)) {
        return selectItem(e.target.dataset.order);
      }

      return selectItem(e.path.find(el => classRegex.test(el.className)).dataset.order);
    });
  }
}

function selectItem(index) {
  const numIndex = Number(index);
  for (let i = 0; i < carouselItems.length; i += 1) {
    const currentItemClass = carouselItems[i].className;
    const currentButtonClass = carouselButtons[i].className;
    if(i < numIndex) {
      carouselItems[i].className = setItemStateClass(currentItemClass, 'before');
      carouselButtons[i].className = clearClassName(currentButtonClass);
    }
    if(i === numIndex) {
      carouselItems[i].className = setItemStateClass(currentItemClass, 'active');
      carouselButtons[i].className = setItemStateClass(currentButtonClass, 'active')
    }
    if(i > numIndex) {
      carouselItems[i].className = setItemStateClass(currentItemClass, 'after');
      carouselButtons[i].className = clearClassName(currentButtonClass);
    }
  }
}

selectItem(1);

prepareItems(carouselButtons, /customers__carousel-controls-button/gi);





