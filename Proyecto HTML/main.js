//creo una funcion que se ejecutara cuando haga click en el boton
function muestra_oculta(id){
    //declaro la funcion y paso por pararmetro el selector de referencia que quiero ocultar/mostrar
    let div= document.getElementById (id);
    //uso el condicinal if para saber si el DIV esta oculto o i esta visible
    if (div.style.display =="none"){
        div.style.display ="flex"
} 

else {
    div.style.display="none";
} 
} 