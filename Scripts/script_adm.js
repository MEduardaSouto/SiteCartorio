function expandir() {

    let show = document.querySelectorAll("#exp_1");

    let infos = document.querySelectorAll("#inf4");

    for (let i = 0; i < show.length; ++i) {

        if (show[i].checked == true) {
            infos[i].style.display = "block";
        }
        else {
            infos[i].style.display = "none"
        }

    }
}


/*popup-login */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
closeForm();



/*sair do perfil */
const btnSair = document.getElementById("btnSair");

function sairPerfil() {
    window.location.href = " file:///C:/Users/gomes/OneDrive/%C3%81rea%20de%20Trabalho/RiseUp/index.html";
}
btnSair.onclick = sairPerfil;



/*alterar status */

function mudarCor(obj) {

    if (obj.value == "pendente") {
        obj.style.color = "red";
    }
    else if (obj.value == "concluido") {
        obj.style.color = "green";
    }
    else if (obj.value == "analise") {
        obj.style.color = "blue";
    }


}


/*popup sair do login */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
closeForm()
