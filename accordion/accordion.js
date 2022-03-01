const accElement = document.querySelectorAll(".item");
const iconElement = document.querySelectorAll(".icon");

// FOR ENTIRE LINK CLICKABLE
// accElement.forEach(function (link) {
//   link.addEventListener("click", function () {
//     link.classList.toggle("open");
//   });
// });

// FOR DROPDOWN ICON CLICKABLE
iconElement.forEach(function (icon) {
  icon.addEventListener("click", function () {
    var parent = icon.parentElement;
    parent.classList.toggle("open");
  });
});
