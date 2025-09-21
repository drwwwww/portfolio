"use client";
import { motion } from "motion/react"

export default function Projects() {
  return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-2 gap-4 mx-50 mb-4 mt-2">
                <div className="card card-sm bg-black/30 backdrop-blur-md border border-black/20 rounded-lg shadow-md p-5">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Plane" />
                </figure>
                <div className="card-body">
                    <span className="badge badge-xs badge-secondary mt-1">Python</span>
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
                    <h2 className="card-title">Mendr</h2>
                    <p></p>
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
                    <h2 className="card-title">MeP3</h2>
                    <p></p>
                    <div className="justify-end card-actions">
                        <a href="" className="btn btn-primary">Link</a>
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
                    <h2 className="card-title">Data Probe</h2>
                    <p></p>
                    <div className="justify-end card-actions">
                        <a href="" className="btn btn-primary">Link</a>
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
                    <h2 className="card-title">Student Grade Database</h2>
                    <p></p>
                    <div className="justify-end card-actions">
                        <a href="" className="btn btn-primary">Link</a>
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
                    <h2 className="card-title">Local Explorer</h2>
                    <p></p>
                    <div className="justify-end card-actions">
                        <a href="" className="btn btn-primary">Link</a>
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
                    <h2 className="card-title">Movie Lookup</h2>
                    <p></p>
                    <div className="justify-end card-actions">
                        <a href="" className="btn btn-primary">Link</a>
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
                    <h2 className="card-title">Notes App</h2>
                    <p></p>
                    <div className="justify-end card-actions">
                        <a href="" className="btn btn-primary">Link</a>
                    </div>
                </div>
                </div>
                </div>
            </motion.div>
    
  );
}