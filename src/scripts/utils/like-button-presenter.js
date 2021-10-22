import {
    createLikeOutletButtonTemplate,
    createUnlikeOutletButtonTemplate,
  } from '../views/templates/template-creator';
  
  const LikeButtonPresenter = {
    async init({ likeButtonContainer, favoriteOutlets, outlet }) {
      this._likeButtonContainer = likeButtonContainer;
      this._outlet = outlet;
      this._favoriteOutlets = favoriteOutlets;
  
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
      const outlet = await this._favoriteOutlets.getOutlet(id);
      return !!outlet;
    },
  
    _renderLike() {
      this._likeButtonContainer.innerHTML = createLikeOutletButtonTemplate();
  
      const likeButton = document.querySelector('#likeButton');
      likeButton.addEventListener('click', async () => {
        await this._favoriteOutlets.putOutlet(this._outlet);
        this._renderButton();
      });
    },
  
    _renderLiked() {
      this._likeButtonContainer.innerHTML = createUnlikeOutletButtonTemplate();
  
      const likeButton = document.querySelector('#likeButton');
      likeButton.addEventListener('click', async () => {
        await this._favoriteOutlets.deleteOutlet(this._outlet.id);
        this._renderButton();
      });
    },
  };
  
  export default LikeButtonPresenter;
  