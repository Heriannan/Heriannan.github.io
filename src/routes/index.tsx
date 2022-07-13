import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const routes = [
  {
    path: "",
    exact: true,
    element: <Home />,
  },
];

const Router = () => {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} {...route}></Route>
      ))}
    </Routes>
  );
};
export default Router;
