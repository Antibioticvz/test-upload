import React, { useRef, useLayoutEffect } from "react";
import { usePath } from "hookrouter";

import Sophie from "./Sophie.wav";
import Player from "./components/Player";

import { StayInformed } from "./components/StayInformed";
import { Advantage } from "./components/Advantage";
import { Pay } from "./components/Pay";
import { FAQ } from "./components/Faq";

export const HomePage = () => {
  const path = usePath();
  const myRef = useRef(null);

  useLayoutEffect(() => {
    if (path === "/home/price") {
      window.scrollTo({
        behavior: "smooth",
        top: myRef.current.offsetTop,
      });
    }
  }, [path]);

  return (
    <>
      <Player url={Sophie} />
      <StayInformed />
      <Advantage />
      <div ref={myRef}> </div>
      <Pay />
      <FAQ />
    </>
  );
};
