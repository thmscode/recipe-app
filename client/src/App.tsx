import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Root from './layouts/Root'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="*" element={<div>That page does not exist!</div>} />
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
