import FavoriteOutletIdb from '../data/favorite-outlet-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, outlet }) {
    this._likeButtonContainer = likeButtonContainer;
    this._outlet = outlet;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._outlet;

    if (await this._isOutletExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isOutletExist(id) {
    const outlet = await FavoriteOutletIdb.getOutlet(id);
    return !!outlet;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteOutletIdb.putOutlet(this._outlet);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteOutletIdb.deleteOutlet(this._outlet.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
