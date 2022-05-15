import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Context from "./Context";

export default function About() {
  return (
    <Navigation>
      <Context text="About" />
    </Navigation>
  );
}
