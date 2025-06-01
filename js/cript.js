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

$(document).ready(function () {
  $(".section__FAQ-link").on("click", function (e) {
    e.preventDefault();

    // Переключаем класс активности на ссылке
    $(this).toggleClass("section__FAQ-link-active");

    // Находим следующий параграф и переключаем его видимость
    $(this)
      .closest(".section__item-head")
      .next(".section__item-text")
      .slideToggle();
  });
});
ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [40.714627, -74.002863], // Координаты Москвы
    zoom: 10,
  });
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
});
