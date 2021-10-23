import FavoriteOutletIdb from '../src/scripts/data/favorite-outlet-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking An Outlet', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteOutletIdb.putOutlet({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteOutletIdb.deleteOutlet(1);
  });

  it('should display unlike widget when the outlet has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this outlet"]')).toBeTruthy();
  });

  it('should not display like widget when the outlet has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    expect(document.querySelector('[aria-label="like this outlet"]')).toBeFalsy();
  });

  it('should be able to remove liked outlet from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    document.querySelector('[aria-label="unlike this outlet"]').dispatchEvent(new Event('click'));

    expect(await FavoriteOutletIdb.getAllOutlets()).toEqual([]);
  });

  it('should not throw error if the unliked outlet is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithOutlet({ id: 1 });

    await FavoriteOutletIdb.deleteOutlet(1);

    document.querySelector('[aria-label="unlike this outlet"]').dispatchEvent(new Event('click'));

    expect(await FavoriteOutletIdb.getAllOutlets()).toEqual([]);
  });
});
