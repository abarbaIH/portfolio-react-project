import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

const Home = () => {
    return (
        <div className="home">
            <h1>
                Hola! soy Álvaro Barba y soy <strong>Desarrollador Web</strong> en Madrid.
                Ofrezco mis servicios de <strong> programación</strong> y desarrollo en todo
                tipo de proyectos web.
            </h1>
            <h2 className="title">
                Te ayudo a crear tu sitio o aplicación web, tener más
                visibilidad y relevancia en internet.  <Link to="/contacto">Contacta conmigo</Link>
            </h2>
            <section className="last-works">
                <h2 className="heading">Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos de desarrollo web</p>
                <ProjectList limit="2" />
            </section>
        </div>
    )
}

export default Home