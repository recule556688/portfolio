import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedComponentProps {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
}

const TypedComponent: React.FC<TypedComponentProps> = ({
  strings,
  typeSpeed,
  backSpeed,
  loop,
}) => {
  const typedElementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current!, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    });

    return () => {
      typed.destroy(); // Cleanup when the component unmounts
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedElementRef}></span>;
};

export default TypedComponent;
