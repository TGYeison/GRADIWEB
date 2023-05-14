import type { TypeProd } from "../../entity/products/states/product";
import { fortmatCurrency } from "../../utils/format";

export const makeAssessment = (value:number) => {
    let assessment = '';

    const index = Math.ceil(value/100);

    for (let i = 1; i <= 5; i++) {
        assessment +=`
            <li class="assessment__item">
                <span class="assessment__icon  ${i <= index ? 'active' : ''}">
                </span>
            </li>
        `;
    }

    return assessment;
}


export const makeCard = (data:TypeProd) => (`
    <section class="card">
        <div class="card__content-image">
            <img src="${data.featuredImage.url}" alt="${''}" class="card__image">
            <span class="card__offer">-20%</span>
            <button class="btn btn__w-full btn__secondary">
               ${data.tracksInventory ? 'Add to cart' : 'See more'} 
            </button>
        </div>
        <div class="card__content-info">
            <div class="card__title">
                <span class="card__title-txt">${data.title}</span>
            </div>
            <div class="card__qualify">
                <ul class="card__assessment">
                    ${makeAssessment(
                        parseInt(data.tags[0])
                    )}
                </ul>
                <div class="card__valuations">
                    <span class="card__valuations-txt">
                        (${data.totalInventory})
                    </span>
                </div>
            </div>
            <div class="card__price">
                <span class="card__price-prev">
                    ${fortmatCurrency(data.prices.max)}
                </span>
                <span class="card__price-current">
                    ${fortmatCurrency(data.prices.min)}
                </span>
            </div>
        </div>
    </section>
`);
