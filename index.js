$(function () {
   //Código aquí
   $("#accedeID").click(accedeIDcontenido);
   $("#crearElemento").click(creaElemento);
 });

function accedeIDcontenido(){
   $("h1#titulo").html("Accediendo elementos");
   $("h3#subtitulo").html("Por id, nombre de clase, atributo");
   $("h6#contenido").html("Accediendo por <strong>Por id</strong>");
   $("h6#contenido").append($(""));

}

function creaElemento(){
   $("h6#contenido").append($("<p>",{html:"<img src='images/porID.png' class='center'>"}));

}
