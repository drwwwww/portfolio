"use client";
import { motion } from "motion/react"

export default function Projects() {
  return (
        
            <div className="container bg-base-100  p-1">
                <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-2 gap-4 mx-30 mb-4 mt-2">
                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Plane" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                        <span className="badge badge-xs badge-soft badge-success mt-1">SciKit Learn</span>
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    <span className="badge badge-xs badge-soft badge-info mt-1">React.JS</span>
                    </div>
                    <h2 className="card-title">Airline Flight Delay Predictor (In Progress)</h2>
                    <p>The Airline Flight Delay Predictor uses machine learning to estimate the chance of a flight being delayed. It analyzes factors like flight history, weather, and airport activity to give travelers an idea of whether their flight will run on time. Built with Python and SQL, it highlights my skills in working with data, training models, and turning information into useful predictions.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/Airline-Flight-Delay-Predictor-Backend" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>



                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://uphhejlgraupnzgkehgd.supabase.co/storage/v1/object/public/backsplashes/igextra.png"
                    alt="Mendr" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-warning mt-1">HTML/CSS</span>
                    <span className="badge badge-xs badge-accent mt-1">Javascript</span>
                    <span className="badge badge-xs badge-soft badge-info mt-1">React.JS</span>
                    </div>
                    <h2 className="card-title">Mendr</h2>
                    <p>Mendr is a full-stack repair management platform built with React, Next.js, Tailwind, Flask, SQL, and Supabase, deployed on Vercel with a professional domain and serving live users. It manages customer orders, device details, and workflows through a responsive frontend and a connected backend, using Supabase PostgreSQL for data and Edge Functions to automate tasks like sending confirmation emails via Resend. This project highlights my proficiency in Python, SQL, and modern web frameworks, along with experience in deploying scalable, production-ready applications.</p>
                    <div className="justify-end card-actions">
                        <a href="https://mendr.org" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>



                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://github.com/drwwwww/MeP3/blob/main/M.png?raw=true"
                    alt="MeP3" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    </div>
                    <h2 className="card-title">MeP3</h2>
                    <p>MeP3 is a desktop YouTube-to-MP3 converter built with Python, customtkinter, pytubefix, moviepy, and ffmpeg, packaged into a standalone executable with auto-py-to-exe. It features a clean, user-friendly interface, a reliable backend for media processing, and resource bundling to ensure portability across systems. The project highlights my Python proficiency, ability to integrate third-party libraries, and skill in creating polished, distributable applications for real users.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/MeP3" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>


                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Data" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-info mt-1">SQL</span>
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    </div>
                    <h2 className="card-title">Data Probe</h2>
                    <p>My Data Probe is a data-driven application built with Python, Flask, SQL, and Supabase, designed to collect user input through typing or voice, then generate and export structured .xml datasheets. It integrates AI assistance for smarter data handling, while the Next.js/React frontend ensures an interactive, modern interface. This project demonstrates my strengths in full-stack development, database management, and AI integration, as well as my ability to design scalable tools for real-world use cases.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/data-probe" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>


                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Data" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-info mt-1">SQL</span>
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    </div>
                    <h2 className="card-title">Student Grade Database</h2>
                    <p>The Student Grade Database is a management tool built with Python, Flask, SQL, and Supabase, designed to store, update, and retrieve student records efficiently. It provides a clean interface for entering grades and calculating performance metrics while maintaining secure, structured data storage. This project highlights my strengths in Python, SQL, and backend logic, along with database design and integration skills.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/student-grade-database-manager" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>


                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Atlanta Skyline" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-success mt-1">REST API</span>
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    </div>
                    <h2 className="card-title">Local Explorer</h2>
                    <p>Local Explorer is a Python command-line application that integrates the Weather API, Ticketmaster API, and NewsAPI to provide localized information in one place. Users can quickly check forecasts, discover nearby events, and read top headlines directly from the terminal. This project highlights my ability to work with multiple REST APIs, parse and present data effectively, and design useful CLI-based tools for real-world applications.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/local-explorer" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>


                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Theater" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-success mt-1">REST API</span>
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    </div>
                    <h2 className="card-title">Movie Lookup</h2>
                    <p>Movie Lookup is a web application built with React, Next.js, and Tailwind, connected to the OMDb API (Open Movie Database, which powers IMDb data) to fetch details such as titles, cast, release years, and ratings. With a clean, responsive interface, it allows users to search and explore film data in real time. This project highlights my skills in REST API integration, handling dynamic data, and building polished, user-friendly frontends.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/movie-lookup-project" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>

                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Notebook" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-row gap-1">
                    <span className="badge badge-xs badge-warning mt-1">HTML/CSS</span>
                    <span className="badge badge-xs badge-accent mt-1">Javascript</span>
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
                    </div>
                    <h2 className="card-title">Notes App</h2>
                    <p>The Notes Web App is a full-stack project built with React, Next.js, Tailwind, Flask, SQL, and Supabase, providing users with a responsive interface for creating, editing, and managing personal notes. Featuring secure authentication and real-time updates, it leverages REST APIs for smooth client–server communication. This project highlights my full-stack development skills, API integration, and focus on user experience.</p>
                    <div className="justify-end card-actions">
                        <a href="https://github.com/drwwwww/notes-app-back-end" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>
                </div>
                </motion.div>
                </div>
    
  );
}