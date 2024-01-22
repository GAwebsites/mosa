import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface TeamCardProps {
  name: string;
  title: string;
}

export default function TeamCard({ title, name }: TeamCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.article
      ref={ref}
      className="bg-hero object-cover h-[450px] w-[350px] hover:cursor-pointer relative"
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="w-full flex flex-row items-center justify-between px-2 py-1 absolute -bottom-10">
        <p className="text-lg text-grey">{name}</p>
        <p className=" text-accent uppercase ">{title}</p>
      </div>
    </motion.article>
  );
}
