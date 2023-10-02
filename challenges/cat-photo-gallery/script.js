const site = "https://cataas.com";
const catImage = document.getElementById("cat-image");
const enableTagCheckbox = document.getElementById("enable-tag");
const tagInput = document.getElementById("tag-input");
const loadButton = document.getElementById("load-button");

async function loadRandomCat() {
  try {
    var url = generateUrl();

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const imageUrl = `${site}${data.url}`;
    catImage.src = imageUrl;
  } catch (error) {
    console.error("There was a problem loading the cat image:", error);
  }
}

function generateUrl() {
  let inputValue = tagInput.value;
  return inputValue
    ? `${site}/cat/${inputValue}?json=true` // tag
    : `${site}/cat?json=true`;
}

function enableTagInput() {
  if (enableTagCheckbox.checked) {
    tagInput.removeAttribute("disabled");
  } else {
    tagInput.setAttribute("disabled", "disabled");
  }
}

enableTagCheckbox.addEventListener("change", enableTagInput);
loadButton.addEventListener("click", loadRandomCat);
loadRandomCat();
