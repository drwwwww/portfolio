"use client";
import { motion } from "motion/react"
import Intro from "../components/intro";
import Tab3 from "../components/tab3";

export default function Certs() {
  return (
    <div style={{ backgroundImage: "url('/red.png')" }}>
        <Intro></Intro>
        <Tab3></Tab3>
        <div className="container bg-base-100  p-1">
                <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-2 gap-4 mx-30 mb-4 mt-2">
                
                </div>
                </motion.div>
                </div>
    </div>
  );
}