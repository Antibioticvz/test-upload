import React from "react";

import { StayInformed } from "./components/StayInformed";
import { Advantage } from "./components/Advantage";
import { Pay } from "./components/Pay";
import { FAQ } from "./components/Faq";

export const HomePage = () => {
  return (
    <>
      <StayInformed />
      <Advantage />
      <Pay />
      <FAQ />
    </>
  );
};
