let click = 0;
let val = 0;
let coeff = 1;
let apparition = 0;
let coff = 1;
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
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const image5 = document.getElementById('img5');
const image6 = document.getElementById('img6');
const image7 = document.getElementById('img7');
const image8 = document.getElementById('img8');
const image9 = document.getElementById('img9');
const image10 = document.getElementById('img10');
const image11 = document.getElementById('img11');
const majin = document.getElementsByClassName('majin');
const taunt = document.getElementsByClassName('taunt');
const bulma = document.getElementsByClassName('bulma');
const tortue = document.getElementsByClassName('tortue');
const ten = document.getElementsByClassName('ten');
const satan = document.getElementsByClassName('satan');
const yamcha = document.getElementsByClassName('yamcha');
const trunks = document.getElementsByClassName('trunks');
const goten = document.getElementsByClassName('goten');
const piccolo = document.getElementsByClassName('piccolo')
const gohan = document.getElementsByClassName('gohan');

image1.addEventListener('click', function() {
    if (val >= 5000) {
        alert("tu as debloqué vegeta majin bien joué !");
for (let i = 0; i < majin.length; i++) {
    majin[i].style.opacity = "1";
}
        val -= 5000
        setInterval(() => {
            click++;
        display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        }, 1000);

    }
    else {
        alert("Tu n'as pas assez de puissance, reviens me voir quand tu en seras digne !")
    }
})

