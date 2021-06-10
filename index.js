/** JavaScript */
let name = ''
let genre = ''
let choice = ''

console.log("Vous venez de quitter votre village aujourd'hui. Vous avez versé quelques chaudes larmes en disant au revoir à vos parents et vos amis. Avec un fragile bâton et un chaud manteau à capuche, vous parcourez les chemins enneigés pour réaliser votre rêve... devenir magicien ! Vous vous rendez à l'École des Lumières de Dalmior de Nioden.")

console.log('Le puissant et célèbre illusionniste Dalmior De Nioden, vous accueille en personne, vous êtes très honoré !')

// Demande le nom
name = prompt('Bienvenu dans mon école, jeune aventurier. Je suis Dalmior De Nioden, le plus puissant des illusionnistes de cette terre. Et toi, quel est ton nom ?')

// Demande le genre
console.log('Et je ne vois pas bien ton visage sous ta capuche, es-tu un garçon ou une fille ? demande Dalmior.')

genre = prompt('1. un garçon\n 2.une fille')

console.log("Bien, dit Dalmior, j'essaierai de m'en souvenir... mmm... comment t'appelles-tu déjà ? Ah ! oui ! " + name + '. Parfois, ma mémoire me joue des tours !')

console.log('Je te dis au revoir, je dois retourner travailler maintenant.')

console.log("Et toi aussi, tu dois commencer ton entraînement au plus vite. Je te conseille d'y aller maintenant !")

choice = prompt("1. Suivre le conseil de Dalmior et aller s'entraîner maintenant.\n2. Ou bien, aller se promener un peu dans le jardin avant")

if(choice == 1) {
  console.log("Vous entrez à l'intérieur de l'école des lumières, dans une salle très vaste. Les plafonds sont très hauts et éclairent la salle de lumières multicolores.")
  console.log("Sur la droite, vous apercevez un étrange personnage en train de regarder une boule lumineuse. C'est sûrement votre maître. Mais sur la gauche, il y a un étrange miroir, qui attire votre attention...")
} else if(choice == 2) {
  console.log("Le jardin de l'école est grandiose.")
  console.log('Il est bien fleuri à cette saison, et les fleurs sont très odorantes.')
  console.log("Soudain, vous croisez le jardinier Edgar. Il n'a pas l'air très content de vous voir par ici.")
}
