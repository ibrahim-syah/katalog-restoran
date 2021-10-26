/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Outlet');

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('liking one outlet', async (I) => {
  // make sure db is empty
  let numOfFavorites = await I.grabNumberOfVisibleElements('article');
  assert.strictEqual(0, numOfFavorites);

  I.amOnPage('/');

  I.seeElement('.num0 .lazyloaded');

  const firstOutletTitle = await I.grabTextFrom('.num0 .post-item__content .post-item__title');
  I.click('.num0 .post-item__content .post-item__title');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  const likedOutletTitle = await I.grabTextFrom('.num0 .post-item__content .post-item__title');

  assert.strictEqual(firstOutletTitle, likedOutletTitle);

  // unlike that outlet
  I.click('.num0 .post-item__content .post-item__title');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  // make sure that outlet is removed from favorite
  numOfFavorites = await I.grabNumberOfVisibleElements('article');
  assert.strictEqual(0, numOfFavorites);
});
