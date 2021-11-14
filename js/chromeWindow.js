let chromeIcon = document.getElementById("chrome");
let chromeWindow = document.getElementById("chromeWindow");

chromeIcon.addEventListener("click", () => {
  let displayType = chromeWindow.style.display;
  chromeWindow.style.display = displayType == "block" ? "none" : "block";
});
