import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Root from './layouts/Root';
import RandomMeal from './pages/RandomMeal';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<div>Homepage</div>} />
    <Route path="random_meal" element={<RandomMeal />} />
    <Route path="random_drink" element={<div>Random Drink Recipe!</div>} />
    <Route path="login" element={<div>Login page</div>} />
    <Route path="signup" element={<div>Sign up page</div>} />
    <Route path="*" element={<div>That page does not exist!</div>} />
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
