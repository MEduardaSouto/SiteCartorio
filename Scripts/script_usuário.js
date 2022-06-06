
/**Troca de botões */
const btnAgendar = document.getElementById("novoAgendamento");
const btnStatus = document.getElementById("status");
document.querySelector(".agendamento").style.display = "none";

function novoAgendamento(){

    document.getElementById("tabela").style.display = "none"

    document.querySelector(".agendamento").style.display = "block"

    btnAgendar.classList.remove('btnNselecionado')
    btnAgendar.classList.add('btnSelecionado')
    btnStatus.classList.remove('btnSelecionado')
    btnStatus.classList.add('btnNselecionado')

}
btnAgendar.onclick= novoAgendamento;


function statusAgendamentos (){

    document.querySelector('#tabela').style.display = "block"

    document.querySelector(".agendamento").style.display = "none"

    btnStatus.classList.remove('btnNselecionado')
    btnStatus.classList.add('btnSelecionado')
    btnAgendar.classList.remove('btnSelecionado')
    btnAgendar.classList.add('btnNselecionado')

}
btnStatus.onclick= statusAgendamentos;



/**descer informações dos serviços */
document.querySelectorAll('[palmeiras]').forEach(folder => {
    folder.onclick = function (e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none';
    }
})



/**Serviço de cada município */
const localiza = document.getElementsByClassName("localizaçãoCartório");
const hr = document.getElementsByClassName("horário");

function mudarServiço(município){

    if(município=="mucu"){
        document.querySelector(".notas").style.display = "block";
        document.querySelector(".protesto").style.display = "block";
        document.querySelector(".jurídicas").style.display = "none";
        document.querySelector(".hipotecas").style.display = "none";
        document.querySelector(".registroCivil").style.display = "none";

        for (let i = 0; i < localiza.length; ++i) {
            localiza[i].innerHTML = "Localização do cartório: Travessa Rua da Várzea, Galeria Sala 1, Cidade Histórica";
            hr[i].innerHTML = "Horário de funcionamento: 07 às 13hr";
    
        }
    }
    else if (município=="pal"){
        document.querySelector(".hipotecas").style.display = "block";
        document.querySelector(".notas").style.display = "block";
        document.querySelector(".registroCivil").style.display = "block";
        document.querySelector(".jurídicas").style.display = "block";
        document.querySelector(".hipotecas").style.display = "block";

        for (let i = 0; i < localiza.length; ++i) {
            localiza[i].innerHTML = "Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro";
            hr[i].innerHTML = "Horário de funcionamento: 08 às 14hr";
    
        }
    }
    else if (município=="ira"){
        document.querySelector(".registroCivil").style.display = "block";
        document.querySelector(".protesto").style.display = "block";
        document.querySelector(".notas").style.display = "block";
        document.querySelector(".hipotecas").style.display = "none"
        document.querySelector(".jurídicas").style.display = "none"

        for (let i = 0; i < localiza.length; ++i) {
            localiza[i].innerHTML = "Localização do cartório: RO BR 122, s/n, centro";
            hr[i].innerHTML = "Horário de funcionamento: 08 às 14hr";
    
        }
    
    }
    else{
        document.querySelector(".registroCivil").style.display = "block";
        document.querySelector(".notas").style.display = "block";
        document.querySelector(".jurídicas").style.display = "none"
        document.querySelector(".hipotecas").style.display = "none"
        document.querySelector(".protesto").style.display = "none"

        for (let i = 0; i < localiza.length; ++i) {
            localiza[i].innerHTML = "Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1";
            hr[i].innerHTML = "Horário de funcionamento: 08 às 14hr";
    
        }
    }
}



/**descer as informações de status de agendamento */
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

/**Iniciar um agendamento */
const título = document.getElementById("título");
const btn = document.getElementsByClassName("BtIniciarAgen")
const serviços = document.querySelectorAll('[palmeiras]')

function escolhido(){
    
    título.innerHTML = "MUNICÍPIO E SERVIÇO ESCOLHIDO";

    for(let i=0; i<serviços.length; i++)
    serviços[i].style.display = "none"

}