image2.addEventListener('click', function() {
    if (val >= 10000) {
        alert("tu as debloqué krillin bien joué !");
for (let i = 0; i < taunt.length; i++) {
    taunt[i].style.opacity = "1";
}
        val -= 10000
        setInterval(() => {
            click+= 5;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
    }
    else {
        alert("Mais voyons tu n'es pas assez puissant ! J'attendrai que tu deviennes plus fort!")
    }
})

image3.addEventListener('click', function() {
    if (val >= 50000) {
        alert("Bon je vais t'aider, mais que pour cette fois !");
for (let i = 0; i < bulma.length; i++) {
    bulma[i].style.opacity = "1";
}
        val -= 50000
        setInterval(() => {
            click+= 20;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Tu ne seras jamais aussi fort que mon mari !")
    }
})

image4.addEventListener('click', function() {
    if (val >= 100000) {
        alert("Allez je vais t'apprendre la technique du kamehameha !");
for (let i = 0; i < tortue.length; i++) {
    tortue[i].style.opacity = "1";
}
        val -= 100000
        setInterval(() => {
            click+= 50;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Deviens plus fort et t'apprendra la technique du Kamehameha !")
    }
})

image5.addEventListener('click', function() {
    if (val >= 500000) {
        alert("Je vais rejoindre ton équipe mais c'est pas par plaisir.");
for (let i = 0; i < ten.length; i++) {
    ten[i].style.opacity = "1";
}
        val -= 500000;
        setInterval(() => {
            click+= 5000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Ce n'est pas comme ça que tu seras digne de mon Kikoho")
    }
})

image6.addEventListener('click', function() {
    if (val >= 1000000) {
        alert("Je suis trop fort pour toi mais bien sûr je vais t'aider");
for (let i = 0; i < satan.length; i++) {
    satan[i].style.opacity = "1";
}
        val -= 1000000;
        setInterval(() => {
            click+= 10000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Tu n'es pas assez fort c'est dommage !")
    }
})

image7.addEventListener('click', function() {
    if (val >= 5000000) {
        alert("Je vais t'aider dans ta quête, pour Bulma !");
for (let i = 0; i < yamcha.length; i++) {
    yamcha[i].style.opacity = "1";
}
        val -= 5000000;
        setInterval(() => {
            click += 50000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Tu n'es pas du tout fort en fait HAHAHAHAHAHAH")
    }
})

image8.addEventListener('click', function() {
    if (val >= 50000000) {
        alert("Je vais t'aider dans ta quête, pour Bulma !");
for (let i = 0; i < trunks.length; i++) {
    trunks[i].style.opacity = "1";
}
        val -= 50000000;
        setInterval(() => {
            click+= 500000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Tu n'es pas fort, je vais m'entraîner auprès de mon pére.")
    }
})

image9.addEventListener('click', function() {
    if (val >= 500000000) {
        alert("Je le fais pour papa !");
for (let i = 0; i < goten.length; i++) {
    goten[i].style.opacity = "1";
}
        val -= 500000000;
        setInterval(() => {
            click+= 50000000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("T'es pas aussi fort que mon père je suis déçu")
    }
})

image10.addEventListener('click', function() {
    if (val >= 5000000000) {
        alert("Je vais bien t'entraîner tu vas voir");
for (let i = 0; i < piccolo.length; i++) {
    piccolo[i].style.opacity = "1";
}
        val -= 5000000000;
        setInterval(() => {
            click+= 500000000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("Dégage !")
    }
})

image11.addEventListener('click', function() {
    if (val >= 50000000000) {
        alert("Je vais réussir !");
for (let i = 0; i < gohan.length; i++) {
    gohan[i].style.opacity = "1";
}
        val -= 50000000000;
        setInterval(() => {
            click+= 5000000000;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);

    }
    else {
        alert("J'ai d'autres chats à foutter")
    }
})



button.addEventListener('click', function() {
    click++;
    val+= coeff;
    display.textContent = "Nombre de clicks : " + click;
    valeur.textContent = "Ki collectioné : " + val;
    button.classList.add('click-effect');
    setTimeout(() => button.classList.remove('click-effect'), 150);
      
    
    if (click >= 500000000) {
        image.src = "img/gogetassj4.png";
        data.textContent = "On attent la forme la plus belle de gogeta, le gogeta super saiyan 4.";
        image.width = 300;
        image.height = auto;
        alert("Bravo tu as fini le jeu, il n'y a plus de transformations après.")

    }
    
    else if (click >= 400000000000) {
        image.src = "img/gogetablue.png";
        data.textContent = "Gogeta devient toujours plus fort et se transforme en super saiyan blue !";
        setInterval(() => {
            click+= 1000000000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 300000000000) {
        image.src = "img/gogetasuper.png";
        data.textContent = "Gogeta entame sa première transformation ! Le super saiyan !";
        setInterval(() => {
            click+= 500000000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 20000000000) {
        image.src = "img/gogeta.png";
        data.textContent = "Mais il y'a une autre manière de fusionner, la dance métamole ! Voilà donc Gogeta !";
        setInterval(() => {
            click+= 50000000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 1000000000) {
        image.src = "img/vegettossj4.png";
        data.textContent = "Dans un autre univers, dans une autre vie, Vegetto atteins la forme super saiyan 4, c'est trop beau !";
        setInterval(() => {
            click+= 10000000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 500000000) {
        image.src = "img/vegettossjb.png";
        data.textContent = "Vegetto atteint sa prochaine forme ! Le SSJB !";
        setInterval(() => {
            click+= 5000000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;

    }
    
    else if (click >= 20000000) {
        image.src = "img/vegettosuper.png";
        data.textContent = "Vegetto passe à sa première transformation ! Vegetto Super !";
        setInterval(() => {
            click+= 1000000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 12000000) {
        image.src = "img/vegetto.png";
        data.textContent = "Ils ont changé de methode de fusion et ont réussi, voilà VEGETTO !";
        setInterval(() => {
            click+= 500000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 10000000) {
        image.src = "img/fail.png";
        data.textContent = "Goku et Vegeta ont essayé de fusionner mais ça n'a pas marché !"
        setInterval(() => {
            click+= 100000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 1000000) {
        image.src = "img/cc.png";
        data.textContent = "Cette forme ne devrait pas exister, elle est trop puissante !";
        setInterval(() => {
            click+= 50000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;

    }
    
    else if (click >= 500000) {
        image.src = "img/mui.png";
        data.textContent = "Il dépasse encore ses limites c'est incroyable !";
        setInterval(() => {
            click+= 25000;
        display.textContent = "Nombre de clicks : " + click;
        valeur.textContent = "Ki collectioné : " + val;
        val+= coeff;
        }, 1000);
        image.width = 150;
        image.height = auto;
    }

    else if (click >= 100000) {
        image.src = "img/ui.png";
        data.textContent = "On a cru qu'il allait perdre, mais il est juste imbattable";
        image.width = 150;
        image.height = auto;

    }
    
    else if (click >= 50000) {
        image.src = "img/kaioken.png";
        data.textContent = "Goku a trouvé encore plus de puissance, il a mélangé deux transformations !"
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 10000) {
        image.src = "img/ssjblue.png";
        data.textContent = "C'est trop beau, goku ne cesse de dépasser ses limites !"
        image.width = 150;
        image.height = auto;
    }
    
    else if (click >= 5000) {
        image.src = "img/ssjgod.png"
        data.textContent = "La transformation divine ! Goku a atteint le ssj god !";

        image.width = 150;
        image.height = auto;
    }
      else if (click >= 1000) {
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
document.querySelectorAll(".slide-track button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("click-effect");

        setTimeout(() => {
            btn.classList.remove("click-effect");
        }, 150);
    });
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


