import React from "react";
import { useNavigate } from "react-router-dom";
import "./navButtons.css";

export default function NavButtons({ buttons }) {
  const navigate = useNavigate();
  return (
    <div className="nav-buttonDiv">
      {buttons.map((button) => (
        <button
          className="nav-button"
          onClick={() => {
            navigate(button.page);
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
