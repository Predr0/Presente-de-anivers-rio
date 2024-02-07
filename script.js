let backgroundInterval;
function handleButtonClick() {
    countDays('2023-10-08');
    changeBackgroundColor();
    addMovingImages();
    moveImage();
    showGifs();
}

function countDays(initialDate) {
    // Obter a data inicial do parâmetro
    let date_ini = new Date(initialDate);
    
    // Obter a data atual
    let currentDate = new Date();
    
    // Calcular a diferença em milissegundos
    let diff = currentDate.getTime() - date_ini.getTime();
    
    // Calcular o número de dias
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Atualizar o elemento HTML
    document.getElementById('days').innerHTML = "Estamos juntos há " + days + " dias!!!<br>Obrigado por ser essa pessoa incrível na minha vida! :)";


    // Mudar a cor de fundo do body para uma cor aleatória com transição
    changeBackgroundColor();

    // Iniciar a mudança de cor automaticamente a cada segundo a partir do momento do clique no botão
    backgroundInterval = setInterval(changeBackgroundColor, 400);

    // Ocultar o botão após um segundo
    setTimeout(() => {
        document.getElementById('countButton').style.display = 'none';
    }, 1);
}

function changeBackgroundColor() {
    // Gerar uma cor aleatória em formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Atualizar a cor de fundo do body com transição
    document.body.style.transition = "background-color 0.3s ease";
    document.body.style.backgroundColor = randomColor;

    // Resetar a transição após 0.3 segundos
    setTimeout(() => {
        document.body.style.transition = "none";
    }, 300);
}
function addMovingImages() {
    // Selecionar o elemento 'days-container'
    const daysContainer = document.getElementById('days-container');

    // Criar e adicionar imagens ao container
    for (let i = 0; i < 1; i++) {
        const imgRight = document.createElement('img');
        imgRight.src = 'Imagens/bobinha.jpg'; // Substitua pelo caminho da sua imagem
        imgRight.classList.add('moving-image-right');
        daysContainer.appendChild(imgRight); // Adicionando a imagem diretamente ao 'days-container'
        moveImage(imgRight);

        const imgLeft = document.createElement('img');
        imgLeft.src = 'Imagens/e880a9a2-ba43-4848-b65f-fc85b7972887.jpg'; // Substitua pelo caminho da sua imagem
        imgLeft.classList.add('moving-image-left');
        daysContainer.appendChild(imgLeft); // Adicionando a imagem diretamente ao 'days-container'
        moveImage(imgLeft);
    }
    console.log('Imagens adicionadas');
}
function moveImage(img) {
    if (img && window.innerWidth > 600) { // Verifica se é desktop (largura maior que 600 pixels)
        // Define a posição inicial da imagem um pouco mais acima
        let initialY = window.innerHeight / 3; // Ajuste o divisor conforme necessário para controlar a altura inicial
        let initialX = (img.classList.contains('moving-image-right')) ? window.innerWidth - 100 : 0; // Verifica se é a imagem da direita ou da esquerda
        img.style.top = initialY + 'px';
        img.style.left = initialX + 'px';

        // Define a velocidade e a amplitude do movimento
        let speed = 8;
        let amplitude = 50;

        // Função para atualizar a posição da imagem
        function updatePosition() {
            // Calcula a nova posição vertical da imagem
            let newY = initialY + amplitude * Math.sin(speed * Date.now() / 850);
            img.style.top = newY + 'px';
        }

        // Chama a função de atualização da posição repetidamente
        setInterval(updatePosition, 1); // Ajuste conforme necessário para a taxa de atualização
    }
}
function showGifs() {
    const gifs = document.querySelectorAll('.confetes-gif');
    gifs.forEach(gif => {
        gif.style.display = 'block';
    });
}