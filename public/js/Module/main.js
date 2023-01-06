import {Boss} from './boss.js';
import {Warrior} from './classe.js';
import {Mage} from './classe.js';
import {Archer} from './classe.js';

 // Liste des boss disponibles
const bosses = [
    new Boss("Sauron", 200, 30),
    new Boss("Chronos", 250, 25),
    new Boss("Lilith", 300, 20)
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
    
// Appliquer l'action choisie par l'utilisateur et faire subir des dégâts au boss ou au héros en conséquence
              if (action === "attack") {
                hero.attack();
                boss.health -= hero.attack;
              } else if (action === "defend") {
                hero.defend();
                boss.attack *= 0.5;
              }
          