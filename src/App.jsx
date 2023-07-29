import { Navbar } from "./components/sections/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navbar />} />
    </Route>
  )
);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
