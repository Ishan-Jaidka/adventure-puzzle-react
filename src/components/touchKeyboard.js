import React from "react";
import "./touchKeyboard.css";

export default function TouchKeyboard({ handleKeyPress }) {
  return (
    <div className="keeb-buttons">
      <button
        id="ArrowUp"
        className="keeb-button"
        onClick={() => {
          handleKeyPress({ key: "ArrowUp" });
        }}
      >
        {"\u2191"}
      </button>
      <div className="keeb-buttons-lr">
        <button
          id="ArrowLeft"
          className="keeb-button"
          onClick={() => {
            handleKeyPress({ key: "ArrowLeft" });
          }}
        >
          {"\u2190"}
        </button>
        <button
          id="ArrowRight"
          className="keeb-button"
          onClick={() => {
            handleKeyPress({ key: "ArrowRight" });
          }}
        >
          {"\u2192"}
        </button>
      </div>
      <button
        id="ArrowDown"
        className="keeb-button"
        onClick={() => {
          handleKeyPress({ key: "ArrowDown" });
        }}
      >
        {"\u2193"}
      </button>
    </div>
  );
}
