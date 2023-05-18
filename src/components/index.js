function Home() {
  return (
    <div id="homePage">
      <Background
        backgroundImage="url('../public/images/staticImages/backgroundPurpleFilter.png')"
        backgroundColor="rgba(9, 9, 25, 0.8)"
      />

      <div id="homePageMenu">
        <NeonIcon backgroundImage="url('../public/images/staticImages/neonCrayon.png')" />
        <NeonIcon backgroundImage="url('../public/images/staticImages/neonMoney.png')" />
        <NeonIcon backgroundImage="url('../public/images/staticImages/neonCalculet.png')" />
        <NeonIcon backgroundImage="url('../public/images/staticImages/neonStonks.png')" />
      </div>
    </div>
  );
}

function NeonIcon(params) {
  return (
    <button
      class="neon-icon"
      style={{ backgroundImage: params.backgroundImage }}
    ></button>
  );
}
