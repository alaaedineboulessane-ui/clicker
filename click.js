let click = 0;
let val = 0;
let coeff = 1;
let apparition = 0;
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
const data = document.getElementById('data');
const liste3 = document.getElementById('li3');
const liste4 = document.getElementById('li4');
const liste5 = document.getElementById('li5');
const liste6 = document.getElementById('li6');
const achat3 = document.getElementById('achat3');
const achat4 = document.getElementById('achat4');
const achat5 = document.getElementById('achat5');
const achat6 = document.getElementById('achat6');

button.addEventListener('click', function() {
    click++;
    val+= coeff;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
    button.classList.add('click-effect');
    setTimeout(() => button.classList.remove('click-effect'), 150);
    if (click >= 1000) {
        image.src = "img/ssj4.png";
        data.textContent = "C'est du jamais vu ! Goku est devenu un super saiyan 4"
        image.width = 150;
        image.height = auto;
    } else if (click >= 700) {
        image.src = "img/gokussj3.png";
        data.textContent = "Goku vient de dépasser le super saiyan ! il a debloqué le super saiyan 3 !"
        image.width = 150;
        image.height = auto;
    } else if (click >= 500) {
        image.src = "img/ssj2.png";
        data.textContent = "Goku vient de dépasser le super saiyan ! il a debloqué le super saiyan 2 !"
        image.width = 300;
        image.height = auto;

    } else if (click >= 300) {
        image.src = "img/goku4.png";
        data.textContent = "Goku a maitrisé le super saiyan !"
        image.width = 150;
        image.height = auto;

    } else if (click >= 150) {
        image.src = "img/ssj.png";
        image.width = 130;
        title.textContent = "Goku passe désormais en Super Saiyan, la transformation légendaire !";
        data.textContent = "Goku vient d'atteindre la forme super saiyan !"
        nrv.src = "img/gif.gif";
        if (apparition === 0) {
            modal.showModal();
            apparition++;
        }
        image.height = auto;

    } else if (click >= 50) {
        image.src = "img/goku22.png";
        image.width = 100;
        data.textContent = "Goku est énervé !"
        image.height = auto;

    } else if (click >= 10) {
        image.src = "img/goku3.png";
        image.width = 150;
        data.textContent = "Goku se concentre !"
        image.height = auto;
    }
});

achat1.addEventListener('click', function(){
    if (val >= 200) {
        coeff = 2;
        alert("Bien joué tu deviens plus fort");
        val -= 200;
        liste1.style.display = "none";
    }
    else {
        alert("Tu n'as pas assez de puissance, entraîne toi plus !")
    }
});

achat2.addEventListener('click', function(){
    if (val >= 500) {
        coeff = 20;
        alert("Ah oui tu deviens vraiment fort, je crois en toi!");
        val -= 500;
        liste2.style.display = "none";
    }
    else {
        alert("T'es trop impatient, tu n'as toujours pas assez de puissance")
    }
})

achat3.addEventListener('click', function(){
    if (val >= 1000) {
        coeff = 100;
        alert("T'es en quête de plus de puissance, t'iras loin !");
        val -= 1000;
        liste3.style.display = "none";
    }
    else {
        alert("T'es trop impatient, tu n'as toujours pas assez de puissance")
    }
})

achat4.addEventListener('click', function(){
    if (val >= 2000) {
        coeff = 500;
        alert("Tu réussiras !");
        val -= 2000;
        liste4.style.display = "none";
    }
    else {
        alert("T'es trop impatient, tu n'as toujours pas assez de puissance")
    }
})

achat5.addEventListener('click', function(){
    if (val >= 500000) {
        coeff = 2000;
        alert("Tu n'es plus trop loin !!!");
        val -= 500000;
        liste5.style.display = "none";
    }
    else {
        alert("T'es trop impatient, tu n'as toujours pas assez de puissance")
    }
})

achat6.addEventListener('click', function(){
    if (val >= 10000000) {
        coeff = 4;
        alert("Ah oui tu deviens vraiment fort, je crois en toi!");
        val -= 10000000;
        liste6.style.display = "none";
    }
    else {
        alert("T'es trop impatient, tu n'as toujours pas assez de puissance")
    }
})