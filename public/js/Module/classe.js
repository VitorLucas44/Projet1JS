
// Classe pour le guerrier
export class Warrior {
    constructor(name) {
    this.name = name;
    this.health = 100;
    this.attaque= 40;
    this.rage = 0;
    }

    attack() {
      this.health -= 0.75 * this.attack;
    this.rage++;
    if (this.rage >= 4) {
        this.attaque *= 1.25;
        this.rage = 0;
        console.log(`${this.name} a atteint 4 points de rage et gagne un bonus d'attaque de 25% pour 1 tour !`);
    } else {
        this.attaque *= 1.4;
    }
}

    defend() {
      this.health *= 2.5;
      this.attack *= 0.5;
    }
}

  // Classe pour le mage
  export class Mage {
    constructor(name) {
    this.name = name;
    this.health = 80;
    this.attaque = 80;
      this.mana = Math.floor(Math.random() * 3) + 7;
    }

    attack() {
        if (this.mana < 2) {
            console.log(`${this.name} n'a plus assez de mana pour attaquer il passe son tour et récupère 7 points de mana.`);
            this.mana += 7;
            } else {
              this.health -= 0.75 * this.attack;
              this.attack *= 1.4;
            this.mana -= 2;
            }
        }
        
        defend() {
            this.health *= 2.5;
            this.attack *= 0.5;
        }
}
        
 // Classe pour l'archer
        export   class Archer {
        constructor(name) {
            this.name = name;
            this.health = 90;
            this.attaque = 60;
            this.arrows = Math.floor(Math.random() * 5) + 7;
        }
        
        attack() {
            if (this.arrows < 2) {
            console.log(`${this.name} n'a plus de flèches, il passe son tour et récupère 6 flèches.`);
            this.arrows += 6;
            } else {
              this.health -= 0.75 * this.attack;
              this.attack *= 1.4;
            this.arrows -= 2;
            }
        }
        
        defend() {
            this.health *= 2.5;
            this.attack *= 0.5;
        }
}
