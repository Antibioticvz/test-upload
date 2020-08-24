import React from "react";
import { useRoutes } from "hookrouter";

import Upload from "./Upload";
import { HomePage } from "./HomePage";

const routes = {
  "/": () => <HomePage />,
  "/upload": () => <Upload />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <h1>Not found</h1>;
};

export default App;
