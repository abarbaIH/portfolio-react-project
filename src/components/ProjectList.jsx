import React from "react";
import { projectsData } from "../data/projects";
import { Link } from "react-router-dom";

const ProjectList = ({ limit }) => {
    return (
        <div className="page">
            <section className="projects">
                {!Array.isArray(projectsData) ? (
                    <span>Cargando...</span>
                ) : (
                    projectsData.slice(0, limit).map((project) => (
                        <article className="project-item" key={project.id}>
                            <div className="mask">
                                <img src={project.image} alt="" />
                            </div>
                            <span>{project.category}</span>
                            <h2>
                                <Link to={"/proyecto/" + project.id}>{project.title}</Link>
                            </h2>
                            <h3>{project.tools.map((tool) => tool + " / ")}</h3>
                        </article>
                    ))
                )}
            </section>
        </div>
    )
}

export default ProjectList