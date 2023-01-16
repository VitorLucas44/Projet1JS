//personnage extend
// Classe pour le guerrier
class Personnage {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attaque`);
  }

  defend() {
    console.log(`${this.name} se défend`);
  }
}

export class Warrior extends Personnage {
  constructor(name) {
    super(name);
    this.health = 150;
    this.attaque = 50;
    this.rage = 0;
  }

  attack() {
    super.attack();
    this.health -= 0.75 * this.attaque;
    this.rage++;
    if (this.rage >= 4) {
        this.attaque *= 1.25;
        this.rage = 0;
        console.log(alert`${this.name} Vous avez atteint 4 points de rage et gagne un bonus d'attaque de 25% pour 1 tour !`);
    } else {
        this.attaque *= 1.4;
    }
  }

  defend() {
    super.defend();
    this.health *= 2.5;
    this.attaque *= 0.5;
  }
}

export class Mage extends Personnage {
  constructor(name) {
    super(name);
    this.health = 140;
    this.attaque = 60;
    this.mana = Math.floor(Math.random() * 3) + 7;
  }

  attack() {
    super.attack();
    if (this.mana < 2) {
      console.log(alert`${this.name} Vous n'avez plus assez de mana pour attaquer, vous passez son tour et récupère 7 points de mana.`);
      this.mana += 7;
    } else {
      this.health -= 0.75 * this.attaque;
      this.attaque *= 1.4;
      this.mana -= 2;
    }
  }

  defend() {
    super.defend();
    this.health *= 2.5;
    this.attaque *= 0.5;
  }
}

export class Archer extends Personnage {
  constructor(name) {
    super(name);
    this.health = 170;
    this.attaque = 30;
    this.arrows = Math.floor(Math.random() * 5) + 7;
  }

  attack() {
    super.attack();
    if (this.arrows < 2) {
      console.log(alert`${this.name} Vous n'avez plus de flèches, vous passez son tour et récupère 6 flèches.`);
      this.arrows += 6;
    } else {
      this.health -= 0.75 * this.attaque;
      this.attaque *= 1.4;
      this.arrows -= 2;
    }
  }

  defend() {
    super.defend();
    this.health *= 2.5;
    this.attaque *= 0.5;
  }
}


