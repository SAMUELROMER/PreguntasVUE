

function categorias() {
	categoria = document.getElementById("categoria").value;
	descripcion = document.getElementById("descripcion").value;
	if( categoria == null || categoria.length == 0 || /^\s+$/.test(categoria) ){
		alert('Debe escribir una categoria')
		return false
	}else if ( descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion) ){
		alert('Debe escribir una breve descripcion')
		return false
	}else{
		registrarCategoria();
		limpiarFormulario3();
	}
}
function registrarCategoria(/*boton = ""*/){
	//alert(boton);
	//if(boton == ""){
	    var categoria = document.getElementById('categoria').value;
	    var descripcion = document.getElementById('descripcion').value;
	    var filaNueva = document.createElement("TR");//creando una nueva fila
	    filaNueva.innerHTML += "<td>" + contarFilas() + "</td> <td>"+categoria+"</td><td style='text-align:justify;'><p>" + descripcion+"</p></td><td><button onclick='eliminarFila(this)'><input type='button' value='Eliminar';></button><button onclick='editar2(this)'><input type='button' value='editar'></button></td>";
	    document.getElementById("tbody").appendChild(filaNueva);
	/*}else{
		alert(boton)
		fila = boton.parentNode.parentNode;
		fila.childNodes[3].innerHTML = document.getElementById('categoria').value;
		fila.childNodes[5].innerHTML = document.getElementById('descripcion').value;
		document.getElementById("guardar").setAttribute("onclick","categorias()");
		limpiarFormulario3();
	}*/

}
function editar(boton){
	nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
	//nodo = nodo.childNodes[1].textContent;
	document.getElementById('categoria').value = nodo.childNodes[3].textContent;
	document.getElementById('descripcion').value = nodo.childNodes[5].textContent;
	//document.getElementById("guardar").setAttribute("onclick","registrarCategoria('"+boton+"')");

	eliminarFila(boton);
	
		
    //nodo.parentNode.removeChild(nodo);
}

function editar2(boton){
	nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
	//nodo = nodo.childNodes[1].textContent;
	document.getElementById('categoria').value = nodo.childNodes[2].textContent;
	document.getElementById('descripcion').value = nodo.childNodes[3].textContent;
	//document.getElementById("guardar").setAttribute("onclick","registrarCategoria('"+boton+"')");

	eliminarFila(boton);
	
		
    //nodo.parentNode.removeChild(nodo);
}


function contarFilas(){
  var filas = document.getElementById("tabla").getElementsByTagName("tr");
  return filas.length;
}

function enumerarFilas(){
  nfilas = contarFilas();
  for (var y = 0; y < nfilas; y++){
    tabla = document.getElementById("tabla");
    if( y != 0){
      tabla.rows[y].cells[0].innerHTML = y;
    }
  }
}
function limpiarFormulario3(){
  document.getElementById('categoria').value="";
  document.getElementById('descripcion').value="";
}
function eliminarFila(boton){
    nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
    nodo.parentNode.removeChild(nodo);
    enumerarFilas();
}
function eliminarFila1(boton){
    nodo = boton.parentNode.parentNode;//la fila TR donde se encuentra el boton
    nodo.parentNode.removeChild(nodo);
}




