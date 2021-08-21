// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";

// const FadeInAnimation = ({
//   children,
//   wrapperElement = "div",
//   direction = null,
//   delay = 0,
//   ...props
// }) => {
//   const Component = wrapperElement;
//   let compRef = useRef(null);
//   const distance = 70;
//   let fadeDirection;
//   switch (direction) {
//     case "left":
//       fadeDirection = { x: -distance };
//       break;
//     case "right":
//       fadeDirection = { x: distance };
//       break;
//     case "up":
//       fadeDirection = { y: distance };
//       break;
//     case "down":
//       fadeDirection = { y: -distance };
//       break;
//     default:
//       fadeDirection = { x: 0 };
//   }
//   useEffect(() => {
//     gsap.from(compRef.current, 1, {
//       ...fadeDirection,
//       opacity: 0,
//       delay,
//     });
//   }, [compRef, fadeDirection, delay]);
//   return (
//     <Component ref={compRef} {...props}>
//       {children}
//     </Component>
//   );
// };

// export default FadeInAnimation;

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
      // animationOut="fadeOutLeft"
      animationInDuration={delay}
      isVisible={true}
    >
      {children}
    </Animated>
  );
};

export default FadeInAnimation;
