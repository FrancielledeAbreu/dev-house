const { createMenu } = require("./index");

describe("createMenu", () => {
  test("Should create DOM elements correctly", () => {
    const container = document.createElement("div");
    container.id = "menu";
    document.body.appendChild(container);

    createMenu();

    expect(container.innerHTML).toContain("<ul>");
    expect(container.innerHTML).toContain(
      '<li><a href="index.html">Todos os remédios</a></li>'
    );
    expect(container.innerHTML).toContain(
      '<li><a href="contato.html">Fale conosco</a></li>'
    );
    expect(container.innerHTML).toContain('<li><a href="#">Sobre nós</a></li>');
  });

  test("Should have working links", () => {
    const container = document.createElement("div");
    container.id = "menu";
    document.body.appendChild(container);

    createMenu();
    const allMedicinesLink = document.querySelector(
      "#menu a[href='index.html']"
    );
    const contactUsLink = document.querySelector(
      "#menu a[href='contato.html']"
    );
    const aboutUsLink = document.querySelector("#menu a[href='#']");

    expect(allMedicinesLink.getAttribute("href")).toBe("index.html");
    expect(contactUsLink.getAttribute("href")).toBe("contato.html");
    expect(aboutUsLink.getAttribute("href")).toBe("#");
    expect(allMedicinesLink.href).toContain("index.html");
    expect(contactUsLink.href).toContain("contato.html");
    expect(aboutUsLink.href).toContain(window.location.href);
  });
});
