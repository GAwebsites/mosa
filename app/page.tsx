"use client";
import React, { use, useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";
import { Counter } from "./components/animations/counter";
import ServiceCard from "./components/home/serviceCard";
import ProjectCard from "./components/projects/projectCard";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <main className="h-full w-screen flex flex-col gap-44">
      <section
        id="hero"
        className="h-full min-h-screen w-full font-montserrat "
      >
        <div className=" w-full h-full flex flex-col items-center justify-center ">
          <div className=" text-white font-montserrat bg-hero w-screen bg-no-repeat bg-cover shadow-2xl">
            <div className="pt-48 pb-80 px-6 w-full h-full backdrop-blur-[2px] backdrop-brightness-75 flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center pb-8 font-montserrat">
                Here at MOSA <br /> We build lasting memories
              </h1>
              <p className="text-center">
                We provide construction services made possible by our
                experienced team.
              </p>
            </div>
          </div>
          <motion.div
            className="flex flex-col items-center justify-around gap-12 md:gap-32 md:flex-row -mt-[110px] z-50 font-source"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ServiceCard
              title="Bouw"
              content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsut amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
            />
            <ServiceCard
              title="Bouw"
              content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsut amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
            />
            <ServiceCard
              title="Bouw"
              content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsut amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
            />
          </motion.div>
        </div>
      </section>
      <section
        ref={ref}
        id="about"
        className=" flex flex-col gap-20 w-3/4  md:w-2/3 mx-auto"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-accent ">Mosa als partner</p>
          <h1 className="text-xl">Ontdek onze kwaliteiten</h1>
        </div>
        <div className="flex items-center h-full font-source">
          <div className="hidden md:flex bg-about rounded-xl h-full w-1/2 bg-cover shadow-xl min-h-[600px]"></div>
          <div className="grid grid-cols-2 gap-10 md:gap-6 min-h-[425px] md:pl-16 py-8 w-full md:w-1/2">
            <div className="col-span-2 md:text-left text-center ">
              <p>
                Mosa BV excelleert in exclusieve villabouw, appartementen en
                renovaties. Met perfectie, passie en grondige kennis zorgen we
                voor unieke woningen. Ons totaalconcept, gebaseerd op
                vakmanschap en kwaliteit, garandeert klanttevredenheid in
                nieuwbouw of renovatieprojecten.
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="text-accent text-5xl font-medium font-montserrat h-12 flex">
                    {isInView ? <Counter from={0} to={12} /> : null}
                  </div>
                </motion.div>
                <p className="font-medium ">Jaar ervaring</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="text-accent text-5xl font-medium font-montserrat h-12 flex ">
                  {isInView ? <Counter from={0} to={100} /> : null}+
                </div>
              </motion.div>
              <p className="font-medium">Projecten gerealiseerd</p>
            </div>
            <div className="flex flex-col gap-2">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="text-accent text-5xl font-medium font-montserrat h-12 flex ">
                  {isInView ? <Counter from={0} to={6} /> : null}
                </div>
              </motion.div>
              <p className="font-medium">Specialisten in het team</p>
            </div>
            <div className="flex flex-col gap-2">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="text-accent text-5xl font-medium font-montserrat h-12 flex ">
                  {isInView ? <Counter from={0} to={80} /> : null}+
                </div>
              </motion.div>
              <p className="font-medium">Tevreden klanten</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-end justify-end font-montserrat">
          <a href="">
            <p className="underline underline-offset-4 decoration-accent decoration-2 ">
              OVER ONS
            </p>
          </a>
        </div>
      </section>
      <section
        id="projects"
        className=" flex flex-col gap-20 min-h-screen w-2/3 mx-auto"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-accent ">Mosa projecten</p>
          <h1 className="text-xl">Ons meest recente werk</h1>
        </div>
        <div className="flex-col md:flex-row flex items-center justify-center gap-5">
          <ProjectCard slug="villa" />
          <ProjectCard slug="renovatie" />
          <ProjectCard slug="appartement" />
          <ProjectCard slug="villa" />
        </div>
        <div className="w-full flex items-end justify-end font-montserrat">
          <a href="">
            <p className="underline underline-offset-4 decoration-accent decoration-2">
              MEER PROJECTEN
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
