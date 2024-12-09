import React from "react";
import Svg, { Circle } from "react-native-svg";

const CircularProgress = ({ progress, radius, strokeWidth, color }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (clampedProgress / 100) * circumference;

  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <Circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        stroke="#EBEBEB0D"
        strokeWidth={strokeWidth}
        fill="none"
      />

      <Circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={-strokeDashoffset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
    </Svg>
  );
};

export default CircularProgress;
