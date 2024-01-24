import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import projects from "../../data/projects.json";

interface CardProps {
  slug: string;
}

interface ProjectProps {
  title: string;
  tags: string[];
}

export default function ProjectCard({ slug }: CardProps) {
  const projectData: ProjectProps = (projects as any)[slug];

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
      className="bg-hero object-cover h-[450px] w-[350px] hover:cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <a href={`projects/${slug}`}>
        <div className="text-white font-semibold font-montserrat flex flex-col items-center justify-center w-full h-full uppercase hover:backdrop-blur-[2px] hover:backdrop-brightness-75 transition-all duration-700 ease-in-out relative opacity-0 hover:opacity-100">
          <p className="block text-xl">{projectData.title}</p>
          <div className="w-full flex items-center justify-around absolute bottom-5">
            {projectData.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="border-2 py-1 px-3 rounded-full text-sm"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </a>
    </motion.article>
  );
}
