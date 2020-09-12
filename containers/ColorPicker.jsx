import React from "react";
import { Square } from "../components/Square";
import { ColorContext } from "../context/Color";
export const ColorPicker = ({ className, Colors }) => {
  const { color, setColor } = React.useContext(ColorContext);

  return (
    <div className={className}>
      {Colors.map((elemnt, index) => (
        <Square
          key={index.toString()}
          Class="Colors"
          onClick={(e) => {
            setColor(elemnt.color);
          }}
          Drawing={false}
          Color={elemnt.color}
        />
      ))}
    </div>
  );
};
