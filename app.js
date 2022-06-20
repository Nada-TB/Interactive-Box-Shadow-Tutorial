"use strict";
var inputs = document.querySelectorAll("input");
var hOffset = 0,
  vOffset = 0,
  blur = 0,
  spread = 0,
  color = "#ffcc66",
  inset = "";

function setBoxShadow() {
  let box = document.getElementById("example");
  box.style.boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color} ${inset}`;
}

inputs.forEach((elt) => {
  elt.addEventListener("input", function (e) {
    window[e.target.dataset.name] = e.target.value;
    setBoxShadow();
  });
});

document
  .querySelector("form input[type=button]")
  .addEventListener("click", function () {
    (hOffset = 0),
      (vOffset = 0),
      (blur = 0),
      (spread = 0),
      (color = "#ffcc66"),
      (inset = "");
    inputs.forEach((elt) => {
      if (elt.type == "number" || elt.type == "text") {
        elt.value = elt.dataset.value;
      }
    });
    setBoxShadow();
  });

document.getElementById("inset").addEventListener("click", function () {
  inset = "inset";
  setBoxShadow();
});
document.getElementById("uninset").addEventListener("click", function () {
  inset = "";
  setBoxShadow();
});
