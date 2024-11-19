
"use strict"
console.clear();

const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

const params = { _limit: 6 };

axios.get(baseUrl + resource, { params }).then((res) => {
    const images = res.data;
    
    for (let i = 0; i < images.length; i++) {
        const image = images[i];  
        const title = image.title;  
        const thumbnailUrl = image.thumbnailUrl;

        // Logga i valori nel console
        console.log(`Immagine ${i + 1}:`);
        console.log(`Title: ${title}`);
        console.log(`Thumbnail URL: ${thumbnailUrl}`);
    }
}).catch((error) => {
    console.error('Errore nella richiesta:', error);
});