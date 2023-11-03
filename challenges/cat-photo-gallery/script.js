const apiUrl = "https://cataas.com/cat";

const button = document.querySelector(".button");
const section = document.querySelector(".cats");
const tagInput = document.getElementById("tagInput");
const tagCheckbox = document.getElementById("tagCheckbox");

button.addEventListener("click", getRandomCat);

tagCheckbox.addEventListener("change", function () {
  tagInput.disabled = !tagCheckbox.checked;
});

drawRandomCatPicture = (data) => {
  let pictureUrl = `${apiUrl}/${data._id}`;
  let image = document.createElement("img");
  image.src = pictureUrl;
  image.className = "random_cat";
  image.alt = pictureUrl;
  section.appendChild(image);
};

async function getRandomCat() {
  section.replaceChildren([]);
  try {
    const response = await fetch(`${apiUrl}?json=true`);
    const data = await response.json();
    console.log("JSON:", data);
    return drawRandomCatPicture(data);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}

window.onload = getRandomCat();

