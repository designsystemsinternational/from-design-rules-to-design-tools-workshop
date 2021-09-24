import React, { useEffect } from "react";

export const handler = ({ inputs, mechanic }) => {
  useEffect(() => {
    mechanic.done();
  }, []);

  return (
    <svg width="500" height="500">
      <rect fill={inputs.background} width="500" height="500" />
      <circle
        fill={inputs.foreground}
        cx={inputs.xPosition}
        cy={inputs.yPosition}
        r="150"
      />
    </svg>
  );
};

export const inputs = {
  xPosition: {
    type: "number",
    slider: true,
    min: 0,
    max: 500,
    default: 250,
  },
  yPosition: {
    type: "number",
    slider: true,
    min: 0,
    max: 500,
    default: 250,
  },
  background: {
    type: "color",
    model: "hex",
    default: "#FDD7D1",
  },
  foreground: {
    type: "color",
    model: "hex",
    default: "#E94225",
  },
};

export const settings = {
  engine: require("@mechanic-design/engine-react"),
  usesRandom: true,
};
