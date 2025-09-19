document.addEventListener('DOMContentLoaded', () => {

    // Defina aqui os nomes dos seus arquivos de imagem
    // Não precisa colocar o caminho completo, apenas o nome do arquivo com a extensão
    const studieImages = ['flutter_01.png', 'flutter_02.png', 'flutter_03.png', 'flutter_04.png', 'flutter_06.png']; // Adicione mais se precisar
    const usmImages = ['usm1.png', 'usm2.png', 'usm3.png', 'usm4.png', 'usm5.png', 'usm6.png', 'usm7.png', 'usm8.png', 'usm9.png', 'usm10.png', 'usm11.png', 'usm12.png', 'usm13.png', 'usm14.png', 'usm15.png', 'usm16.png', 'usm17.png', 'usm18.png']; // Adicione mais se precisar
    const apiRestBrasileiraoImages = ['flutter_01.png', 'flutter_02.png', 'flutter_03.png', 'flutter_04.png'];

    const githubLinks = {
        'Projeto Studie': 'https://github.com/DanielBrown1998/studie_public',
        'Projetos USM': 'https://github.com/DanielBrown1998/USM_public',
        'API Rest Brasileirão': 'https://github.com/DanielBrown1998/api_rest_brasileirao'
    };

    function addGithubLinks() {
        const h3s = document.querySelectorAll('#portfolio h3');
        h3s.forEach(h3 => {
            const projectName = h3.textContent;
            const githubUrl = githubLinks[projectName];
            if (githubUrl) {
                const link = document.createElement('a');
                link.href = githubUrl;
                link.target = '_blank';
                link.innerHTML = '<img src="assets/ico/github-mark-white.png" alt="GitHub" class="github-icon">';
                h3.appendChild(link);
            }
        });
    }

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
    loadCarouselImages('api-rest-brasileirao-container', apiRestBrasileiraoImages, 'api_rest_brasileirao');
    addGithubLinks();

    // Lógica para os botões de navegação do carrossel
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        if (!container || !prevButton || !nextButton) return;

        let autoScrollInterval;

        const startAutoScroll = () => {
            // Limpa qualquer intervalo anterior para evitar múltiplos loops
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => {
                const itemWidth = container.querySelector('.carousel-item')?.clientWidth;
                if (!itemWidth) return;

                // Verifica se chegou ao final do carrossel
                // A tolerância (itemWidth / 2) ajuda a evitar problemas de arredondamento
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - itemWidth / 2) {
                    container.scrollLeft = 0; // Volta para o início
                } else {
                    container.scrollLeft += itemWidth; // Rola para o próximo item
                }
            }, 1000); // Rola a cada 5 segundos
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        // Evento para o botão "Próximo"
        nextButton.addEventListener('click', () => {
            const itemWidth = container.querySelector('.carousel-item').clientWidth;
            container.scrollLeft += itemWidth;
            stopAutoScroll(); // Para a rolagem automática ao navegar manualmente
        });

        // Evento para o botão "Anterior"
        prevButton.addEventListener('click', () => {
            const itemWidth = container.querySelector('.carousel-item').clientWidth;
            container.scrollLeft -= itemWidth;
            stopAutoScroll(); // Para a rolagem automática ao navegar manualmente
        });

        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);

        startAutoScroll(); // Inicia a rolagem automática
    });

    // Lógica para o efeito de fade-in na rolagem
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // Aciona quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para de observar depois que a animação acontece
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});