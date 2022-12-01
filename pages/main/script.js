const d = document;
function burgerMenu() {
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

function slider() {
  const cardWrapper = [...d.querySelectorAll(".pets-card-wrapper")];
  const leftBtn = [...d.querySelectorAll(".pets-left-btn *")];
  const rightBtn = [...d.querySelectorAll(".pets-right-btn *")];

  cardWrapper.forEach((item, i) => {
    console.log(item);
    let wrapperDimensions = item.getBoundingClientRect();
    let wrapperWidth = wrapperDimensions.width;

    leftBtn[i].addEventListener("click", (e) => {
      // e.preventDefault();
      item.scrollLeft -= wrapperWidth;
    });

    rightBtn[i].addEventListener("click", (e) => {
      // e.preventDefault();
      item.scrollLeft += wrapperWidth;
    });
  });
}

burgerMenu();
slider();
