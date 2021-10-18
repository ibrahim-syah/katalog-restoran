import FavoriteOutletIdb from '../../data/favorite-outlet-idb';

const Like = {
  async render() {
    return `
    <div class ="maincontent">
      <section class="content">
            <div class="latest">
                <h2 class="latest__label" tabindex=0>Favorite Outlet</h2>
            </div>
        </section>
    </div>
    `;
  },

  async afterRender() {
    const outlets = await FavoriteOutletIdb.getAllOutlets();
    const OutletItemElement = document.createElement('outlet-item');
    const latestClass = document.querySelector('.latest');

    OutletItemElement.outlets = outlets;
    latestClass.appendChild(OutletItemElement);
  },
};

export default Like;
