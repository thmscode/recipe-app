import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Root from './layouts/Root';
import RandomDrink from './pages/RandomDrink';
import RandomMeal from './pages/RandomMeal';
import Error from './pages/Error';
import CategoriesList from './pages/CategoriesList';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import CountriesList from './pages/CountriesList';
import Country from './pages/Country';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="categories" element={<CategoriesList />} />
    <Route path="categories/:category" element={<Category />} />
    <Route path="/countries" element={<CountriesList />} />
    <Route path="/countries/:country" element={<Country />} />
    <Route path="meal_recipe/:id" element={<Recipe />} />
    <Route path="random_meal" element={<RandomMeal />} />
    <Route path="random_drink" element={<RandomDrink />} />
    <Route path="login" element={<LoginForm />} />
    <Route path="signup" element={<div>Sign up page</div>} />
    <Route path="/api/*" element={<Error />} />
    <Route path="*" element={<Error />} />
  </Route>

));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
