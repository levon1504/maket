let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Funtion to update rating
function gfg(n) {
  remove();
  for (let i = 0; i < n; i++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
  output.innerText = n + "/5";
}

// To remove the pre-applied styling
function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}

document.querySelector(".button").addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  const videoBox = document.querySelector(".video__box");
  videoBox.style.display = "block"; // Показываем видео

  const videoElement = document.getElementById("myVideo");
  videoElement.play(); // Запускаем воспроизведение видео
});

// Получаем элементы
const modal = document.getElementById("myModal");
const btn = document.querySelector(".video_button");
const span = document.getElementsByClassName("close")[0];
const videoElement = document.getElementById("myVideo");

// Открытие модального окна
btn.addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  modal.style.display = "block"; // Показываем модальное окно
  videoElement.play(); // Запускаем воспроизведение видео
});

// Закрытие модального окна при нажатии на "x"
span.addEventListener("click", function () {
  modal.style.display = "none"; // Скрываем модальное окно
  videoElement.pause(); // Останавливаем видео
  videoElement.currentTime = 0; // Сбрасываем время видео
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Скрываем модальное окно
    videoElement.pause(); // Останавливаем видео
    videoElement.currentTime = 0; // Сбрасываем время видео
  }
});

$(".team__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});
