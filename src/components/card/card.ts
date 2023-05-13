const makeCard = () => (`
    <section class="card">
        <div class="card__content-image">
            <img src="${''}" alt="${''}" class="card__image">
            <span class="card__offer">-20%</span>
            <button class="card__btn">
                See more
            </button>
        </div>
        <div class="card__content-info">
            <div class="card__title">
                <span class="card__title-txt">${''}</span>
            </div>
            <div class="card__qualify">
                <ul class="card__assessment">
                    <li class="assessment__item">
                        <span class="assessment__icon active">
                        </span>
                    </li>
                    <li class="assessment__item">
                        <span class="assessment__icon active">
                        </span>
                    </li>
                    <li class="assessment__item">
                        <span class="assessment__icon active">
                        </span>
                    </li>
                    <li class="assessment__item">
                        <span class="assessment__icon">
                        </span>
                    </li>
                    <li class="assessment__item">
                        <span class="assessment__icon">
                        </span>
                    </li>
                </ul>
                <div class="card__valuations">
                    <span class="card__valuations-txt">(320)</span>
                </div>
            </div>
            <div class="card__price">
                <span class="card__price-prev">€19,00</span>
                <span class="card__price-current">€15,00</span>
            </div>
        </div>
    </section>
`);