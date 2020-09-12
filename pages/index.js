import Head from "next/head";

import React, { useState, useEffect, useContext } from "react";
import SketchBoard from "../containers/SketchBoard";
import { Forms } from "../containers/Forms";
import { Settings } from "../containers/Settings";
import { ColorPicker } from "../containers/ColorPicker";
import { Button, IconButton } from "@material-ui/core";

import { ColorContext } from "../context/Color"; //
const colorsLeft = [
  { color: "red" },
  { color: "blue" },
  { color: "black" },
  { color: "white" },
  { color: "yellow" },
  { color: "green" },
  { color: "#202b33" },
  { color: "pink" },
  { color: "purple" },
  { color: "lightblue" },
  { color: "orange" },
  { color: "brown" },
];
const colorsRight = [
  { color: "gray" },
  { color: "maroon" },
  { color: "violet" },
  { color: "mediumseagreen" },
  { color: "slateblue" },
  { color: "lightgray" },
  { color: "Aqua" },
  { color: "AliceBlue" },
  { color: "Beige" },
  { color: "DeepPink" },
  { color: "DarkSalmon" },
  { color: "Gold" },
];

export default function Home() {
  const [color, setColor] = useState("white");
  const [squareSize, setSquareSize] = useState(20);
  const [reRender, setReRender] = useState(true);
  return (
    <>
      <Head>
        <title>Drawing Board</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Settings>
        <ColorContext.Provider value={{ color, setColor }}>
          <h1 className="Brand" style={{ textShadow: `0 0 ${color}` }}>
            VonHoro
          </h1>

          <SketchBoard
            NumberColumns={10}
            NumberRows={3}
            SquareSize={squareSize}
            className="Board"
          />
          <ColorPicker className="Color-picker-left" Colors={colorsLeft} />
          <Button
            size="medium"
            className="Reset-left"
            variant="outlined"
            onClick={(e) => {
              setSquareSize(squareSize - 1);
              setSquareSize(squareSize + 1);
            }}
          >
            {" "}
            CLEAR
          </Button>
          <ColorPicker className="Color-picker-right" Colors={colorsRight} />
          <Button
            variant="outlined"
            size="medium"
            className="Reset-right"
            onClick={(e) => {
              setSquareSize(20);
            }}
          >
            {" "}
            Reset
          </Button>
        </ColorContext.Provider>

        <Forms
          CurrentValue={squareSize}
          onChange={(e, value) => {
            setSquareSize(value);
          }}
        />
      </Settings>
    </>
  );
}
