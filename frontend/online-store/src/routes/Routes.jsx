import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import { testLoader } from "./loaders";

const Routes = () => {
  const router = () => {
    createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} loader={testLoader} />
        </Route>
      )
    );
  };
  return <RouterProvider router={router} />;
};

export default Routes;
