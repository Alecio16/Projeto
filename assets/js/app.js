document.addEventListener('DOMContentLoaded', () => {
    const colorScreens = document.querySelectorAll('.color-screen');
    const changeColorButton = document.createElement('button'); // Cria um novo botão
    changeColorButton.textContent = 'toque aqui'; // Define o texto do botão
    document.querySelector('.container').prepend(changeColorButton); // Adiciona o botão no início do container

    function generateRandomHexColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    changeColorButton.addEventListener('click', () => {
        colorScreens.forEach(screen => {
            const newColor = generateRandomHexColor();
            screen.style.backgroundColor = newColor;
            const hexCodeElement = screen.querySelector('.hex-code');
            if (hexCodeElement) {
                hexCodeElement.textContent = newColor;
            }
        });
    });
});