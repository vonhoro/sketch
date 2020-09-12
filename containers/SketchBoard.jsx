import React, {
  useState,
  useEffect,
  useContext,
  useCallBack,
  useMemo,
} from "react";
import { Square } from "../components/Square";
import styles from "../styles/SketchBoard.module.scss";
import { ColorContext } from "../context/Color";

// color to use

const colors = {
  boardDefault: "#202b33",
};

const SketchBoard = ({
  onClick,
  SquareSize,
  className,
  Drawing,
  onMouseDown,
  onMouseUp,
}) => {
  // context

  const { color } = useContext(ColorContext);

  // states

  const [drawingColor, setDrawingColor] = useState("white");
  const [numberColumns, setNumberColumns] = useState();
  const [numberSquares, setNumberSquares] = useState(null);
  const [drawing, setDrawing] = useState(false);

  //effects

  // To set the color used to paint

  useEffect(() => {
    setDrawingColor(color);
  }, [color]);

  useEffect(() => {
    //set total number of squares

    const numberSquares = SquareSize ** 2 * 2;

    // makes an array with them

    let array = Array.from(Array(Math.floor(numberSquares))).map(() => 1);

    //cleans the squares

    setNumberSquares(null);

    // sets the array to render

    setTimeout(() => setNumberSquares(array), 0);

    // to set the size of of each square and the amount of squares on each collumn

    let numberOfColumns = "";
    for (let i = 0; i < 2 * SquareSize; i++) {
      numberOfColumns += `${(window.screen.width * 0.7) / (2 * SquareSize)}px `;
    }
    setNumberColumns({ gridTemplateColumns: numberOfColumns });
  }, [SquareSize]);

  // Functions

  const holdToDraw = React.useCallback(() => {
    setDrawing(true);
  });
  const unHoldToDraw = React.useCallback(() => {
    setDrawing(false);
  });

  return (
    <div
      className={className}
      style={numberColumns}
      onMouseDown={(e) => {
        e.preventDefault();
        holdToDraw();
      }}
      onMouseUp={unHoldToDraw}
    >
      {numberSquares && (
        <>
          {numberSquares.map((square, index) => (
            <Square
              key={index.toString()}
              Class="square"
              Color={colors.boardDefault}
              Drawing={drawing}
              DrawColor={drawingColor}
              onClick={(e) => (e.target.style.backgroundColor = drawingColor)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default React.memo(SketchBoard);
