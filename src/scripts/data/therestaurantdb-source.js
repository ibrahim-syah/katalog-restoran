import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async daftarRestaurant() {
    const response = await fetch(API_ENDPOINT.DAFTAR_RESTORAN);
    const responseJson = await response.json();
    const resultRestaurants = responseJson.restaurants;
    console.log(responseJson);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestaurantDbSource;
