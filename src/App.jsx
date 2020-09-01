import React, { useEffect } from "react";
import { useRoutes } from "hookrouter";
import CssBaseline from "@material-ui/core/CssBaseline";

import Upload from "./Upload";
import { HomePage } from "./HomePage";
import { OurStory } from "./OurStory";
import { ContactUs } from "./ContactUs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const routes = {
  "/": () => <HomePage />,
  "/upload": () => <Upload />,
  "/ourstory": () => <OurStory />,
  "/contactus": () => <ContactUs />,
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
      <CssBaseline />
      <Header />
      <AppRouts />
      <Footer />
    </>
  );
};

export default App;
