let openedTrays = [];

// Request FullScreen onLoad
function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullScreen;

  if (requestMethod) {
    // Native full screen.
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // Older IE.
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

var elem = document.body; // Make the body go full screen.
// TODO: Confirm FullScreen Mode with the user

// Handle outside click (tray)
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
