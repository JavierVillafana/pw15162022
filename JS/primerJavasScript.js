
function quitarSITEC(){
    let pregunta = confirm("Segudor de quitar SITEC?");
    if(pregunta == true){
        alert("SITEC Borraddo...(");
        let chi = document.getElementById("Sitec");

        chi.innerHTML = "Chale";
    }

}

function funcionAlerta(){
    alert("Di click");
}

//alert("Alerta en archivo externo javascript")

