export const createCarousel = (content:string) => {
    const instance = document.createElement('div');
    instance.className = 'carousel';
    instance.innerHTML = content;

    return instance;
}

export const createControllers = (instance:HTMLElement): {
    viewSlider:HTMLElement, 
    slider:HTMLElement,
    actionPrev:HTMLButtonElement, 
    actionNext:HTMLButtonElement;
} => { 
    const viewSlider = instance
        .querySelector('.carousel__slider') as HTMLElement;
    const slider = instance
        .querySelector('.carousel__slider-content') as HTMLElement;;
    const actionPrev = instance
        .querySelector('button.carousel__action.prev') as HTMLButtonElement;
    const actionNext = instance
        .querySelector('button.carousel__action.next') as HTMLButtonElement;

    return { viewSlider, slider, actionPrev, actionNext }
}