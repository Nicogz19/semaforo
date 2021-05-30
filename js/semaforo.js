function verde() {
	var c = document.getElementById("verde");
	c.className = "verdeEncendido";
}

verde();
setInterval(cambioColoresSemaforo, 3000);

function cambioColoresSemaforo(){
	var rojo = document.getElementById("rojo");
	var amarillo = document.getElementById("amarillo");
	var verde = document.getElementById("verde");

	// si esta el color verde encendido lo apago cambiandole la clase de css y enciendo el color amarillo
	if(verde.className == "verdeEncendido"){
		verde.className = "verde";
		amarillo.className = "amarilloEncendido";
	} else if(amarillo.className == "amarilloEncendido"){
		rojo.className = "rojoEncendido";
		amarillo.className = "amarillo";
	} else if(rojo.className = "rojoEncendido"){
		verde.className = "verdeEncendido"
		rojo.className = "rojo";
	}
}