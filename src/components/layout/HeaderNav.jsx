import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
    return (
        <header className="header">

            <div className="logo">
                <span>A</span>
                <h3>Álvaro Barba Portfolio</h3>
            </div>

            <nav>

                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/servicios">Servicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/curriculum">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contacto">Contacto</NavLink>
                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default HeaderNav