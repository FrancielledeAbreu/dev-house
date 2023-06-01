const createCard = (data) => {
  const container = document.getElementById("medicine");
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = data.image;
  card.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = data.title;
  card.appendChild(title);

  const value = document.createElement("p");
  value.textContent = data.value;
  card.appendChild(value);

  if (container) {
    container.appendChild(card);
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
