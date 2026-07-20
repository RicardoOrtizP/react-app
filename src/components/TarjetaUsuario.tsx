import { useEffect } from "react";

function TarjetaUsuario(props:any) {
    useEffect(() => {
        console.log("Renderizando componente TarjetaUsuario")
    }, []);
    return (
        <div className="tarjeta">
            <h1>{props.nombre}</h1>
            <p>Trabaja como: {props.profesion}</p>
        </div>
    );
}

export default TarjetaUsuario;