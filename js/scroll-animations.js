const scrollOffset = 100;
 
const scrollElements = document.querySelectorAll(".js-scroll");
 
const isElementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
}
 
const handleScrollAnimation = () => {
  scrollElements.forEach((element) => {
    if (isElementInView(element, scrollOffset)) {
      displayScrollElement(element);
    }
  });
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})