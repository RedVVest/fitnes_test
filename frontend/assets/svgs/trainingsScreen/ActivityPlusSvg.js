import React from "react";
import Svg, { Rect } from "react-native-svg";

const ActivityPlus = () => (
  <Svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect y="6" width="14" height="2" rx="1" fill="#F2613F" />

    <Rect
      x="6"
      y="14"
      width="14"
      height="2"
      rx="1"
      transform="rotate(-90 6 14)"
      fill="#F2613F"
    />
  </Svg>
);

export default ActivityPlus;
