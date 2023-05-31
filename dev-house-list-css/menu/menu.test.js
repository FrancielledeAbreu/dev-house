const { createMenu } = require("./index");

describe("createMenu", () => {
  let menuContainer;
  let menuItems;

  beforeEach(() => {
    document.body.innerHTML = '<div id="menu"></div>';
    menuContainer = document.getElementById("menu");
    menuItems = [
      { text: "Todos os remédios", link: "index.html" },
      { text: "Fale conosco", link: "contato.html" },
      { text: "Sobre nós", link: "#" },
    ];
  });

  test("Should create menu correctly", () => {
    createMenu();

    const ul = menuContainer.querySelector("ul");
    expect(ul).not.toBeNull();

    const liElements = menuContainer.querySelectorAll("li");
    expect(liElements.length).toBe(3);

    const linkElements = menuContainer.querySelectorAll("a");
    linkElements.forEach((link, index) => {
      const menuItem = menuItems[index];
      expect(link.href).toContain(menuItem.link);
    });
  });
});
