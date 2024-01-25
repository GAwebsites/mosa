"use client";
import React, { use, useEffect, useRef } from "react";
import { BsFilterRight } from "react-icons/bs";
import SortButton from "../components/projects/sortButton";
import ProjectCard from "../components/projects/projectCard";

export default function Projects() {
  return (
    <main className="min-h-screen w-screen flex flex-col py-24 mx-auto">
      <section className="flex flex-col w-2/3 md:px-32">
        <h1 className="text-4xl font-semibold text-grey">Onze projecten</h1>
        <div className="text-grey text-md w-full flex flex-row items-start justify-between pt-20">
          <div className="flex flex-row items-center gap-5 max-w-[50%] flex-wrap">
            <SortButton title="alle" tag="all" />
            <SortButton title="nieuwbouw" tag="nieuwbouw" />
            <SortButton title="appartement" tag="appartement" />
            <SortButton title="werf" tag="werf" />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <BsFilterRight className="text-xl text-accent" />
            <p className="uppercase">filter</p>
          </div>
        </div>
      </section>
      <section className=" grid-cols-1 grid md:grid-cols-4 place-items-center gap-7 pt-14 w-2/3 md:px-32">
        <ProjectCard slug="villa" />
        <ProjectCard slug="renovatie" />
        <ProjectCard slug="appartement" />
        <ProjectCard slug="villa" />
        <ProjectCard slug="villa" />
        <ProjectCard slug="renovatie" />
        <ProjectCard slug="appartement" />
        <ProjectCard slug="villa" />
        <ProjectCard slug="villa" />
        <ProjectCard slug="renovatie" />
        <ProjectCard slug="appartement" />
        <ProjectCard slug="villa" />
      </section>
    </main>
  );
}
