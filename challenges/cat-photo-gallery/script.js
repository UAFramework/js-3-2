window.onload = getRandomCatPicture ()

async function getRandomCatPicture () {
    await fetch("https://cataas.com/cat?json=true")
    .then(response => response.json())
    .then(randomCat => {
        const image = document.querySelector("img");
        return image.src = "https://cataas.com" + randomCat.url;
    }).catch(error => "Error: " + error)
}

// document.onreadystatechange = () => {
//     if (document.readyState === "complete") {
//         document.querySelector("button").addEventListener("click", async function () {
//             await fetch("https://cataas.com/cat?json=true")
//             .then(response => response.json())
//             .then(randomCat => {
//                 const image = document.querySelector("img");
//                 // const div = document.querySelector("#root");
//                 // div.removeChild(image);
//                 // const newImage = document.createElement("img");
//                 image.src = "https://cataas.com" + randomCat.url;
//                 //div.appendChild(newImage);
//                 return image
//                 }).catch(error => "Error: " + error)
//         });
//     }
// };

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        document.querySelector("button").addEventListener("click", async function () {
            await fetch("https://cataas.com/cat?json=true")
            .then(response => response.json())
            .then(randomCat => {
                const image = document.querySelector("img");
                // const div = document.querySelector("#root");
                // div.removeChild(image);
                // const newImage = document.createElement("img");
                
                //div.appendChild(newImage);
                return image.src = "https://cataas.com" + randomCat.url;
                }).catch(error => "Error: " + error)
        });
    }
};