document.getElementById("cambioTema").addEventListener("click", function(){
    if (document.getElementById("body").classList.contains('claro')) {
        document.getElementById("body").classList.remove("claro");
        document.getElementById("body").classList.add("oscuro");
    }
    else {
        document.getElementById("body").classList.remove("oscuro");
        document.getElementById("body").classList.add("claro");
    }
});

/* Para cambiar el tamaño de la barra de desplazamiento */
document.querySelector(".barraDeProgreso").addEventListener("click",function(){
    document.querySelector(".barra").style.width = "30%";
});
