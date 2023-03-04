import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Root from './layouts/Root';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<div>Homepage</div>} />
    <Route path="meals_random" element={<div>Random Meal Recipe!</div>} />
    <Route path="drinks_random" element={<div>Random Drink Recipe!</div>} />
    <Route path="signin" element={<div>Sign in page</div>} />
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
