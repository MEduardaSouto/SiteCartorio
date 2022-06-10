
/*descer inoformações dos serviços */
document.querySelectorAll('[palmeiras]').forEach(folder => {

    folder.onclick = function (e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none';
    }
})


/*rolar página para  início */
$(document).ready(function () {

    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});

/*rolar página para localização */
$(document).ready(function () {

    $('.scrolllocal').click(function () {
        $('html, body').animate({ scrollTop: 3500 }, 1000);
        return false;
    });

});


/*informações de cada município */
const btnP = document.getElementById("btnPalmeiras");
const btnM = document.getElementById("btnMucugê");
const btnI = document.getElementById("btnIraquara");
const btnC = document.getElementById("btnCaeté");

const localiza = document.getElementsByClassName("localizaçãoCartório");
const hr = document.getElementsByClassName("horário");

const mapPalmeiras = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.1722466942848!2d-41.574793627819815!3d-12.515404943053182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769e024f6124433%3A0x7f2a3308c71a2e!2sPra%C3%A7a%20Dr.%20Jos%C3%A9%20Gon%C3%A7alves%2C%2011%20-%20Palmeiras%2C%20BA%2C%2046930-000!5e1!3m2!1spt-BR!2sbr!4v1654299087374!5m2!1spt-BR!2sbr"
const mapMucuge = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1109.7904368104585!2d-41.37214437079472!3d-13.008258592738018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7422f50779386c5%3A0x6808442d2f0459ed!2sR.%20da%20V%C3%A1rzea%20-%20Mucug%C3%AA%2C%20BA%2C%2046750-000!5e1!3m2!1spt-BR!2sbr!4v1654299323466!5m2!1spt-BR!2sbr"
const mapIraquara = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15596.06222256808!2d-41.62609476614261!3d-12.247225841931941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769c038012868ff%3A0xa8c901ac15d05990!2sIraquara%2C%20BA%2C%2046980-000!5e0!3m2!1spt-BR!2sbr!4v1654298253721!5m2!1spt-BR!2sbr"
const mapCaete = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.545586791256!2d-41.50036585197423!3d-12.610029979612843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7420fbe7e041115%3A0x606f3023068f7c64!2sEmp%C3%B3rio%20Capim%20do%20Vale!5e1!3m2!1spt-BR!2sbr!4v1654299767936!5m2!1spt-BR!2sbr"


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


    for (let i = 0; i < localiza.length; ++i) {
        localiza[i].innerHTML = "Localização do cartório: Travessa Rua da Várzea, Galeria Sala 1, Cidade Histórica";
        hr[i].innerHTML = "Horário de funcionamento: 07 às 13hr";

    }

    document.getElementById('mapa2').src = mapMucuge;

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

    for (let i = 0; i < localiza.length; ++i) {
        localiza[i].innerHTML = "Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro";
        hr[i].innerHTML = "Horário de funcionamento: 08 às 14hr";

    }

    document.getElementById('mapa2').src = mapPalmeiras;

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


    for (let i = 0; i < localiza.length; ++i) {
        localiza[i].innerHTML = "Localização do cartório: RO BR 122, s/n, centro";
        hr[i].innerHTML = "Horário de funcionamento: 08 às 14hr";

    }

    document.getElementById('mapa2').src = mapIraquara;

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

    for (let i = 0; i < localiza.length; ++i) {
        localiza[i].innerHTML = "Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1";
        hr[i].innerHTML = "Horário de funcionamento: 08 às 14hr";

    }


    document.getElementById('mapa2').src = mapCaete;


}
btnC.onclick = Caeté;

/**Email enviado */
function enviado() {
    alert("E-mail enviado com sucesso");
}


/* popup login de outra forma */
function openFormRegistrar() {
    document.getElementById("popupRegistrar").style.display = "block";
}
function closeFormRegistrar() {
    document.getElementById("popupRegistrar").style.display = "none";
}


/*popup cadastrar */
function openFormCadastrar() {
    document.getElementById("popupRegistrar").style.display = "none";
    var modalRegistrar = document.getElementById("popupCadastrar");
    modalRegistrar.style.display = "block";
}
function closeFormCadastrar() {
    document.getElementById("popupRegistrar").style.display = "none";
}



/*popup login simples */
function openFormSimples() {
    document.getElementById("myFormSimples").style.display = "block";
}
function closeFormSimples() {
    document.getElementById("myFormSimples").style.display = "none";
}
closeFormSimples();

















