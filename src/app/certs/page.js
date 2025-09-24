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
                <div className="grid grid-cols-2 gap-4 mx-30 mb-4 mt-2 max-sm:gap-1 max-sm:mx-5">
                
                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-1">
                <div className="card-body">
                    
                    <h2 className="card-title text-2xl"><img width="50" height="50" src="/comp.svg"></img>CompTIA: IT Fundamentals Pro</h2>
                    
                </div>
                </div>

                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-1">
                <div className="card-body">
                    
                    <h2 className="card-title text-2xl"><img width="50" height="50" src="/net.svg"></img>CompTIA: Network Pro</h2>
                    
                </div>
                </div>

                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-1">
                <div className="card-body">
                    
                    <h2 className="card-title text-2xl"><img width="50" height="50" src="/sec.svg"></img>CompTIA: Security Pro</h2>
                    
                </div>
                </div>
                </div>
                </motion.div>
                </div>
    </div>
  );
}