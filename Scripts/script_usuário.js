const btnAgendar = document.getElementById("novoAgendamento");
const btnStatus = document.getElementById("status");
document.querySelector(".agendamento").style.display = "none";


function novoAgendamento(){
    document.querySelector('table').style.display = "none"

    document.querySelector(".agendamento").style.display = "block"

    btnAgendar.classList.remove('btnNselecionado')
    btnAgendar.classList.add('btnSelecionado')
    btnStatus.classList.remove('btnSelecionado')
    btnStatus.classList.add('btnNselecionado')

}
btnAgendar.onclick= novoAgendamento;

function statusAgendamentos (){
    document.querySelector('table').style.display = "block"

    document.querySelector(".agendamento").style.display = "none"

    btnStatus.classList.remove('btnNselecionado')
    btnStatus.classList.add('btnSelecionado')
    btnAgendar.classList.remove('btnSelecionado')
    btnAgendar.classList.add('btnNselecionado')

}
btnStatus.onclick= statusAgendamentos;


document.querySelectorAll('[palmeiras]').forEach(folder => {
    folder.onclick = function (e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none';
    }
})

const PS = document.getElementById("pSeleção");

function aa(){
    alert("oi");
}
PS.onclick = aa;


