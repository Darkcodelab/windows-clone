let windowsTray = document.getElementById("windowsTray");
let windowsLogo = document.getElementById("windowsLogo");

windowsLogo.addEventListener("click", () => {
  let isOpen = windowsTray.classList.contains("open");
  let tray = {
    element: windowsTray,
    name: "WindowsTray",
    icon: windowsLogo,
    height: "600px",
    width: "500px",
  };
  if (!isOpen) {
    openTray(tray);
  } else {
    closeTray(tray);
  }
});
