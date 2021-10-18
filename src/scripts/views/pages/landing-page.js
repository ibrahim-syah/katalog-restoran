import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const LandingPage = {
  async render() {
    return `
    <div class ="maincontent">
      <div class="hero" alt="hero_banner">
        <div class="hero__inner">
            <h2 class="hero__title" tabindex=0>Experience Pecel Lele Like You've Never Been Before</h2>
            <p class="hero__tagline" tabindex=0>H. Weskar's presents one of the best pecel lele in South East Asia</p>
        </div>
      </div>
      <section class="content" id="jump">
            <div class="latest">
                <h2 class="latest__label" tabindex=0>Find Us!</h2>
            </div>
        </section>
    </div>
    `;
  },

  async afterRender() {
    const fetchedRestaurants = await TheRestaurantDbSource.daftarRestaurant();
    const OutletItemElement = document.createElement('outlet-item');
    const latestClass = document.querySelector('.latest');

    OutletItemElement.outlets = fetchedRestaurants;
    latestClass.appendChild(OutletItemElement);
  },
};

export default LandingPage;
