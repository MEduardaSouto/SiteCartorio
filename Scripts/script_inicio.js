const login = document.getElementById("login");
const seta = document.querySelectorAll(".seta")

function redirecionar() {
    window.location.assign()
}


document.querySelectorAll('[palmeiras]').forEach(folder => {
    folder.onclick = function (e) {
        const ul = folder.nextElementSibling
        const d = ul.style.display
        ul.style.display = d === 'none' ? 'block' : 'none'

        seta.setAttribute("transform", "rotate(90)");
    }

})


function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
closeForm();





