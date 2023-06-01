const createMenu = () => {
  const container = document.getElementById("menu");
  const ul = document.createElement("ul");

  const menuItems = [
    { text: "Todos os remédios", link: "index.html" },
    { text: "Fale conosco", link: "contato.html" },
    { text: "Sobre nós", link: "#" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${item.link}">${item.text}</a>`;
    ul.appendChild(li);
  });

  container.appendChild(ul);
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { createMenu };
}
