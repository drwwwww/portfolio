"use client";
import { motion } from "motion/react"
import Link from "next/link";

export default function Tab3() {
  return (
    <motion.div
            >
                <div role="tablist" className="tabs tabs-border tabs-lg align-middle justify-center bg-transparent">
                    <Link role="tab" href="/" className="tab">Projects</Link>
                    <Link role="tab" href="/skills" className="tab">Skills</Link>
                    <Link role="tab" href="/certs" className="tab tab-active">Certifications</Link>
                </div>
            </motion.div>
  );
}
