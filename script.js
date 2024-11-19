
"use strict"
console.clear();

const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

const params = { _limit: 6 };

axios.get(baseUrl + resource, { params }).then((res) => {
    const images = res.data;

    const container = document.querySelector('.container');

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const title = image.title;
        const thumbnailUrl = image.thumbnailUrl;

        console.log(`Immagine ${i + 1}:`);
        console.log(`Title: ${title}`);
        console.log(`Thumbnail URL: ${thumbnailUrl}`);

        container.innerHTML += `
        <div class="card">
            <div class = "img">
                <img src="${thumbnailUrl}" alt="${title}">         
            </div>
            <div class="text">
                <p>${title}</p>
            <div/>
        </div>
        `;
    }
}).catch((error) => {
    console.error('Errore nella richiesta:', error);
});
