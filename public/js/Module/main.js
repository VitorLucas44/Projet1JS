import {Boss} from './boss';
import {Warrior} from './classe';
import {Mage} from './classe';
import {Archer} from './classe';

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