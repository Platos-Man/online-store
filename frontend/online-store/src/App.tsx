import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<h1>page</h1>}/>
))

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
