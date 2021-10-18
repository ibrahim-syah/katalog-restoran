import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createOutletDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="outlet" class="outlet"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await TheRestaurantDbSource.detailRestaurant(url.id);
    const outletContainer = document.querySelector('#outlet');
    outletContainer.innerHTML = createOutletDetailTemplate(response.restaurant);

    const foodContainer = document.querySelector('.foods');
    const drinkContainer = document.querySelector('.drinks');
    const reviewsContainer = document.querySelector('.review');

    response.restaurant.menus.foods.forEach((foodItem) => {
      foodContainer.innerHTML += `
      <li>${foodItem.name}</li>
      `;
    });

    response.restaurant.menus.drinks.forEach((drinkItem) => {
      drinkContainer.innerHTML += `
      <li>${drinkItem.name}</li>
      `;
    });

    response.restaurant.customerReviews.forEach((reviewItem) => {
      reviewsContainer.innerHTML += `
      <h4>Written by ${reviewItem.name} on ${reviewItem.date}</h4>
      <p>${reviewItem.review}</p>
      `;
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      outlet: {
        id: response.restaurant.id,
        name: response.restaurant.name,
        description: response.restaurant.description,
        pictureId: response.restaurant.pictureId,
        city: response.restaurant.city,
      },
    });
  },
};

export default Detail;
