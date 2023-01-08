import {Boss} from './boss.js';
import {Warrior} from './classe.js';
import {Mage} from './classe.js';
import {Archer} from './classe.js';

 // Liste des boss disponibles
const bosses = [
    new Boss("Sauron", 200, 30),
    new Boss("Chronos", 200, 25),
    new Boss("Lilith", 200, 20)
    ];

 // Liste des héros disponibles
const heroes = [
    new Warrior("Conan"),
    new Mage("Gandalf"),
    new Archer("Legolas")
    ];


// Fonction pour lancer le jeu
function playGame() {
 // Choisir aléatoirement un boss parmi ceux disponibles
    const boss = bosses[Math.floor(Math.random() * bosses.length)];
          
// Demander à l'utilisateur de choisir un héros parmi ceux disponibles
    const hero = selectHero();
// Lancer la boucle de combat
    while (hero.health > 0 && boss.health > 0) {
// Demander à l'utilisateur de choisir une action (attaquer ou défendre) pour son héros
const action = selectAction();
    
// Appliquer l'action choisie par l'utilisateur et faire subir des dégâts au boss ou au héros
              if (action === "attack") {
                hero.attack();
                boss.health -= hero.attack;
              } else if (action === "defend") {
                hero.defend();
                boss.attack *= 0.5;
              }
// Si le boss a moins de 20% de points de vie poser une énigme à l'utilisateur
              if (boss.health <= boss.maxHealth * 0.2) {
                const puzzle = selectPuzzle();
                if (solvePuzzle(puzzle)) {
                  console.log("Vous avez résolu l'énigme et vaincu le boss !");
                  break;
                } else {
                  console.log("Vous n'avez pas réussi à résoudre l'énigme, le combat continue.");
                }
              }
// Faire attaquer le boss par défaut s'il n'a pas posé d'énigme ou si l'utilisateur n'a pas réussi à la résoudre
              hero.health -= boss.attack;
            }
// Afficher un message de victoire ou de défaite et quitter la boucle de combat
            if (hero.health <= 0) {
              console.log("Vous avez été vaincu par le boss.");
            } else {
              console.log("Vous avez vaincu le boss !");
            }
          }
          
// Fonction pour demander à l'utilisateur de choisir un héros
          function selectHero() {
            console.log("Choisissez votre héros :");
            for (let i = 0; i < heroes.length; i++) {
              console.log(`${i + 1}. ${heroes[i].name}`);
            }
            const choice = parseInt(prompt("Entrez le numéro de votre choix 1 à 3 pour votre héros :"));
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
      function selectPuzzle() {
          const puzzles = [
            "Je suis d'eau, je suis d'air et je suis d'électricité. Qui suis-je ?",
            "Une fois que l'on blabla"]
        }

// Fonction pour demander à l'utilisateur de faire l'énigme
function solvePuzzle(puzzle) {
    console.log(`Vous devez résoudre l'énigme suivante : "${puzzle}"`);
    let attempts = 3;
    while (attempts > 0) {
      const answer = prompt("Entrez votre réponse :");
      if (answer === "électricité") {
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
    