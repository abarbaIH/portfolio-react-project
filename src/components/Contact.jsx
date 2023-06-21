import React from "react";

const Contact = () => {
    return (
        <div className="page">
            <h1 className="heading">Contacto</h1>
            <form className="contact" action="mailto:abarba.lod@gmail.com">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellidos" />
                <input type="text" placeholder="email" />
                <textarea placeholder="motivo de contacto"></textarea>
                <input type="submit" value="Enviar" />
            </form>

        </div>
    )
}

export default Contact