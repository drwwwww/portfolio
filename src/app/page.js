"use client";
import Image from "next/image";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Tab from "./components/tab";

export default function Home() {
  return (
    <div style={{ backgroundImage: "url('/red.png')" }}>
      <Intro></Intro>
      <Tab></Tab>
      <Projects></Projects>
    </div>
  );
}
