// Take the translate class 
let showEmoji = document.querySelector('.emojis');
// Words dictionnary 
const dicoEmojis =  {
  "ballon": " 🎈  ",
  "lettre d'amour": " 💌  ",
  "aime":" 💗  ",
  "cœur brisé": " 💔  ",
  "coeur brisé": " 💔  ",
  "aime plus": " 💔  ",
  "aimes plus": " 💔  ",
  "canard": " 🦆  ",
  "canards": " 🦆🦆  ",
  "caca":" 💩  ",
  "crotte":" 💩  ",
  "crottes":" 💩  ",
  "chocolat":" 🍫  ",
  "tablette de chocolat":" 🍫  ",
  "tablettes de chocolat":" 🍫  ",
  "cookies":" 🍪  ",
  "donut":" 🍩  ",
  "donuts":" 🍩  ",
  "donut au chocolat":" 🍩  ",
  "bière":" 🍺  ",
  "bières":" 🍻  ",
  "banane": " 🍌  ",
  "feu": " 🔥  ",
  "brûle": " 🔥🔥  ",
  "fantôme": " 👻  ",
  "singe": " 🐒  ",
  "abeille": " 🐝  ",
  "abeilles": " 🐝 🐝   ",
  "morte de rire":" 🤣  ",
  "mort de rire":" 🤣  ",
  "clin d'oeil":" 😉  ",
  "embrasse":" 😘  ",
  "envie":" 😍  ",
  "s'il-te-plaît":" 🥺  ",
  "énerve":" 😤  ",
  "énerves":" 😤  ",
  "énerver":" 😤  ",
  "mortel":" ☠️  ",
  "ok":" 👍  ",
  "daccord":" 👍  ",
  "nul":" 👎🏽  ",
  "danser":" 💃🏽  ",
  "danses":" 💃🏽  ",
  "danse":" 💃🏽  ",
  "fumer":" 🚬 😶‍🌫️  ",
  "fumes":" 🚬 😶‍🌫️  ",
  "fume":" 🚬 😶‍🌫️  ",
  "fièvre":" 🤒  ",
  "rhume":" 🤧  ",
  "covid":" 🤮🤧🤒  ",
  "malade":" 🤢  ",
  "code":" 💻🤯  ",
  "coder":" 🤯  ",
  "codes":" 🤯  ",
  "nounours":" 🧸  ",
  "peluche":" 🧸  ",
  "dragon":" 🐉  ",
  "cadeau":" 🎁  ",
  "ninja":" 🥷🏼  ",
  "discret":" 🥷🏼  ",
  "heureux":" 😁  ",
  "heureuse":" 😁  ",
  "joyeux":" 😁  ",
  "joyeuse":" 😁  ",
  "tais-toi":" 🤫  ",
  "taire":" 🤫  ",
  "rien vu":" 🙈  ",
  "rien entendu":" 🙉  ",
  "rien dis":" 🙊  ",
  "poulpe":" 🐙  ",
  "chat":" 🐈‍⬛  ",
  "chatte":" 🐈‍⬛  ",
  "minou":" 🐈‍⬛  ",
  "miel":" 🍯  ", 
};

// Take the button class 
let submit = document.querySelector(".submit");

// button take the action to translate words with the for loop  
submit.addEventListener("click",()=> {
let askWord = document.querySelector('.text').value
 for (const [word, emoji] of Object.entries(dicoEmojis)) {
    askWord = askWord.replace(word,emoji);
    askWord = askWord.toLowerCase().replace(word,emoji);
    askWord = askWord.toUpperCase().replace(word,emoji);  
    console.log(askWord);  
}
// Show translation in showEmoji class 
showEmoji.innerHTML = askWord;
});







