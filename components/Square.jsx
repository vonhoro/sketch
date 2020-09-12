import React, { useState } from "react";

export const Square = ({
  Class,
  Drawing,
  Color,
  onClick,
  onMouseEnter,
  DrawColor,
  onMouseDown,
}) => {
  return (
    <div
      className={Class}
      style={{ backgroundColor: Color }}
      onClick={onClick}
      onMouseOver={(e) => {
        e.preventDefault();
        if (!Drawing) return;
        e.target.style.backgroundColor = DrawColor;
      }}
    >
      {""}
    </div>
  );
};
