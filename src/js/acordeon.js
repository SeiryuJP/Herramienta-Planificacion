document.querySelectorAll("div.acordeon h3").forEach(titulo => {
    titulo.addEventListener("click", function(){
        if( this.nextElementSibling.style.display == "block" ){
            this.nextElementSibling.style.display = "none";
        }else{
            this.nextElementSibling.style.display = "block";
        }
    });
});
