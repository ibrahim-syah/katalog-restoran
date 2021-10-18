import LandingPage from '../views/pages/landing-page';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
  '/': LandingPage, // default page
  '/landing-page': LandingPage,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
