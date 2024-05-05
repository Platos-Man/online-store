import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<BaseLayout />}>
      <Route index element={<Home />} />
    </Route>
))

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
