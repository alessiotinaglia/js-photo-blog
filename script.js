
"use strict"
console.clear();

const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

const params = { _limit: 6 };

axios.get(baseUrl + resource, { params }).then((res) => {
    const images = res.data;

    const container = document.querySelector('.container');

    // faccio un for cosi da far girare 6 volte le img
    for (let i = 0; i < images.length; i++) {
        // prendo i valori e li metto come costanti 
        const image = images[i];
        const title = image.title;
        const thumbnailUrl = image.thumbnailUrl;
        const id = image.id;
        // stampo i valori in console cosi da capirci qualcosa 
        console.log(`Immagine ${i + 1}:`);
        console.log(`Title: ${title}`);
        console.log(`Thumbnail URL: ${thumbnailUrl}`);
        // inserisco nel html la figure che ho creato precedentemente dal html 
        container.innerHTML += `
        <figure class="card" id="${id}">
            <div class = "image">
                <img src="${thumbnailUrl}" alt="${title}">         
            </div>
            <span class="pin"><img src="./img/pin.svg" alt=""></span>
            <div class="text">
                <p>${title}</p>
            <div/>
        </figure>
        `;
    }
    getFigures();
}).catch((error) => {
    console.log('Errore nella richiesta:', error);
});

// creo una funzione che al click su una figures esca la foto selezionata 
function getFigures() {
    const overlay = document.querySelector('#overlay');
    const imgOverlay = overlay.querySelector("img");
    const figures = document.querySelectorAll("figure");

    // Funzione per chiudere l'overlay
    const closeBtn = document.querySelector("#overlay button");
    closeBtn.addEventListener("click", function () {
        overlay.classList.add("d-none");
    });

    figures.forEach((figure) => {
        figure.addEventListener("click", function () {
            console.log(`L'immagine selezionata è la numero: ${figure.id}`);
            overlay.classList.remove("d-none");
            const img = figure.querySelector("img");
            console.log(img);
            imgOverlay.src = img.src; // Imposta l'immagine grande nell'overlay
        });
    });
}
