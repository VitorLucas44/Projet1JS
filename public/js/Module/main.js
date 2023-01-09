import {Boss} from './boss.js';
import {Warrior} from './classe.js';
import {Mage} from './classe.js';
import {Archer} from './classe.js';
// import {enigmes} from './enigmes';

// Liste des boss disponibles
const bosses = [
    new Boss("Sauron", 300, 2),
    new Boss("Chronos", 350, 1),
    new Boss("Lilith", 280, 2)
    ];

// Liste des héros disponibles
const heroes = [
    new Warrior("Warrior"),
    new Mage("Mage"),
    new Archer("Archer")
    ];



// Fonction pour lancer le jeu
function playGame() {
// Choisir aléatoirement un boss parmi ceux disponibles
    console.log(alert`Vous entrez dans le Donjon`)
    const boss = bosses[Math.floor(Math.random() * bosses.length)];
    console.log(`Le BOSS ${boss.name} (${boss.health}hp) apparait`)
    heroes.name = prompt("Entrez le nom de votre Héro :");
    console.log(`Bienvenue ${heroes.name}`)
    const puzzles = [
      ("On peut me trouver au fond d’un bateau de pêche ? "),
      ("On peut me trouver au milieu d’un court de tennis ? "),
      ("On peut me trouver au fond des cages d'un terrain de foot ? "),
    ]

// Demander à l'utilisateur de choisir un héros parmi ceux disponibles
    const hero = selectHero();

     // Demandez à l'utilisateur de définir les points de vie de sa classe
  while (true) {
    heroes.health = +prompt("Combien de points de vie souhaitez-vous donner à votre classe ? (max 200)");

    // Vérifiez si la valeur saisie est un entier compris entre 0 et 200
    if (heroes.health >= 0 && heroes.health <= 200 && Number.isInteger(heroes.health)) {
      break;
    }

    // Si la valeur saisie n'est pas valide, demandez à l'utilisateur de saisir une nouvelle valeur
    alert("Valeur non valide. Veuillez saisir un entier compris entre 0 et 200.");
  }

    heroes.attaque = 200 - heroes.health;
    alert("Vous avez attribué " + heroes.health + " points de vie et " + heroes.attaque + " points d'attaque à votre classe.");
// Lancer la boucle de combat
    while (heroes.health > 0 && boss.health > 0) {
// Demander à l'utilisateur de choisir une action (attaquer ou défendre) pour son héros
const action = selectAction();
    
// Appliquer l'action choisie par l'utilisateur et faire subir des dégâts au boss ou au héros
              if (action === "attack") {
                hero.attack();
                boss.health -= hero.attaque;
                // console.log(hero.attack)
                // console.log(boss.health)
              } else if (action === "defend") {
                hero.defend();
                boss.attack *= 0.5;
              }
// Si le boss a moins de 20% de points de vie poser une énigme à l'utilisateur
              if (boss.health <= boss.health * 0.2) {
                const puzzle = selectPuzzle();
                if (solvePuzzle(puzzles)) {
                  console.log("Vous avez résolu l'énigme et vaincu le boss !");
                  break;
                } else {
                  console.log("Vous n'avez pas réussi à résoudre l'énigme, le combat continue.");
                }
              }
// Faire attaquer le boss par défaut s'il n'a pas posé d'énigme ou si l'utilisateur n'a pas réussi à la résoudre
              console.log(`Le boss à riposter il vous reste ${hero.health} hp`)
              hero.health -= boss.attack;
              console.log(`Et il reste au boss ${boss.health} hp`)
              // console.log(`${boss.attack} l'attaque du boss`)
            }
// Afficher un message de victoire ou de défaite et quitter la boucle de combat
            if (hero.health <= 0) {
              console.log(alert`Vous avez été vaincu par le boss.`);
            } else {
              if (boss.health <= 0){
                  console.log=alert(`Bravo ${heroes.name}, vous avez vaincu le boss !`);
              }
            }
          }
// Fonction pour demander à l'utilisateur de choisir un héros
          function selectHero() {
            console.log("Choisissez votre classes :");
            for (let i = 0; i < heroes.length; i++) {
              console.log(`${i + 1}. ${heroes[i].name}`);
            }
            const choice = parseInt(prompt("Entrez le numéro de votre choix 1 à 3 pour votre classes :"));
            return heroes[choice - 1];
          }
          
// Fonction pour demander à l'utilisateur de choisir une action pour son héros
      function selectAction() {
          console.log("Choisissez une action :");
          console.log("1. Attaquer");
          console.log("2. Défendre");
          const choice = parseInt(prompt("Entrez le numéro de votre choix 1 pour attaquer ou 2 pour défendre :"));
            if (choice === 1) {
              return "attack";
            } else {
              return "defend";
          }
      }
          
// Fonction pour choisir aléatoirement une énigme parmi celles disponibles
      function selectPuzzle(indice) {
          const puzzles = [
            ("On peut me trouver au fond d’un bateau de pêche ? "),
            ("On peut me trouver au milieu d’un court de tennis ? "),
            ("On peut me trouver au fond des cages d'un terrain de foot ? "),
          ]
            return puzzles[indice]
        }

// Fonction pour demander à l'utilisateur de faire l'énigme
function solvePuzzle(puzzle) {
  console.log(Math.floor(Math.random() * puzzle.length))
    console.log(`Vous devez résoudre l'énigme suivante pour finir le boss: ${selectPuzzle([Math.floor(Math.random() * puzzle.length)])}`);
    let attempts = 3;
    while (attempts > 0) {
      const answer = prompt("Entrez votre réponse :");
      if (answer === "filet") {
        return true;
      } else {
        console.log("Mauvaise réponse, essayez encore.");
        attempts--;
      }
  }
    return false;
}
  
// Lancer le jeu
  playGame();
