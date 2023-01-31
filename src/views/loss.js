import React from "react";
import "./loss.css";
import NavButtons from "../components/navButtons";

export default function Loss() {
  return (
    <div className="loss-outerDiv">
      <h1>Oh no! You Lost!</h1>
      <h2>Try Again?</h2>
      <NavButtons
        buttons={[
          { label: "Replay", page: "/game" },
          { label: "Home", page: "/" },
        ]}
      />
    </div>
  );
}
