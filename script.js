document.addEventListener('DOMContentLoaded', () => {

    // Defina aqui os nomes dos seus arquivos de imagem
    // Não precisa colocar o caminho completo, apenas o nome do arquivo com a extensão
    const studieImages = ['flutter_01.png', 'flutter_02.png', 'flutter_03.jpg', 'flutter_04.png', 'flutter_06.png']; // Adicione mais se precisar
    const usmImages = ['usm1.png', 'usm2.png', 'usm3.png', 'usm4.png', 'usm5.png', 'usm6.png', 'usm7.png', 'usm8.png', 'usm9.png', 'usm10.png', 'usm11.png', 'usm12.png', 'usm13.png', 'usm14.png', 'usm15.png', 'usm16.png', 'usm17.png', 'usm18.png']; // Adicione mais se precisar

    // Função para carregar imagens em um carrossel específico
    function loadCarouselImages(containerId, imageArray, folder) {
        const container = document.getElementById(containerId);
        if (!container) return;

        imageArray.forEach(imageName => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');

            const img = document.createElement('img');
            img.src = `screenshots/${folder}/${imageName}`;
            img.alt = `Screenshot do projeto ${imageName}`;

            const caption = document.createElement('p');
            caption.classList.add('caption');
            caption.textContent = imageName;

            item.appendChild(img);
            item.appendChild(caption);
            container.appendChild(item);
        });
    }

    // Carrega as imagens nos respectivos carrosseis
    loadCarouselImages('studie-container', studieImages, 'studie');
    loadCarouselImages('usm-container', usmImages, 'usm');

    // Lógica para os botões de navegação do carrossel
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        if(!container || !prevButton || !nextButton) return;
        
        // Evento para o botão "Próximo"
        nextButton.addEventListener('click', () => {
            const itemWidth = container.querySelector('.carousel-item').clientWidth;
            container.scrollLeft += itemWidth;
        });

        // Evento para o botão "Anterior"
        prevButton.addEventListener('click', () => {
            const itemWidth = container.querySelector('.carousel-item').clientWidth;
            container.scrollLeft -= itemWidth;
        });
    });
});