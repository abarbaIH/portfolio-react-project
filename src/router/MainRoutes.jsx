import React from "react";
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Curriculum from "../components/Curriculum";
import Contact from "../components/Contact";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Project from "../components/Project";

const MainRoutes = () => {
    return (
        <BrowserRouter>

            <HeaderNav />

            <section className="content">

                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/proyecto/:id" element={<Project />} />
                    <Route path="*" element={<h1 className="heading">Error 404</h1>} />

                </Routes>

            </section>

            <Footer />

        </BrowserRouter>
    )
}

export default MainRoutes