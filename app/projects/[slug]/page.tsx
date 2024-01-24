"use client";
import React, { use, useEffect, useRef, useState } from "react";
import projects from "../../data/projects.json";
import { title } from "process";
import { stringify } from "querystring";

interface ProjectProps {
  params: { slug: string };
}

interface ProjectDetails {
  title: string;
  tags: string[];
  year: string;
  beforeImages: string[];
  afterImages: string[];
}

export default function ProjectDetail({ params }: ProjectProps) {
  const projectData: ProjectDetails = (projects as any)[params.slug];

  const [view, setView] = useState(true);
  const [mainImage, setMainImage] = useState(projectData.afterImages[0]);

  const handleClick = () => {
    if (view) {
      setMainImage(projectData.beforeImages[0]);
    } else {
      setMainImage(projectData.afterImages[0]);
    }
    setView(!view);
  };

  const handleImage = (source: string) => {
    setMainImage(source);
  };

  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-start font-source pb-24">
      <section className="bg-grey h-96 w-full text-white flex flex-col items-center justify-center pb-6 pt-14">
        <div className="w-2/3 flex items-start justify-start font-montserrat md:px-32">
          <a href="">
            <p className="underline underline-offset-4 decoration-accent decoration-2">
              Alle projecten
            </p>
          </a>
        </div>
        <div className="pt-20 w-2/3 md:px-32">
          <div className="flex flex-row items-center gap-8 w-full font-medium font-montserrat text-2xl">
            {projectData.title}
            <hr className="border-accent border-2 w-full max-w-[70%]" />
            {projectData.year}
          </div>
          <div className="flex items-center uppercase gap-4 pt-4">
            {projectData.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="border-[1px] py-2 px-4 rounded-full text-sm flex items-center justify-center"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-evenly w-2/3 px-32 pt-20 gap-10 h-[850px]">
        <div className="w-[60%]">
          <div className="flex items-center gap-11 uppercase pb-8 ">
            <p
              onClick={handleClick}
              className={`${
                view ? "underline text-grey" : "no-underline text-grey/50"
              } hover:text-grey hover:cursor-pointer underline-offset-4 decoration-accent decoration-2 font-medium font-source transition-all duration-300 ease-in-out`}
            >
              resultaat
            </p>
            <p
              onClick={handleClick}
              className={`${
                !view ? "underline text-grey" : "no-underline text-grey/50"
              } hover:text-grey hover:cursor-pointer underline-offset-4 decoration-accent decoration-2 font-medium font-source transition-all duration-300 ease-in-out`}
            >
              start situatie
            </p>
          </div>
          {view ? (
            <div>
              <div
                className={`] bg-cover bg-center w-full h-[550px] rounded-t-lg`}
                style={{
                  backgroundImage: `url(/projectImages/${mainImage})`,
                }}
              ></div>
              <div className="flex items-center gap-7 py-7  w-full bg-grey px-7 rounded-b-lg">
                {projectData.afterImages.map((image, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleImage(image)}
                      className={`h-32 w-32  bg-cover hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-md shadow-black/50`}
                      style={{
                        backgroundImage: `url(/projectImages/${image})`,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <div
                className={` bg-cover bg-center w-full h-[550px] rounded-t-lg`}
                style={{
                  backgroundImage: `url(/projectImages/${mainImage})`,
                }}
              ></div>
              <div className="flex items-center gap-7 py-7  w-full bg-grey px-7 rounded-b-lg">
                {projectData.beforeImages.map((image, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleImage(image)}
                      className={`h-32 w-32  bg-cover hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-md`}
                      style={{
                        backgroundImage: `url(/projectImages/${image})`,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="w-[40%] h-full flex flex-col items-start justify-start pt-16 gap-14">
          <div className="w-full flex items-center justify-start border-b-2 border-accent pb-4">
            <h1 className="font-montserrat font-semibold text-xl">Details</h1>
          </div>

          <div className="w-full flex items-center justify-start">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic
              facere ipsa magni sit nisi, deleniti quis itaque maxime quasi
              quaerat voluptates in asperiores. Necessitatibus dicta aperiam
              quae doloremque quaerat. niti quis itaque maxime quasi quaerat
              voluptates in asperiores. Necessitatibus dicta psum dolor sit amet
              consectetur adipisicing elit. Alias hic facere ipsa m{" "}
            </p>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <ul>
              <li>keypoint</li>
              <li>keypoint</li>
              <li>keypoint</li>
            </ul>
            <ul>
              <li>keypoint</li>
              <li>keypoint</li>
              <li>keypoint</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
