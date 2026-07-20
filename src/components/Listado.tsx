function ListaUsuarios() {
	const usuarios = ["Ana", "Hugo","Elena"];
	return(
		<ul>
			{usuarios.map((usuario, index) => (
				<li key={index}>{usuario}</li>
			))}
		</ul>
	);
}
export default ListaUsuarios;