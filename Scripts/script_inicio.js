function redirecionar() {
    window.location.assign()
}






const seta = document.querySelectorAll(".seta")

document.querySelectorAll('[palmeiras]').forEach(folder => {
    folder.onclick = function (e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none';
    }
})






const login = document.getElementById("login");
const btnEntrar = document.getElementById("btnEntrar")

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function redirecionarUsuário(){
    window.location.href = " ";
}
btnEntrar.onclick = redirecionarUsuário;
closeForm();






const btnP = document.getElementById("btnPalmeiras");
const btnM = document.getElementById("btnMucugê");
const btnI = document.getElementById("btnIraquara");
const btnC = document.getElementById("btnCaeté");

function Mucugê() {
    document.querySelector(".notas").style.display = "block";
    document.querySelector(".protesto").style.display = "block";
    document.querySelector(".jurídicas").style.display = "none";
    document.querySelector(".hipotecas").style.display = "none";
    document.querySelector(".registroCivil").style.display = "none";

    btnM.classList.remove('btnNselecionado');
    btnM.classList.add('btnSelecionado');

    btnP.classList.remove('btnSelecionado');
    btnC.classList.remove('btnSelecionado');
    btnI.classList.remove('btnSelecionado');

    btnP.classList.add('btnNselecionado');
    btnC.classList.add('btnNselecionado');
    btnI.classList.add('btnNselecionado');

}
btnM.onclick = Mucugê;


function Palmeiras() {
    document.querySelector(".hipotecas").style.display = "block";
    document.querySelector(".notas").style.display = "block";
    document.querySelector(".registroCivil").style.display = "block";
    document.querySelector(".jurídicas").style.display = "block";
    document.querySelector(".hipotecas").style.display = "block";

    btnP.classList.remove('btnNselecionado');
    btnP.classList.add('btnSelecionado');
    
    btnM.classList.remove('btnSelecionado');
    btnC.classList.remove('btnSelecionado');
    btnI.classList.remove('btnSelecionado');

    btnM.classList.add('btnNselecionado');
    btnC.classList.add('btnNselecionado');
    btnI.classList.add('btnNselecionado');

}
btnP.onclick = Palmeiras;


function Iraquara() {
    document.querySelector(".registroCivil").style.display = "block";
    document.querySelector(".protesto").style.display = "block";
    document.querySelector(".notas").style.display = "block";
    document.querySelector(".hipotecas").style.display = "none"
    document.querySelector(".jurídicas").style.display = "none"

    btnI.classList.remove('btnNselecionado');
    btnI.classList.add('btnSelecionado');

    btnP.classList.remove('btnSelecionado');
    btnC.classList.remove('btnSelecionado');
    btnM.classList.remove('btnSelecionado');

    btnP.classList.add('btnNselecionado');
    btnC.classList.add('btnNselecionado');
    btnM.classList.add('btnNselecionado');
}
btnI.onclick = Iraquara;


function Caeté() {
    document.querySelector(".registroCivil").style.display = "block";
    document.querySelector(".notas").style.display = "block";
    document.querySelector(".jurídicas").style.display = "none"
    document.querySelector(".hipotecas").style.display = "none"
    document.querySelector(".protesto").style.display = "none"

    btnC.classList.remove('btnNselecionado');
    btnC.classList.add('btnSelecionado');

    btnP.classList.remove('btnSelecionado');
    btnM.classList.remove('btnSelecionado');
    btnI.classList.remove('btnSelecionado');

    btnP.classList.add('btnNselecionado');
    btnM.classList.add('btnNselecionado');
    btnI.classList.add('btnNselecionado');
}
btnC.onclick = Caeté;








