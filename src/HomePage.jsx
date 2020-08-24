import React from "react";
import Button from "@material-ui/core/Button";

import MiButtonLink from "./components/MiButtonLink";

export const HomePage = () => {
  return (
    <div>
      HomePage
      <Button component={MiButtonLink} href="/upload" variant="contained">
        Hello World
      </Button>
    </div>
  );
};
