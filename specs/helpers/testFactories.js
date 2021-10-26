/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteOutletIdb from '../../src/scripts/data/favorite-outlet-idb';

const createLikeButtonPresenterWithOutlet = async (outlet) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteOutlets: FavoriteOutletIdb,
    outlet,
  });
};

export { createLikeButtonPresenterWithOutlet };
