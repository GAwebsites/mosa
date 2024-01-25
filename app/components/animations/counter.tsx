import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  from: number;
  to: number;
}

export function Counter({ from, to }: Props) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2.5,
      onUpdate(value) {
        node ? (node.textContent = value.toFixed(0)) : null;
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}
