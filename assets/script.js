const collection = [
  {
    name: "Diablo III",
    genre: "Hack'n'slash, Action, RPG",
    studio: "Blizzard Entertainment",
    date: "2012",
    resume:
      "Jouez en solo ou jusqu'à 4 en local ou en ligne. Réduisez à néant les légions infernales au long des cinq actes de l’histoire de Diablo III ou arpentez un monde ouvert dans le mode Aventure et pourchassez les anciennes créatures maléfiques du royaume des mortels pour obtenir des primes.",
    cover:
      "https://media.senscritique.com/media/000020964024/300/diablo_iii.png",
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-Aventure",
    studio: "Nintendo Entertainment",
    date: "2017",
    resume:
      "Après un long sommeil, Link se réveille seul dans un monde qu'il ne reconnaît pas. Il devra explorer un territoire aussi vaste que dangereux afin de retrouver la mémoire. En quête de réponses, il devra se servir de tout ce qui se trouve sur sa route pour survivre.",
    cover:
      "https://media.senscritique.com/media/000016771881/300/the_legend_of_zelda_breath_of_the_wild.jpg",
  },
  {
    name: "Hotline Miami",
    genre: "Action",
    studio: "Dennaton Games",
    date: "2012",
    resume:
      "Jeu d'action mettant en scène un tueur masqué ultra-violent dans un jeu au look néon très influencé par les 80s, et rythmé par une bande sonore electro.",
    cover:
      "https://media.senscritique.com/media/000020941956/300/hotline_miami.png",
  },
  {
    name: "FTL: Faster Than Light",
    genre: "Simulation, Gestion, Roguelike/Roguelite",
    studio: "Subset Games",
    date: "2012",
    resume:
      "Cette simulation de vaisseau spatial à la sauce roguelike vous permet de partir à l'aventure avec votre navire et son équipage à travers une galaxie générée aléatoirement.",
    cover:
      "https://media.senscritique.com/media/000019243562/300/ftl_faster_than_light.png",
  },
  {
    name: "The Witcher 3: Wild Hunt",
    genre: "Action, RPG",
    studio: "CD Projekt RED",
    date: "2015",
    resume:
      "The Witcher 3 est un RPG en monde ouvert, dans un univers Fantasy hautement scénarisé où vos choix sont décisifs. Vous incarnez un tueur de monstres professionnel chargé de retrouver l'enfant de la prophétie dans un vaste monde riche en cités marchandes, cols périlleux et grottes oubliées.",
    cover:
      "https://media.senscritique.com/media/000020907833/300/the_witcher_3_wild_hunt.jpg",
  },
  {
    name: "Outer Wilds",
    genre:
      "Action-Aventure, Réflexion, Simulation de vol, Simulation spatiale, Inclassable",
    studio: "Annapurna Interactive ",
    date: "2019",
    resume:
      "Outer Wilds est un jeu mystérieux en monde ouvert, mettant en scène un système solaire piégé dans une boucle temporelle infinie. Vous êtes la nouvelle recrue de Outer Wilds Ventures, un récent programme spatial qui enquête sur un étrange système solaire en évolution permanente.",
    cover:
      "https://media.senscritique.com/media/000020879355/300/outer_wilds.jpg",
  },
  {
    name: "The Binding of Isaac",
    genre: "Action, Roguelike/Roguelite",
    studio: " Edmund McMillen",
    date: "2011",
    resume:
      "Lorsque la mère d'Isaac commença à entendre la voix de Dieu lui demandant un sacrifice pour prouver sa foi, Isaac s'échappa dans la cave. Utilisez des trésors étranges qui vous donneront des pouvoirs spéciaux pour combattre les créatures mystérieuses et trouver le chemin de la liberté",
    cover:
      "https://media.senscritique.com/media/000020952014/300/the_binding_of_isaac.png",
  },
  {
    name: "Hades",
    genre: "Roguelike/Roguelite, Hack'n'slash, Dungeon crawler",
    studio: "Supergiant Games",
    date: "2020",
    resume:
      "Hades est un rogue-like et dungeon crawler. Dans la peau du prince des Enfers, vous manierez les pouvoirs et les armes mythiques de l'Olympe pour vous libérer des griffes du dieu des morts en personne, développant vos forces et dévoilant de nouveaux secrets à chaque nouvelle tentative d'évasion.",
    cover: "https://media.senscritique.com/media/000020936595/300/hades.png",
  },
  {
    name: "Cyberpunk 2077",
    genre: "Action, RPG, FPS, Infiltration",
    studio: "CD Projekt RED",
    date: "2020",
    resume:
      "Cyberpunk 2077 est un action-RPG en monde ouvert qui se déroule à Night City, une mégalopole obsédée par le pouvoir, la séduction et les modifications corporelles. Vous incarnez V, mercenaire hors-la-loi à la recherche d’un implant unique qui serait la clé de l’immortalité.",
    cover:
      "https://media.senscritique.com/media/000019358294/300/cyberpunk_2077.png",
  },
  {
    name: "Portal",
    genre: "Réflexion, Plateforme, FPS",
    studio: "Valve",
    date: "2007",
    resume:
      "Jeu de réflexion dans lequel vous incarnez un sujet de test piégé dans les mystérieux laboratoires d'Aperture Science. Vous devrez résoudre des énigmes en ouvrant des portails vous permettant de vous déplacez à travers les murs et l'espace.",
    cover: "https://media.senscritique.com/media/000019241688/300/portal.png",
  },
];

let main = document.querySelector("main");
collection.forEach((i) => {
  let article = document.createElement("article");
  let section = document.createElement("section");
  console.log(i[1]);
  section.innerHTML = `<div class ="suppr"></div><span>${i.name} </span>
  <img src=" ${i.cover}" alt ="">
  <span>Genre:${i.genre}</span>
  <span>Studio:${i.studio}</span>
  <span>Date:${i.date}</span>
   <span>Résumé: ${i.resume}</span>
   `;
  section.setAttribute("id", i.name.replaceAll(" ", "_"));
  main.append(article);
  article.append(section);
});
