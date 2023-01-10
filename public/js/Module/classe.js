
// Classe pour le guerrier
export class Warrior {
    constructor(name) {
    this.name = name;
    this.health = 150;
    this.attaque= 50;
    this.rage = 0;
    }

    attack() {
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
      this.health *= 2.5;
      this.attaque *= 0.5;
    }
}

  // Classe pour le mage
  export class Mage {
    constructor(name) {
    this.name = name;
    this.health = 50;
    this.attaque = 50;
      this.mana = Math.floor(Math.random() * 3) + 7;
    }

    attack() {
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
            this.health *= 2.5;
            this.attaque *= 0.5;
        }
}
        
 // Classe pour l'archer
        export   class Archer {
        constructor(name) {
            this.name = name;
            this.health = 170;
            this.attaque = 35;
            this.arrows = Math.floor(Math.random() * 5) + 7;
        }
        
        attack() {
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
            this.health *= 2.5;
            this.attaque *= 0.5;
        }
}
