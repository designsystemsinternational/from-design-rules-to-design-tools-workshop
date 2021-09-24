import React, { useEffect } from "react";

export const handler = ({ inputs, mechanic }) => {
  const { width, height } = inputs;
  const unit = width / 8;

  useEffect(() => {
    mechanic.done();
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M400 500C700 500 700 100 400 100"
        stroke="#0468FF"
        stroke-width="150"
      />
      <path d="M400 200L100 600" stroke="#1F34AB" stroke-width="150" />
      <path d="M100 300L200 500" stroke="#85AEFF" stroke-width="150" />
    </svg>
  );
};

export const inputs = {
  width: {
    type: "number",
    default: 800,
  },
  height: {
    type: "number",
    default: 800,
  },
  text: {
    type: "text",
    default: "Processing",
  },
  firstCurve: {
    type: "boolean",
  },
  firstColor: {
    type: "color",
    model: "hex",
    default: "#E94225",
  },
  firstColor: {
    type: "color",
    model: "hex",
    default: "#1F34AB",
  },
  firstStartX: {
    type: "number",
    default: 1,
  },
  firstStartY: {
    type: "number",
    default: 1,
  },
  firstStartBezier1: {
    type: "number",
    default: 1,
  },
  firstStartBezier2: {
    type: "number",
    default: 1,
  },

  firstEndX: {
    type: "number",
    default: 1,
  },
  firstEndY: {
    type: "number",
    default: 1,
  },
  firstEndBezier1: {
    type: "number",
    default: 1,
  },
  firstEndBezier2: {
    type: "number",
    default: 1,
  },
};

export const presets = {
  medium: {
    width: 800,
    height: 600,
  },
  large: {
    width: 1600,
    height: 1200,
  },
};

export const settings = {
  engine: require("@mechanic-design/engine-react"),
  usesRandom: true,
};
