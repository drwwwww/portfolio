"use client";
import Image from "next/image";
import Intro from "./components/intro";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <Projects></Projects>
    </div>
  );
}
