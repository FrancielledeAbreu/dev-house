const createCard = (data) => {
  const container = document.getElementById("medicine");
  const card = document.createElement("div");
  card.classList.add("card");

  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-heart");

  const description = document.createElement("div");
  description.classList.add("description");

  const image = document.createElement("img");
  image.src = data.image;

  const title = document.createElement("h2");
  title.textContent = data.title;

  const value = document.createElement("span");
  value.textContent = data.value;

  const icon_button = document.createElement("i");
  icon_button.classList.add("fas");
  icon_button.classList.add("fa-plus-circle");

  const button = document.createElement("button");
  button.textContent = "adicionar";

  button.addEventListener("click", () => {
    button.classList.add("button-active");
    setTimeout(() => {
      button.classList.remove("button-active");
    }, 1000);
  });

  if (container) {
    card.appendChild(icon);
    card.appendChild(description);
    container.appendChild(card);
    description.appendChild(image);
    description.appendChild(title);
    description.appendChild(value);
    button.appendChild(icon_button);
    description.appendChild(button);
  }
};

const createCards = (medicineData) => {
  const container = document.getElementById("medicine");

  if (container) {
    medicineData.forEach((data) => {
      createCard(data);
    });
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { createCard, createCards };
}
