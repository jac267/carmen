function Background(params) {
  return (
    <div class="background">
      <div class="backgroundSolidColor"></div>
      <div class="backgroundBriks"></div>
      <div
        class="backgroundFilter"
        style={{ backgroundImage: params.backgroundImage }}
      ></div>

      <div class="backgroundFILL">
        <div class="backgroundSolidColorFILL"></div>
        <div class="backgroundBriksFILL"></div>
        <div
          class="backgroundFilterFILL"
          style={{ backgroundColor: params.backgroundColor }}
        ></div>
      </div>
    </div>
  );
}
