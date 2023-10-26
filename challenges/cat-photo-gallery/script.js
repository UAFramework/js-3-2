const options = {
  method: "GET",
};

const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");
const tagInput = document.getElementById("tagInput");
const tagCheckbox = document.getElementById("tagCheckbox");

button.addEventListener("click", function () {
  const tag = tagInput.value.trim();
  getRandomCats(tag);
});

tagCheckbox.addEventListener("change", function () {
  tagInput.disabled = !tagCheckbox.checked;
});

// We getting the first cat image when the page loads

window.onload = function () {
  getRandomCats();
};

function randomCatPhoto(json) {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
}

async function getRandomCats(tag) {
  section.innerHTML = "";

  let apiUrl = "https://api.thecatapi.com/v1/images/search";

  if (tag) {
    apiUrl += `?tag=${tag}`;
  }

  try {
    const response = await fetch(apiUrl, options);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("Це помилка");
    console.log(e);
  }
}
