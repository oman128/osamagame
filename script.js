let score = 0;

const scoreElement = document.getElementById('score');
const gameButton = document.getElementById('game-button');

// زيادة النقاط عند الضغط على الزر
gameButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;

    // تغيير موقع الزر عند كل نقرة
    const randomX = Math.random() * 300;
    const randomY = Math.random() * 300;
    gameButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
