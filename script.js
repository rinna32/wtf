document.addEventListener("DOMContentLoaded", () => {
  const items = {
    Сумки: {
      img: "img/Без названия (3).jpg",
      text: "Сумки в стиле NeoGoth – сочетание кожи, цепей и мистических символов.",
    },
    Украшения: {
      img: "img/Gothic bracelet set.jpg",
      text: "Украшения дарят ауру мистики: кольца, браслеты и кулоны с готическим вайбом.",
    },
    Одежда: {
      img: "img/Без названия (2).jpg",
      text: "Одежда в духе Дарк Дива – черные платья, кружева и смелые силуэты.",
    },
  };

  const buttons = document.querySelectorAll(".item button");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.innerText;
      const data = items[category];

      modalTitle.textContent = category;
      modalImg.src = data.img;
      modalText.textContent = data.text;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
