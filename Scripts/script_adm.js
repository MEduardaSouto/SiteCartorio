show = document.getElementById('inf1', 'inf2', 'inf3', 'inf4', 'inf5', 'inf6', 'inf7');

function inf1_show() {
    if (inf1.style.display == "block") {
        inf1.style.display = "none";
    } else {
        inf1.style.display = "block";
    }
}

function inf2_show() {
    if (inf2.style.display == "block") {
        inf2.style.display = "none";
    } else {
        inf2.style.display = "block";
    }
}

function inf3_show() {
    if (inf3.style.display == "block") {
        inf3.style.display = "none";
    } else {
        inf3.style.display = "block";
    }
}

function inf4_show() {
    if (inf4.style.display == "block") {
        inf4.style.display = "none";
    } else {
        inf4.style.display = "block";
    }
}

function inf5_show() {
    if (inf5.style.display == "block") {
        inf5.style.display = "none";
    } else {
        inf5.style.display = "block";
    }
}

function inf6_show() {
    if (inf6.style.display == "block") {
        inf6.style.display = "none";
    } else {
        inf6.style.display = "block";
    }
}

function inf7_show() {
    if (inf7.style.display == "block") {
        inf7.style.display = "none";
    } else {
        inf7.style.display = "block";
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
// const select = document.querySelectorAll(".status")
// console.log(select);

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

    /*for (let i = 0; i < select.length; ++i) {
        if (status == "pendente") {
            select[i].style.color = "red";
        }
        else if (status == "concluido") {
            select[i].style.color = "green";
        }
        else{
            select[i].style.color = "blue";
        }
    }*/



}