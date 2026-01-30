document.addEventListener('DOMContentLoaded', () => {

    // --- Menu Toggle for Mobile ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });
    }

    // --- Close menu when a link is clicked ---
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
            }
        });
    });


    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.setAttribute('data-theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
        }
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- About Section Background on Scroll ---
    const aboutSection = document.getElementById('about');
    
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('in-view');
            } else {
                aboutSection.classList.remove('in-view');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    // --- Dynamic Skills Loading ---
    const skills = [
        { name: 'Flutter', icon: 'assets/ico/flutter_icon.svg', description: 'Desenvolvimento multiplataforma com alta performance.' },
        { name: 'BLoC & Cubit', icon: 'assets/ico/bloc_cubit_icon.png', description: 'Gerenciamento de estado robusto e escalável.' },
        { name: 'Clean Architecture', description: 'Código limpo, testável e de fácil manutenção.' },
        { name: 'CI/CD com Codemagic', icon: 'assets/ico/codemagic_icon.png', description: 'Automação de builds, testes e deploys.' },
        { name: 'Firebase', icon: 'assets/ico/firebase_icon.svg', description: 'Backend como serviço para apps modernos.' },
        { name: 'APIs REST', description: 'Integração com serviços de terceiros.' },
        { name: 'Offline-First', icon: 'assets/ico/sqlite_icon.svg', description: 'Apps funcionais com ou sem conexão.' },
        { name: 'GitHub', icon: 'assets/ico/github_icon.svg', description: 'Controle de versão e colaboração.' }
    ];

    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');

            let iconHtml = '';
            if (skill.icon) {
                iconHtml = `<img src="${skill.icon}" alt="${skill.name}">`;
            } else {
                iconHtml = `<div class="no-icon"><i class="fas fa-layer-group"></i></div>`;
            }

            skillCard.innerHTML = `
                ${iconHtml}
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            `;
            skillsGrid.appendChild(skillCard);
        });
    }


    // --- Dynamic Project Loading ---
    const projects = [
        {
            title: 'Projeto Studie',
            description: 'Um aplicativo de gerenciamento de estudos que ajuda os usuários a organizar seu tempo e materiais de estudo de forma eficiente.',
            image: 'screenshots/studie/flutter_12.png',
            screenshots: [
                'screenshots/studie/flutter_01.png',
                'screenshots/studie/flutter_02.png',
                'screenshots/studie/flutter_03.png',
                'screenshots/studie/flutter_04.png',
                'screenshots/studie/flutter_05.png',
                'screenshots/studie/flutter_06.png',
                'screenshots/studie/flutter_07.png',
                'screenshots/studie/flutter_08.png',
                'screenshots/studie/flutter_09.png',
                'screenshots/studie/flutter_10.png',
                'screenshots/studie/flutter_11.png',
                'screenshots/studie/flutter_12.png'
            ],
            githubUrl: 'https://github.com/DanielBrown1998/studie_public',
            technologies: ['Bloc', 'Clean Arch', 'I.A Integration', 'SQLite', 'Offline-First', 'Codemagic', 'GitHub Projects', 'Google Crashlytics', 'Google Analytics']
        },
        {
            title: 'API Rest Brasileirão',
            description: 'Uma API REST que fornece dados em tempo real sobre o campeonato brasileiro de futebol, incluindo tabelas, resultados e estatísticas.',
            image: 'screenshots/api_rest_brasileirao/flutter_01.png',
            screenshots: [
                'screenshots/api_rest_brasileirao/flutter_01.png',
                'screenshots/api_rest_brasileirao/flutter_02.png',
                'screenshots/api_rest_brasileirao/flutter_03.png',
                'screenshots/api_rest_brasileirao/flutter_04.png'
            ],
            githubUrl: 'https://github.com/DanielBrown1998/api_rest_brasileirao',
            technologies: ['Bloc', 'Clean Arch']
        },
        {
            title: 'Planning Poker',
            description: 'Uma aplicação Flutter multiplataforma para sessões de Planning Poker em tempo real, construída com Clean Architecture, MVVM e Firebase Realtime Database.',
            image: 'screenshots/planning_poker/flutter_01.png',
            screenshots: [
                'screenshots/planning_poker/flutter_01.png',
                'screenshots/planning_poker/flutter_02.png',
                'screenshots/planning_poker/flutter_03.png'
            ],
            githubUrl: 'https://github.com/DanielBrown1998/planning_poker',
            technologies: ['Provider', 'Command', 'MVVM', 'Clean Arch', 'Go-Router', 'GetIt', 'Firebase Realtime Database']
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');

    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            let techHtml = '';
            if (project.technologies && project.technologies.length > 0) {
                techHtml = `
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                `;
            }

            projectCard.innerHTML = `
                <img src="${project.image}" alt="Screenshot do ${project.title}" class="project-image">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${techHtml}
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank">Ver no GitHub <i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });
    }
});