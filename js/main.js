let openedTrays = [];

window.addEventListener("click", (e) => {
  if (openedTrays.length > 0) {
    openedTrays.forEach((tray) => {
      if (!tray.element.contains(e.target) && !tray.icon.contains(e.target)) {
        closeTray(tray);
      }
    });
  }
});

function openTray(tray) {
  let element = tray.element;
  element.style.width = tray.width;
  element.style.height = tray.height;
  element.classList.add("open");
  openedTrays.push(tray);
}

function closeTray(tray) {
  let element = tray.element;
  element.style.width = "0px";
  element.style.height = "0px";
  element.classList.remove("open");
  let trayName = tray.name;
  openedTrays = openedTrays.filter((e) => e.name != trayName);
}
