const lines = [
    "La porte de l’appartement s’ouvrit doucement, et Summer entra, fatiguée mais radieuse.",
    "Aleksandr était déjà là, installé dans le salon, un verre de bourbon à la main, son cahier ouvert devant lui.",
    "Elle posa son sac avec soin, observant l’homme qui semblait absorbé par ses pensées.",
    "**\"Encore en train d’écrire vos secrets, Monsieur Kief ?\"** demanda-t-elle, sa voix douce mais teintée d’une légère provocation.",
    "Aleksandr leva calmement les yeux vers elle, un sourire en coin.",
    "Il referma lentement le cahier et posa son stylo, prenant une gorgée de son bourbon avant de répondre.",
    "**\"Peut-être que je vous écris, Madame Kief. Ou peut-être pas. Vous aimez le mystère, non ?\"**",
    "Summer s’approcha, ses talons résonnant légèrement sur le sol.",
    "Elle s’arrêta juste devant lui, ses bras croisés, un sourire amusé étirant ses lèvres.",
    "**\"Et si je voulais savoir ? Si je voulais lire ce que vous écrivez sur moi ?\"**",
    "Aleksandr haussa un sourcil, son regard plongé dans le sien avec cette intensité qui la faisait vaciller.",
    "Il posa son verre et tendit une main pour attraper doucement son poignet, l’attirant un peu plus près de lui.",
    "**\"Si vous voulez savoir, vous n’avez qu’à me le demander. Mais je ne vous garantis pas que vous aimerez ce que vous lirez.\"**",
    "Summer ne bougea pas, ses doigts effleurant distraitement son bras.",
    "**\"Vous aimez jouer, Monsieur Kief.\"**",
    "Il se redressa légèrement, réduisant l’espace entre eux.",
    "**\"Seulement avec vous, Madame Kief.\"** Sa voix était grave, teintée d’une douceur provocante qui fit naître un frisson le long de son échine.",
    "Elle posa une main sur son épaule, son pouce traçant un cercle léger sur le tissu de sa chemise.",
    "Aleksandr observa ce geste, un sourire imperceptible se dessinant sur ses lèvres.",
    "**\"Et si je décidais de jouer aussi ?\"** murmura-t-elle.",
    "Aleksandr laissa sa main glisser doucement le long de son bras jusqu’à sa taille, l’attirant un peu plus près.",
    "Son regard ne quittait pas le sien, et lorsqu’il parla, sa voix était à peine un souffle.",
    "**\"Alors nous verrions qui cède en premier.\"**",
    "La tension dans la pièce était presque insoutenable.",
    "Summer posa son autre main sur sa poitrine, son regard oscillant entre ses lèvres et ses yeux.",
    "Il se pencha légèrement, réduisant encore la distance entre eux, son souffle chaud effleurant son cou.",
    "Ses lèvres s’attardèrent, à peine, sur sa peau, un baiser léger mais terriblement chargé de désir.",
    "Elle ferma les yeux, ses doigts s’accrochant un peu plus à sa chemise.",
    "**\"Aleksandr...\"** souffla-t-elle, sa voix tremblante, le vouvoiement brisé sous la pression du moment.",
    "Il releva légèrement la tête, son front contre le sien, son regard brûlant d’un mélange de contrôle et de frustration.",
    "**\"Summer...\"** murmura-t-il à son tour, sa main remontant lentement dans son dos, traçant des caresses légères mais déterminées.",
    "Elle recula d’un demi-pas, ses lèvres effleurant les siennes dans un baiser qui dura une fraction de seconde, juste assez pour alimenter le feu qui les consumait.",
    "Mais elle posa doucement une main sur son torse, rompant le contact.",
    "**\"Nous avions une promesse,\"** dit-elle, le souffle court, son regard plongeant dans le sien.",
    "Aleksandr hocha la tête, son sourire en coin réapparaissant alors qu’il reprenait son verre de bourbon, un geste pour se contenir.",
    "**\"Une promesse que je tiendrai, Madame Kief. Mais ne vous méprenez pas, ce n’est pas facile.\"**",
    "Elle détourna le regard, son propre sourire trahissant une frustration similaire.",
    "**\"Ce serait plus simple si vous n’étiez pas aussi... insupportable.\"**",
    "Aleksandr rit doucement, un éclat léger dans ses yeux.",
    "**\"Et ce serait plus simple si vous n’étiez pas si magnifique.\"**",
    "Ils restèrent ainsi, à se défier silencieusement, le désir et la retenue dans une danse fragile.",
    "Summer finit par reculer complètement, reprenant son souffle alors qu’Aleksandr la suivait du regard, un mélange de satisfaction et de frustration dans son sourire.",
    "**\"Un jour, Madame Kief,\"** dit-il calmement, **\"mais pas encore.\"**",
    "Elle ne répondit pas, se détournant avec un dernier regard appuyé, laissant la tension flotter dans l’air, aussi palpable que leur désir inassouvi."
  ];
  
  const container = document.getElementById("text");
  let currentIndex = 0;
  
  // Parse text for bold formatting
  function parseText(line) {
    return line.replace(/\*\*(.*?)\*\*/g, '<span class="bold">$1</span>');
  }
  
  // Render initial lines
  function renderLines() {
    container.innerHTML = ""; // Clear previous lines
  
    lines.forEach((line, index) => {
      const div = document.createElement("div");
      div.className = "line";
      div.innerHTML = parseText(line); // Parse bold text
      container.appendChild(div);
    });
  
    updateLines(); // Position lines
  }
  
  // Update positions and opacity dynamically
  function updateLines() {
    const lineElements = document.querySelectorAll(".line");
  
    lineElements.forEach((line, index) => {
      const offset = index - currentIndex;
  
      if (offset === 0) {
        // Center line
        line.className = "line center";
      } else if (offset === -1) {
        // Top line (visible, faded)
        line.className = "line top";
      } else if (offset === 1) {
        // Bottom line (visible, faded)
        line.className = "line bottom";
      } else {
        // Lines outside the visible range
        line.className = "line hidden";
      }
    });
  }
  
  // Scroll event to switch lines
  document.body.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      // Scroll down
      currentIndex = Math.min(currentIndex + 1, lines.length - 1);
    } else {
      // Scroll up
      currentIndex = Math.max(currentIndex - 1, 0);
    }
    updateLines();
  });
  
  // Initial rendering
  renderLines();
  