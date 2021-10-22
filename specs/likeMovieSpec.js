import FavoriteOutletIdb from '../src/scripts/data/favorite-outlet-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking An Outlet', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the outlet has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    expect(document.querySelector('[aria-label="like this outlet"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the outlet has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this outlet"]')).toBeFalsy();
  });

  it('should be able to like the outlet', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const outlet = await FavoriteOutletIdb.getOutlet(1);

    expect(outlet).toEqual({ id: 1 });

    FavoriteOutletIdb.deleteOutlet(1);
  });

  it('should not add an outlet again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteOutletIdb.putOutlet({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteOutletIdb.getAllOutlets()).toEqual([{ id: 1 }]);

    FavoriteOutletIdb.deleteOutlet(1);
  });

  it('should not add an outlet when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteOutletIdb.getAllOutlets()).toEqual([]);
  });
});
