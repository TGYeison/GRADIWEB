import { templateCarousel } from "./template";
import { createCarousel, createControllers } from "./utils";
import { numNegativeToPositive } from "../../utils/format";

export const makeCarousel = (target: HTMLElement, data: any) => {
    let state = 0;
    let carouselView = 0;
    let carouselWidth = 0;
    let scroll = 334;
  
    //insert the carousel in the DOM
    const carousel = createCarousel(
        templateCarousel(data)
    );
    target.appendChild(carousel);
  
    //instance the controllers from the carousel
    const {viewSlider, slider, actionPrev, actionNext } = 
        createControllers(carousel);
  
    //Defining carousel view sizes and scrolling
    carouselWidth = (slider as HTMLElement).clientWidth;
    carouselView = (viewSlider as HTMLElement).clientWidth;

    if(carouselWidth > 740) scroll = 254;
  
    //create triggers for carousel
    actionPrev.addEventListener('click', () => {
      const moveScroll = state + scroll;

      if (moveScroll <= 0) {
        slider.style.left = `${moveScroll}px`;
        state += scroll;
      }
    });
  
    actionNext.addEventListener('click', () => {
      const moveScroll = state - scroll;

      if ((numNegativeToPositive(state) + carouselView) <= carouselWidth) {
        slider.style.left = `${moveScroll}px`;
        state -= scroll;
      }
    });
  
}