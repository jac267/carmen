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

document.addEventListener(
  "mousemove",
  (e) => {
    element = document.elementFromPoint(e.clientX, e.clientY);

    display = element.style.display;
    console.log(element.nodeName);
    if (element.nodeName == "DIV") {
      element.style.display = "none";

      element2 = document.elementFromPoint(e.clientX, e.clientY);
      console.log(element2.id);
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
