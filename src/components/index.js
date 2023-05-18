function Home() {
  return (
    <div id="homePage">
      <Background
        backgroundImage="url('../public/images/staticImages/backgroundPurpleFilter.png')"
        backgroundColor="rgba(9, 9, 25, 0.8)"
      />

      <div id="homePageMenu">
        <NeonIcon backgroundImage="../public/images/staticImages/neonCrayon.png" />
        <NeonIcon backgroundImage="../public/images/staticImages/neonMoney.png" />
        <NeonIcon backgroundImage="../public/images/staticImages/neonCalculet.png" />
        <NeonIcon backgroundImage="../public/images/staticImages/neonStonks.png" />

        <img src="../public/images/staticImages/cheque.png"></img>
        <MenuButton
          backgroundImage="../public/images/staticImages/l’APRÈS D.E.C..png"
          nbSpam="6"
        />

        <MenuButton
          backgroundImage="../public/images/staticImages/PARTIR UNE ENTREPRISE.png"
          nbSpam="4"
        />
        <MenuButton
          backgroundImage="../public/images/staticImages/LES CONCEPTS COMPLEXES.png"
          nbSpam="5"
        />
        <MenuButton
          backgroundImage="../public/images/staticImages/SUITE OFFICE.png"
          nbSpam="9"
        />
        <MenuButton
          backgroundImage="../public/images/staticImages/LES BASES.png"
          nbSpam="8"
        />
        <MenuButton
          backgroundImage="../public/images/staticImages/FINANCES PERSO- NELLES.png"
          nbSpam="8"
        />
      </div>
    </div>
  );
}

function NeonIcon(params) {
  return (
    <button class="neon-icon">
      <img src={params.backgroundImage}></img>
    </button>
  );
}
function MenuButton(params) {
  return (
    <div>
      <button class="menu-button">
        <img src={params.backgroundImage}></img>
      </button>
      {createMenuButton(params.nbSpam).map((spam) => (
        <spam class={spam.props.class}></spam>
      ))}
    </div>
  );
}
