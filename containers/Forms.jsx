import React from "react";
import { Slider, Typography } from "@material-ui/core";
export const Forms = ({ onChange, CurrentValue }) => {
  return (
    <div className="Forms">
      <Typography id="discrete-slider" gutterBottom>
        Square size
      </Typography>
      <Slider
        className="Slider"
        color="primary"
        defaultValue={20}
        value={CurrentValue}
        min={1}
        max={40}
        step={1}
        onChange={onChange}
      />
    </div>
  );
};
