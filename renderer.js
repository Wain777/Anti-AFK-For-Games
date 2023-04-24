let startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  let key = "{ }";
  let customKey = document.querySelector("#custom-key").value;
  console.log(customKey);
  let toggle = document.querySelector("#custom-key-state");
  if (toggle.checked == true) {
    key = "";

    if (customKey == "ctrl" || customKey == "control") customKey = "^";
    if (customKey == "shift") customKey = "+";
    if (customKey == "alt") customKey = "%";

    if (
      !(
        customKey == "ctrl" ||
        customKey == "control" ||
        customKey == "shift" ||
        customKey == "alt"
      )
    ) {
      customKey = "{" + customKey + "}";
    }
  }

  window.electronAPI.start(customKey);
});
let stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", () => {
  window.electronAPI.stop("stop");
});
