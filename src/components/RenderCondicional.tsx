function ButtonAccess(props:any) {
	// props.conectado será true o false
	return (
		<div>
			{ props.conectado ? <button>Cerrar sesión</button> : <button>Iniciar Sesión</button> }
		</div>
	);
}

export default ButtonAccess;