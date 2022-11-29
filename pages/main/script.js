function burgerMenu() {
  const d = document;

  d.addEventListener("click", (e) => {
    // e.preventDefault();
    if (e.target.matches(".nav-toggle")) {
      d.querySelector(".panel").classList.add("is-active");
      // d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(".close-menu")) {
      d.querySelector(".panel").classList.remove("is-active");
      // d.querySelector(panelBtn).classList.toggle("is-active");
    }

    // if (e.target.matches(menuLink)) {
    //   d.querySelector(panel).classList.remove("is-active");
    //   d.querySelector(panelBtn).classList.remove("is-active");
    // }
  });
}

burgerMenu();
