import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Favourites from './pages/Favourites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "categories", element: <CategoriesList /> },
      { path: "categories/:category", element: <Category /> },
      { path: "countries", element: <CountriesList /> },
      { path: "countries/:country", element: <Country /> },
      { path: "meal_recipe/:id", element: <Recipe /> },
      { path: "random_meal", element: <RandomMeal /> },
      { path: "random_drink", element: <RandomDrink /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        element: <ProtectedRoutes />,
        errorElement: <Error />,
        children: [
          { path: "/favourites", element: <Favourites /> },
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
