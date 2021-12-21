import React, { useEffect, useRef } from "react";

const useFadeIn = (
  duration: number = 1,
  delay: number = 0
): { ref: any; style: { opacity: number } } => {
  const element: any = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  return { ref: element, style: { opacity: 0 } };
};

export default function UseFadeInExample() {
  const fadeInH1 = useFadeIn(2, 4);
  const fadeInP = useFadeIn(5, 7);
  return (
    <>
      <h1 {...fadeInH1}>Hello!</h1>
      <p {...fadeInP}>Lorem ipsum dolor sit amet.</p>
    </>
  );
}
