document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector('.info-perfil h2');
    const textoOriginal = titulo.innerText;
    titulo.innerText = "";
    
    let i = 0;
    function escribir() {
        if (i < textoOriginal.length) {
            titulo.innerText += textoOriginal.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    escribir();
});