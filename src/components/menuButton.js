function createMenuButton(nb) {
  const output = [];
  for (let i = 0; i < nb; i++) {
    output.push(
      React.createElement("span", {
        class: i,
      })
    );
  }
  console.log(output[0]);
  return output;
}

document.getElementById("root").addEventListener(
  "mousemove",
  (e) => {
    element = document.elementFromPoint(e.clientX, e.clientY);

    display = element.style.display;

    if (element.nodeName == "DIV") {
      element2 = document.elementFromPoint(e.clientX, e.clientY);

      if (element2.nodeName == "BUTTON") {
        element.style.zIndex = 10;

        element2.parentElement.style.zIndex = 12;
      } else {
        element2.parentElement.style.zIndex = 10;
        element.style.zIndex = 10;
      }

      element.style.display = display;
    } else {
      element.style.zIndex = 10;
    }
  },
  { passive: true }
);
