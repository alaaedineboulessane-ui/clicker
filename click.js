let click = 0;
let val = 0;
let coeff = 1;
const display = document.getElementById('clickCount');
const genkidamaContainer = document.getElementById('genkidamaContainer');
const genkidama = document.getElementById('genkidama');
const image = document.getElementById('kagu');
const button = document.getElementById('gokuButton');
const valeur = document.getElementById('valcount')
const liste1 = document.getElementById('li1')
const achat1 = document.getElementById('achat1');
const achat2 = document.getElementById('achat2');
const liste2 = document.getElementById('li2');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const nrv = document.getElementById('images');
const title = document.getElementById('titre');

button.addEventListener('click', function() {
    click+= coeff;
    val+= coeff;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
    button.classList.add('click-effect');
    setTimeout(() => button.classList.remove('click-effect'), 150);
    if (click === 10) {
        image.src = "img/goku3.png";
        image.width = 150;
        alert("Goku passe aux choses sérieuses !");
        image.height = auto;

    
    } else if (click === 50) {
        image.src = "img/goku22.png";
        image.width = 100;
        alert("Goku est énérvé !!");
        image.height = auto;

    } else if (click === 150) {
        image.src = "img/ssj.png";
        image.width = 130;
        title.textContent = "Goku passe désormais en Super Saiyan, la transformation légendaire !";
        nrv.src = "img/gif.gif";
        modal.showModal();
        image.height = auto;

    } else if (click === 300) {
        image.src = "img/goku4.png";
        image.width = 150;
        image.height = auto;

    } else if (click === 500) {
        image.src = "img/ssj2.png";
        image.width = 300;
        image.height = auto;
    } else if (click === 700) {
        image.src = "img/gokussj3.png";
        image.width = 150;
        image.height = auto;
    }

});

achat1.addEventListener('click', function(){
    if (val >= 100) {
        coeff = 2;
        alert("Bien joué tu deviens plus fort");
        val -= 100;
        liste1.style.display = "none";
    }
    else {
        alert("Tu n'as pas assez de puissance, entraîne toi plus !")
    }
});

achat2.addEventListener('click', function(){
    if (val >= 300) {
        coeff = 4;
        alert("Ah oui tu deviens vraiment fort, je crois en toi!");
        val -= 300;
        liste2.style.display = "none";
    }
    else {
        alert("T'es trop impatient, tu n'as toujours pas assez de puissance")
    }
})