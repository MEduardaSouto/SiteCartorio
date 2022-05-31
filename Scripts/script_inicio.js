
function redirecionar() {
    window.location.assign()
}


/*descer inoformações dos serviços */
const seta = document.querySelectorAll(".seta")

document.querySelectorAll('[palmeiras]').forEach(folder => {
    folder.onclick = function (e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none';
    }
})


/*popup login */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
closeForm();



/*mudar de municípios */
const btnP = document.getElementById("btnPalmeiras");
const btnM = document.getElementById("btnMucugê");
const btnI = document.getElementById("btnIraquara");
const btnC = document.getElementById("btnCaeté");


const cart = document.body.querySelectorAll("div.cartórios");
const localiza = document.body.querySelectorAll("div.localizaçãoCartório");
const hr = document.body.querySelectorAll("div.horário");


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

    cart.innerHTML = "";
    const txtMC = document.createTextNode("Cartório que oferta esse serviço: ");
    cart.appendChild(txtMC);

    localiza.innerHTML = "";
    const txtML = document.createTextNode("Localização do cartório: Travessa Rua da Várzea, Galeria Sala 1, Cidade Histórica");
    localiza.appendChild(txtML);

    hr.innerHTML = "";
    const txtMH = document.createTextNode("Horário de funcionamento: 07 às 13hr");
    hr.appendChild(txtMH);

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

    cart.innerHTML = "";
    const txtPC = document.createTextNode("Cartório que oferta esse serviço: ");
    cart.appendChild(txtPC);

    localiza.innerHTML = "";
    const txtPL = document.createTextNode("Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro");
    localiza.appendChild(txtPL);

    hr.innerHTML = "";
    const txtPH = document.createTextNode("Horário de funcionamento: 08 às 14hr");
    hr.appendChild(txtPH);
    
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

    cart.innerHTML = "";
    const txtIC = document.createTextNode("Cartório que oferta esse serviço: ");
    cart.appendChild(txtIC);

    localiza.innerHTML = "";
    const txtIL = document.createTextNode("Localização do cartório: RO BR 122, s/n, centro");
    localiza.appendChild(txtIL);

    hr.innerHTML = "";
    const txtIH = document.createTextNode("Horário de funcionamento: 08 às 14hr");
    hr.appendChild(txtIH);

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

    cart.innerHTML = "";
    const txtCC = document.createTextNode("Cartório que oferta esse serviço: ");
    cart.appendChild(txtCC);

    localiza.innerHTML = "";
    const txtCL = document.createTextNode("Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1");
    localiza.appendChild(txtCL);

    hr.innerHTML = "";
    const txtCH = document.createTextNode("Horário de funcionamento: 08 às 14hr");
    hr.appendChild(txtCH);
}
btnC.onclick = Caeté;



/*rolar página para  início */
$(document).ready(function(){

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});








