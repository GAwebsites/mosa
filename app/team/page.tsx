"use client";
import { motion } from "framer-motion";
import React, { use, useEffect, useRef } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import TeamCard from "../components/team/teamCard";

export default function Projects() {
  return (
    <main className="min-h-screen w-full flex flex-col md:px-52 py-24 max-w-sm md:max-w-full font-source">
      <section className="w-full h-full flex flex-row items-start justify-center -space-x-48">
        <div className="w-1/2">
          <motion.div className="w-[400px] h-[550px] bg-red-950 shadow-xl relative">
            <motion.div className="w-full h-full  bg-accent left-10 top-10 shadow-xl absolute -z-50"></motion.div>
          </motion.div>
        </div>
        <div className="w-1/2 py-8">
          <h1 className="text-4xl font-semibold"> Dhr. Ozgur</h1>
          <h3 className="text-xs pt-2 font-normal uppercase text-accent">
            founder and ceo mosa bv.
          </h3>

          <h2 className="font-sm font-medium pt-16">About ozgur</h2>
          <p className="font-sm pt-8 leading-[200%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            tempore soluta eaque corrupti ab ea iusto animi ullam est voluptatem
            harum neque quam id veritatis nam repudiandae, error, possimus
            maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nostrum, perferendis. Voluptatem esse debitis minima nesciunt
            voluptate rerum recusandae quidem, libero ad veniam dignissimos
            dolorem provident quia, culpa aut! Vero, esse? id veritatis nam
            repudiandae, error, possimus maiores. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nostrum, perferendis. Voluptatem esse
            debitis minima nesciunt voluptate rerum recusandae quidem, libero ad
            veniam dignissimos dolorem provident quia.
          </p>
          <div className="pt-16 flex flex-row items-center justify-between w-full">
            <div className=" flex flex-row items-center justify-center gap-5 text-xl text-grey">
              <p className="text-sm uppercase text-black">socials</p>
              <AiOutlineInstagram className="hover:text-accent hover:cursor-pointer" />
              <RiFacebookBoxFill className="hover:text-accent hover:cursor-pointer" />
              <AiFillLinkedin className="hover:text-accent hover:cursor-pointer" />
            </div>
            <div className=" flex flex-row items-center justify-center gap-5 text-xl text-grey">
              <p className="text-sm uppercase text-black">contact</p>
              <AiOutlineMail className="hover:text-accent hover:cursor-pointer" />
              <AiOutlinePhone className="hover:text-accent hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-44 ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-accent font-light text-lg">
            Mensen om op te bouwen
          </p>
          <h1 className="text-2xl font-medium">Ontmoet het team achter Mosa</h1>
        </div>

        <div className="w-full grid grid-cols-4">
          <TeamCard name="Ozgur" title="Founder and CEO" />
        </div>
      </section>
    </main>
  );
}
