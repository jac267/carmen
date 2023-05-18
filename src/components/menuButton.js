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
