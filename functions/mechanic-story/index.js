import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

export const handler = ({ inputs, mechanic }) => {
  const {
    width,
    height,
    backgroundColor,
    text,
    color1,
    color2,
    minRadius,
    maxRadius,
    duration,
  } = inputs;

  const startTime = useRef(Date.now());

  const isPlaying = useRef(true);
  const frameCount = useDrawLoop(isPlaying.current);
  const lines = text.split(" ");

  const textColor = backgroundColor;
  const fontSize = height / 8;
  const lineHeight = fontSize * 0.85;

  // this trick helps us center the text vertically
  const firstLine = height / 2 - lineHeight * ((lines.length - 2) / 2);

  useEffect(() => {
    if (Date.now() - startTime.current < duration * 1000) {
      mechanic.frame();
    } else if (isPlaying.current) {
      isPlaying.current = false;
      mechanic.done();
    }
  }, [frameCount]);

  let circles = [];

  for (var i = 0; i < Math.min(Math.floor(frameCount / 15), 20); i++) {
    circles.push(
      <Circle
        key={i}
        minX={0}
        maxX={width}
        minY={0}
        maxY={height}
        minRadius={(width / 100) * minRadius}
        maxRadius={(width / 100) * maxRadius}
        color1={color1}
        color2={color2}
      />
    );
  }

  return (
    <svg width={width} height={height}>
      <rect fill={backgroundColor} width={width} height={height} />

      {circles}
      {lines.map((line, index) => {
        return (
          <text
            key={index}
            x={width / 2}
            y={firstLine + index * lineHeight}
            textAnchor="middle"
            fill={textColor}
            fontWeight="bold"
            fontFamily="Object Sans"
            fontSize={fontSize}
          >
            {line}
          </text>
        );
      })}
    </svg>
  );
};

export const inputs = {
  width: {
    type: "number",
    default: 1080,
  },
  height: {
    type: "number",
    default: 1920,
  },
  backgroundColor: {
    type: "color",
    model: "hex",
    default: "#FDD7D1",
  },

  text: {
    type: "text",
    default: "TURN YOUR DESIGN RULES INTO DESIGN TOOLS",
  },
  color1: {
    type: "color",
    model: "hex",
    default: "#E94225",
  },
  color2: {
    type: "color",
    model: "hex",
    default: "#002EBB",
  },
  minRadius: {
    label: "Min Radius (% of width)",
    type: "number",
    default: 5,
    min: 0,
    max: 200,
    slider: true,
  },
  maxRadius: {
    label: "Max Radius (% of width)",
    type: "number",
    default: 10,
    min: 0,
    max: 200,
    slider: true,
  },
  duration: {
    type: "number",
    default: 20,
  },
};

export const settings = {
  engine: require("@mechanic-design/engine-react"),
  animated: true,
};

const useDrawLoop = (isPlaying) => {
  const raf = useRef();
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    cancelAnimationFrame(raf.current);

    if (!isPlaying) {
      return;
    }

    const draw = () => {
      setFrameCount((cur) => cur + 1);
      raf.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf.current);
    };
  }, [isPlaying]);

  return frameCount;
};

export const Circle = ({
  minX,
  maxX,
  minY,
  maxY,
  minRadius,
  maxRadius,
  color1,
  color2,
}) => {
  const x = useRef(minX + Math.random() * maxX - minX);
  const y = useRef(minX + Math.random() * maxY - minY);
  const _maxRadius = useRef(
    minRadius + Math.random() * (maxRadius - minRadius)
  );
  const radius = useRef(minRadius);
  const rotation = useRef(Math.random() * 360);
  const rotatingSpeed = useRef(Math.random() * 5);
  rotation.current += rotatingSpeed.current;
  radius.current = Math.min(_maxRadius.current, radius.current + 2);
  return (
    <g
      transform={`translate(${x.current}, ${y.current}) rotate(${rotation.current})`}
    >
      <path
        d={`M ${radius.current} 0
          A ${radius.current} ${
          radius.current
        }, 0, 0, 0, ${-radius.current} 0 Z`}
        fill={color1}
      />
      <path
        d={`M ${-radius.current} 0
           A ${radius.current} ${radius.current}, 0, 0, 0, ${
          radius.current
        } 0 Z`}
        fill={color2}
      />
    </g>
  );
};
