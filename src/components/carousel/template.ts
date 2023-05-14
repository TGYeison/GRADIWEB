import { makeCard } from "../card/card";

//Template for the construction of the carousel
export const templateCarousel = (data: any) => (`
    <div class="carousel__head">
        <h5 class="carousel__title">
          <span class="carousel__title-txt">
            Discover our <br/> 
            planet-friendly offer
          </span>
        </h5>
        <div class="carousel__actions">
          <button class="carousel__action prev">
            <span class="carousel__action-icon carousel__action-icon-prev">
            </span>
          </button>
          <button class="carousel__action next">
            <span class="carousel__action-icon">
            </span>
          </button>
        </div>
    </div>
    <div class="carousel__slider">
        <div class="carousel__slider-content">
          ${data.map((item: any) => makeCard(item)).join('')}
        </div>
    </div>
    <div class="carousel__more">
        <button class="btn btn__w btn__primary">Browse all products</button>
    </div>
`);