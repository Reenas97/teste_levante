function mostraralerta(event, mensagem) {
    event.stopImmediatePropagation()
    alert(mensagem);
}

function entrarFacebook(event){
    event.stopImmediatePropagation();
    window.location.href = "https://pt-br.facebook.com/";
}

function entrarTwitter(event){
    event.stopImmediatePropagation();
    window.location.href = "https://twitter.com/";
}

function entrarInstagram(event){
    event.stopImmediatePropagation();
    window.location.href = "https://www.instagram.com/";
}

function mostraBusca(){
    const barraBusca = document.getElementById("divBusca");
    const botaoBusca = document.getElementById("btnBusca");
    if (barraBusca.style.display != "flex"){
        barraBusca.style.display="flex";
        botaoBusca.style.display="none";
    }    
}

function escondeBusca(){
    const barraBusca = document.getElementById("divBusca");
    const botaoBusca = document.getElementById("btnBusca");
    if (barraBusca.style.display == "flex"){
        barraBusca.style.display="none";
        botaoBusca.style.display="flex";
    }    
}

function mostraMenu(){
    const menu = document.getElementById("menu600");
    if (menu.style.display !="flex") {
        menu.style.display ="flex";
    } else {
        menu.style.display ="none";
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 600) {
        document.getElementById("menu600").style.display="none"
    }
}, true);