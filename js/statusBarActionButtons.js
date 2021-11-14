let closeButton = document.querySelector(".app-action-close");
let maximizeButton = document.querySelector(".app-action-maximize");
let minimizeButton = document.querySelector(".app-action-minimize");

closeButton.addEventListener("click", handleClose);
maximizeButton.addEventListener("click", handleMaximize);
minimizeButton.addEventListener("click", handleMinimize);

function handleClose() {
  // let appName = this.parentElement.dataset.appname;
  let parent = this.parentElement.parentElement;
  parent.style.display = "none";
}

function handleMaximize() {
  let parent = this.parentElement.parentElement;
  let isMax = parent.classList.contains("maxed");
  if (!isMax) {
    parent.style.width = "100vw";
    parent.style.height = "100vh";
    parent.style.top = "0px";
    parent.style.left = "0px";
    parent.classList.add("maxed");
  } else {
    parent.style.width = "900px";
    parent.style.height = "700px";
    parent.style.top = "50px";
    parent.style.left = "50px";
    parent.classList.remove("maxed");
  }
}

function handleMinimize() {
  console.log(this);
}
