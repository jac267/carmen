function Background(params) {
  return (
    <div id="backgroundSolidColor">
      <div id="backgroundBriks"></div>
      <div
        id="backgroundFilter"
        style={{ backgroundImage: params.backgroundImage }}
      ></div>
    </div>
  );
}
