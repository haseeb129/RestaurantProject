import React from "react";
import { Animated } from "react-animated-css";

const FadeInAnimation = ({
  children,
  wrapperElement = "div",
  direction = "right",
  delay = 1000,
  ...props
}) => {
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = "fadeInLeft";
      break;
    case "right":
      fadeDirection = "fadeInRight";
      break;
    case "up":
      fadeDirection = "fadeInUp";
      break;
    case "down":
      fadeDirection = "fadeInDown";
      break;
    default:
      fadeDirection = "fadeInLeft";
  }
  return (
    <Animated
      animationIn={fadeDirection}
      animationInDuration={delay}
      isVisible={true}
    >
      {children}
    </Animated>
  );
};

export default FadeInAnimation;
