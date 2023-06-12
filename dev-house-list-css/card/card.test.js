const { createCard, createCards } = require("./index");

let container;

beforeAll(() => {
  container = document.createElement("div");
  container.id = "medicine";
  document.body.appendChild(container);
});

afterAll(() => {
  document.body.removeChild(container);
  container = null;
});

describe("createCard", () => {
  test("Should create DOM elements correctly", () => {
    const data = {
      image: "imagem.jpg",
      title: "medicine",
      value: "R$ 10,00",
    };

    createCard(data);

    expect(container.innerHTML).toContain('<img src="imagem.jpg">');
    expect(container.innerHTML).toContain("<h2>medicine</h2>");
    expect(container.innerHTML).toContain("<span>R$ 10,00</span>");
  });
});

describe("createCards", () => {
  test("Should create DOM elements correctly for multiple data", () => {
    container.innerHTML = "";

    const medicines = [
      {
        image: "imagem1.jpg",
        title: "medicine 1",
        value: "R$ 10,00",
      },
      {
        image: "imagem2.jpg",
        title: "medicine 2",
        value: "R$ 20,00",
      },
    ];

    createCards(medicines);

    const card1 = container.querySelector("div.card:nth-child(1)");
    const card2 = container.querySelector("div.card:nth-child(2)");

    expect(card1.innerHTML).toContain('<img src="imagem1.jpg">');
    expect(card1.innerHTML).toContain("<h2>medicine 1</h2>");
    expect(card1.innerHTML).toContain("<span>R$ 10,00</span>");

    expect(card2.innerHTML).toContain('<img src="imagem2.jpg">');
    expect(card2.innerHTML).toContain("<h2>medicine 2</h2>");
    expect(card2.innerHTML).toContain("<span>R$ 20,00</span>");
  });
});
