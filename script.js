
const symbols = ['🐯', '🍉', '💰', '🍒', '🔔', '⭐', '7️⃣'];

function spin() {
    let r1 = symbols[Math.floor(Math.random() * symbols.length)];
    let r2 = symbols[Math.floor(Math.random() * symbols.length)];
    let r3 = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById('reel1').textContent = r1;
    document.getElementById('reel2').textContent = r2;
    document.getElementById('reel3').textContent = r3;

    let result = document.getElementById('result');
    let sound = document.getElementById('spin-sound');
    sound.play();

    if (r1 === r2 && r2 === r3) {
        result.textContent = "🎉 JACKPOT! Você ganhou no Tigrinho! 🎉";
    } else {
        result.textContent = "Não foi dessa vez... tente novamente!";
    }
}
