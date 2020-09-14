import React, { useEffect } from "react";
import { useRoutes, useRedirect } from "hookrouter";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Upload } from "./Upload";
import { HomePage } from "./HomePage";
import { OurStory } from "./OurStory";
import { ContactUs } from "./ContactUs";
import { Sharing } from "./Sharing";
import { Login } from "./Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { ContextProvider } from "./ContextAuth";

const routes = {
  "/home*": () => <HomePage />,
  "/upload": () => <Upload />,
  "/ourstory": () => <OurStory />,
  "/contactus": () => <ContactUs />,
  "/sharing": () => <Sharing />,
  "/login": () => <Login />,
};

const AppRouts = () => {
  useRedirect("/", "/home");
  const routeResult = useRoutes(routes);

  return routeResult || <h1>Not found</h1>;
};

const App = () => {
  useEffect(() => {
    document.title = "Readtronic";
  }, []);

  return (
    <ContextProvider>
      <CssBaseline />
      <Header />
      <AppRouts />
      <Footer />
    </ContextProvider>
  );
};

export default App;
