"use client";
import { motion } from "motion/react"
import Link from "next/link";

export default function Tab() {
  return (
    <motion.div
            >
                <div role="tablist" className="tabs tabs-border tabs-lg align-middle justify-center bg-transparent">
                    <Link role="tab" href="/" className="tab tab-active">Projects</Link>
                    <Link role="tab" href="/skills" className="tab">Skills</Link>
                    <Link role="tab" href="/certs" className="tab">Certifications</Link>
                </div>
            </motion.div>
  );
}
