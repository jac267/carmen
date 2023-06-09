function Home() {
  return (
    <div id="homePage">
      <Background
        backgroundImage="url('../public/images/staticImages/backgroundPurpleFilter.png')"
        backgroundColor="rgba(9, 9, 25, 0.8)"
      />
      <div id="homePageMenu">
        <NeonIcon
          backgroundImage="../public/images/staticImages/neonCrayon.png"
          id="neonCrayon"
        />
        <NeonIcon
          id="neonMoney"
          backgroundImage="../public/images/staticImages/neonMoney.png"
        />
        <NeonIcon
          backgroundImage="../public/images/staticImages/neonCalculet.png"
          id="neonCalculet"
        />
        <NeonIcon
          backgroundImage="../public/images/staticImages/neonStonks.png"
          id="neonStonks"
        />

        <div class="menu-button-div" id="cheque-div">
          <img src="../public/images/staticImages/cheque.png" id="cheque"></img>
        </div>
        <MenuButton
          backgroundImage="url('../public/images/staticImages/l’APRÈS D.E.C..png')"
          nbSpam="2"
          id="apres-D-E-C"
        />

        <MenuButton
          backgroundImage="url('../public/images/staticImages/PARTIR UNE ENTREPRISE.png')"
          nbSpam="2"
          id="partir-une-entreprise"
        />
        <MenuButton
          backgroundImage="url('../public/images/staticImages/LES CONCEPTS COMPLEXES.png')"
          nbSpam="1"
          id="les-concepts-complexes"
        />
        <MenuButton
          backgroundImage="url('../public/images/staticImages/SUITE OFFICE.png')"
          nbSpam="3"
          id="suite-office"
        />
        <MenuButton
          backgroundImage="url('../public/images/staticImages/LES BASES.png')"
          nbSpam="3"
          id="les-bases"
        />
        <MenuButton
          backgroundImage="url('../public/images/staticImages/FINANCES PERSO- NELLES.png')"
          nbSpam="1"
          id="finances-personelles"
        />
      </div>
    </div>
  );
}

function NeonIcon(params) {
  return (
    <button class="neon-icon" id={params.id}>
      <img src={params.backgroundImage}></img>
    </button>
  );
}
function MenuButton(params) {
  return (
    <div
      class="menu-button-div"
      id={params.id}
      style={{ backgroundImage: params.backgroundImage }}
    >
      <div></div>
      {createMenuButton(params.nbSpam).map((spam) => (
        <button
          class={"a" + spam.props.class}
          onClick={() => alert(params.id)}
        ></button>
      ))}
    </div>
  );
}
