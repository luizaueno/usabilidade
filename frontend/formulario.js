function Cadastrar() {
    const msg = document.querySelector(".mensagem") /* pega a div mensagem */
    msg.style.display = "block"; /*mostra a div */
    
    setTimeout(() => {
    msg.style.display = "none";
}, 5000); // desaparece depois de 5 segundos
}

