const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');
const catImg = document.getElementById('catImg');
const buttonGroup = document.getElementById('buttonGroup');

// Función para mover el botón "NO" de forma aleatoria cuando el cursor se acerque
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${Math.max(20, x)}px`;
    noBtn.style.top = `${Math.max(20, y)}px`;
}

// Eventos para esquivar el cursor en PC y móviles
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Acción al hacer clic en "YES"
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yo tambien te amo preciosa<br><br> Vamos a coger? respondeme mandandome un mensaje 😻😻";
    catImg.src = "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"; // Cambia el GIF a uno celebrando
    buttonGroup.style.display = 'none'; // Oculta los botones
});