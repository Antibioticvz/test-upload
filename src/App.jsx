import React, { useEffect } from "react";
import { useRoutes } from "hookrouter";
import CssBaseline from "@material-ui/core/CssBaseline";

import Upload from "./Upload";
import { HomePage } from "./HomePage";
import { HeaderFooterLayout } from "./components/HeaderFooterLayout";
import { Temp } from "./components/Temp";

const routes = {
  "/": () => <HomePage />,
  "/upload": () => <Upload />,
};

const AppRouts = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <h1>Not found</h1>;
};

const App = () => {
  useEffect(() => {
    document.title = "Readtronic";
  }, []);

  return (
    <>
      <Temp />
      <CssBaseline />
      <AppRouts />
      {/* </HeaderFooterLayout> */}
    </>
  );
};

export default App;
