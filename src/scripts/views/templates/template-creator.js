import CONFIG from '../../globals/config';

const createOutletDetailTemplate = (outlet) => `
  <h2 class="outlet__title">${outlet.name}</h2>
  <img class="outlet__poster" src="${`${CONFIG.BASE_IMAGE_URL}large/${outlet.pictureId}`}" alt="Picture of ${outlet.name}" />
  <div class="outlet__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${outlet.city}</p>
    <h4>Address</h4>
    <p>${outlet.address}</p>
    <h4>Rating</h4>
    <p>${outlet.rating}</p>
  </div>
  <div class="outlet__overview">
    <h3>Overview</h3>
    <p>${outlet.description}</p>
  </div>
  <h3>Menus</h3>
  <div class="outlet__overview menu">
    <ul class="foods">
    <h4>Foods</h4>
    </ul>
    <ul class="drinks">
    <h4>Drinks</h4>
    </ul>
  </div>
  <div class="outlet__overview review">
    <h3>Review</h3>
  </div>
`;

const createLikeOutletButtonTemplate = () => `
  <button aria-label="like this outlet" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeOutletButtonTemplate = () => `
  <button aria-label="unlike this outlet" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createOutletDetailTemplate,
  createLikeOutletButtonTemplate,
  createUnlikeOutletButtonTemplate,
};
