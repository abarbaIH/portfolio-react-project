import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projects";


const Project = () => {

    const params = useParams()
    const [projectState, setProjectState] = useState({})

    useEffect(() => {
        let project = projectsData.filter(p => p.id == params.id)
        setProjectState(project[0])
    }, [])

    return (
        <div className="page page-project">
            <div className="mask">
                <img src={projectState.image} alt="" />
            </div>
            <h1 className="heading">{projectState.title}</h1>
            <ul>
                {!projectState.tools ? <li>Cargando...</li> :
                    projectState.tools.map(tool => {
                        return <li>{tool}</li>
                    })}
            </ul>
            <p>{projectState.description}</p>
            <a href={projectState.projectLink} target="_blank">Ir al proyecto</a>

        </div>
    )
}

export default Project