const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")
const img = window.document.getElementById("img")


nao.addEventListener("click", clicou)
let click = -1
function clicou(){
    click++
    if(click == 0){
        sim.style.transform="translete(+95px)"
        nao.style.transform="translate(-150px, -100px)"
    }if(click == 1){
        nao.style.transform="translate(110px, +150px)"
    }
    if(click == 2){
        nao.style.transform="translate(-225px, +100px)"
    }
    if(click == 3){
        nao.style.transform="translate(-225px, -150px)"
    }
    if(click == 4){
        nao.style.transform="translate(+35px, +100px)"
    }
    if(click == 5){
        nao.style.transform="translate(+35px, -50px)"
    }
    if(click == 6){
        nao.style.transform="translate(-225px, +50px)"
    }
    if(click == 7){
        nao.style.transform="translate(-225px, -150px)"
       click = -1
    }

}
nao.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+95px)"
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

sim.addEventListener("click", clicar)

function clicar(){
    img.innerHTML = '<img src="img/tanks.png" width="25%">'
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"

    img.style.opacity= 1;

    setTimeout(function(){
        img.style.opacity = 0;
      }, 3000 )
    
}