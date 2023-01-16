
// Fonction pour choisir aléatoirement une énigme parmi celles disponibles
export function selectPuzzle(indice) {
    const puzzles = [
      ("On peut me trouver au fond d’un bateau de pêche ou au milieu d’un court de tennis. Qui suis-je ?"),
      ("Je ne fais pas de bruit quand je me réveille mais je réveille tout le monde Qui suis je?"),
      (" Qu’est ce qui est plus grand que la Tour Eiffel, mais infiniment moins lourd. "),
    ]
    return puzzles[indice]
  }
  
  // Fonction pour demander à l'utilisateur de faire l'énigme
export function solvePuzzle(puzzle) {
    console.log(Math.floor(Math.random() * puzzle.length))
    console.log(`Vous devez résoudre l'énigme suivante pour finir le boss: ${selectPuzzle([Math.floor(Math.random() * puzzle.length)])}`);
    let attempts = 3;
    while (attempts > 0) {
      const answer = prompt("Entrez votre réponse :");
      if (answer === "filet" || answer === "soleil" || answer === "ombre") {
        return true;
      } else {
        console.log("Mauvaise réponse, essayez encore.");
        attempts--;
      }
    }
    console.log = alert("Vous n'avez pas réussi à résoudre l'énigme, vous etes mort.");
    return false;
  }
  // Si le boss a moins de 20% de points de vie poser une énigme à l'utilisateur
  if (boss.health <= boss.health * 0.2) {
    const puzzle = selectPuzzle();
    if (solvePuzzle(puzzles)) {
      console.log("Vous avez résolu l'énigme et vaincu le boss !");
    } else {
      console.log("Vous n'avez pas réussi à résoudre l'énigme, le combat continue.");
    }
  }