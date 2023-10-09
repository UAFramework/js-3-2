window.onload = getRandomCatPicture ()

async function getRandomCatPicture () {
    await fetch("https://cataas.com/cat?json=true")
    .then(response => response.json())
    .then(randomCat => {
        const image = document.querySelector("img");
        return image.src = "https://cataas.com" + randomCat.url;
    }).catch(error => "Error: " + error)
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {

        const checkbox = document.querySelector("#checkbox");
        const input = document.querySelector("#input");
        input.disabled = true;

        checkbox.addEventListener("change", function () {
            !checkbox.checked ? input.disabled = true : input.disabled = false;
        }) 

        document.querySelector("button").addEventListener("click", async function () {
            if (!input.value) {
                await getRandomCatPicture();
            } else {
                await fetch(`https://cataas.com/cat/${input.value}?json=true`)
                .then(response => response.json())
                .then(randomCat => {
                    const image = document.querySelector("img");
                    return image.src = "https://cataas.com" + randomCat.url;
                }).catch(error => "Error: " + error)
            }
        })
    }
};