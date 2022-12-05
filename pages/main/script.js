const d = document;
function burgerMenu() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".nav-toggle *")) {
      d.querySelector(".panel").classList.add("is-active");
    }
    if (e.target.matches(".close-menu")) {
      d.querySelector(".panel").classList.remove("is-active");
    }
  });
}

let pets = [
  {
    image: "./../../assets/images/eagles.png",
    name: "Giant pandas",
    place: "Native to Southwest China",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
  {
    image: "./../../assets/images/gorilla.png",
    name: "Eagles",
    place: "Native to South America",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
  {
    image: "./../../assets/images/laizy_bear.png",
    name: "Gorillas",
    place: "Native to Congo",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
  {
    image: "./../../assets/images/leopard.png",
    name: "Two-toed Sloth",
    place: "Mesoamerica, South America",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
  {
    image: "./../../assets/images/eagles.png",
    name: "Cheetahs",
    place: "Native to Africa",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
  {
    image: "./../../assets/images/pinguin.png",
    name: "Penguins",
    place: "Native to Antarctica",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
  {
    image: "./../../assets/images/pinguin.png",
    name: "Alligators",
    place: "Native to Southeastern U. S.",
    food: "./../../assets/icons/meet-fish_icon.png",
  },
];

function slider() {
  const ARROW_LEFT = document.querySelector(".pets-left-btn");
  const ARROW_RIGHT = document.querySelector(".pets-right-btn");
  const CAROUSEL = document.getElementById("carousel");
  const LEFT_CARD = document.getElementById("left-cards");
  const RIGHT_CARD = document.getElementById("right-cards");

  const toLeft = () => {
    CAROUSEL.classList.add("transition-left");
    ARROW_LEFT.removeEventListener("click", toLeft);
    ARROW_RIGHT.removeEventListener("click", toRight);
  };

  const toRight = () => {
    CAROUSEL.classList.add("transition-right");
    ARROW_LEFT.removeEventListener("click", toLeft);
    ARROW_RIGHT.removeEventListener("click", toRight);
  };

  ARROW_LEFT.addEventListener("click", toLeft);
  ARROW_RIGHT.addEventListener("click", toRight);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    const RANDOM = () => {
      let size = 7,
        arr = [],
        array = [];

      for (let i = 0; i < size; i++) {
        arr.push(i);
      }

      for (let i = 0; i < size; i++) {
        let value = arr.splice(Math.round(Math.random() * (size - i - 1)), 1);
        array.push(value.pop());
      }
      return array;
    };

    let x = RANDOM();

    // *********************
    if (animationEvent.animationName === "to-left") {
      CAROUSEL.classList.remove("transition-left");
      const leftCards = LEFT_CARD.innerHTML;
      document.getElementById("active-cards").innerHTML = leftCards;
    } else {
      CAROUSEL.classList.remove("transition-right");
      const rightCards = RIGHT_CARD.innerHTML;
      document.getElementById("active-cards").innerHTML = rightCards;
    }

    ARROW_LEFT.addEventListener("click", toLeft);
    ARROW_RIGHT.addEventListener("click", toRight);
  });
}

burgerMenu();
slider();
