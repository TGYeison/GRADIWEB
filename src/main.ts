import './style.scss';

import { cntrlProduct } from './entity/products/controller/product.controller';
import { makeCarousel } from './components/carousel/caroucel';
import cntrlForm from './components/form/form';

const errorBurden = (target: HTMLElement, msg: string) => {
  target.innerHTML = msg;
}

async function main() {
  const targetForm = document.querySelector('form.form');
  cntrlForm(targetForm as HTMLElement);

  const contentCarousel = document.querySelector('.content');
  const {data, error} = await cntrlProduct();

  if (error != null) 
    return errorBurden(contentCarousel as HTMLElement, error);

  makeCarousel(contentCarousel as HTMLElement, data);
}


main();





