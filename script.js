document.addEventListener('DOMContentLoaded', () => {

    // --- Translations ---
    const translations = {
        pt: {
            'nav.home': 'Home',
            'nav.about': 'Sobre Mim',
            'nav.skills': 'Skills',
            'nav.projects': 'Projetos',
            'nav.contact': 'Contato',
            'profile.title': 'Desenvolvedor Flutter',
            'home.subtitle': 'Desenvolvedor de aplicativos móveis com Flutter',
            'about.title': 'Sobre Mim',
            'about.intro': '<strong>Desenvolvedor Mobile Flutter</strong> com foco em arquiteturas robustas e escaláveis. Especialista em <strong>Clean Architecture</strong>, <strong>SOLID</strong> e padrões de projeto (Command, Repository, Bloc, MVVM, Factory, Strategy), com experiência consolidada no ecossistema Dart/Flutter, CI/CD.',
            'about.stack': 'Stack Principal',
            'about.experience': 'Experiência',
            'about.present': 'Atual',
            'about.exp1.title': 'Desenvolvedor Mobile & Instrutor Flutter',
            'about.exp1.desc': 'Ciclo completo de desenvolvimento mobile e capacitação técnica da equipe.',
            'about.exp2.title': 'Monitor de Arquitetura de Computadores',
            'about.exp2.desc': 'Liderança de ensino para 40 alunos com aumento de 50% nas aprovações.',
            'about.exp3.title': 'Instrutor em Segurança Digital',
            'about.exp3.desc': 'Desenvolvimento de conteúdo técnico sobre segurança digital.',
            'about.education': 'Formação',
            'about.edu1': 'Bacharelado em Ciência da Computação',
            'about.expected': 'Previsão',
            'about.edu2': 'Programação de Computadores',
            'skills.title': 'Habilidades Técnicas',
            'portfolio.title': 'Meus Projetos',
            'contact.title': 'Entre em Contato',
            'contact.desc': 'Estou sempre aberto a novas oportunidades e colaborações.',
            'project.viewGithub': 'Ver no GitHub',
            skills: {
                'Flutter': { name: 'Flutter', description: 'Desenvolvimento multiplataforma com alta performance.' },
                'BLoC & Cubit': { name: 'BLoC & Cubit', description: 'Gerenciamento de estado robusto e escalável.' },
                'Clean Architecture': { name: 'Clean Architecture', description: 'Código limpo, testável e de fácil manutenção.' },
                'CI/CD com Codemagic': { name: 'CI/CD com Codemagic', description: 'Automação de builds, testes e deploys.' },
                'Firebase': { name: 'Firebase', description: 'Backend como serviço para apps modernos.' },
                'APIs REST': { name: 'APIs REST', description: 'Integração com serviços de terceiros.' },
                'Offline-First': { name: 'Offline-First', description: 'Apps funcionais com ou sem conexão.' },
                'GitHub': { name: 'GitHub', description: 'Controle de versão e colaboração.' }
            },
            projects: {
                'Projeto Studie': {
                    title: 'Projeto Studie',
                    description: 'Um aplicativo pensado para estudantes e desenvolvedores que desejam crescer profissionalmente e academicamente, plano de estudos gerado por I.A, consultas de conceitos contextualizado com as melhores referencias academicas.'
                },
                'API Rest Brasileirão': {
                    title: 'API Rest Brasileirão',
                    description: 'Um app que implementa a API BRASILEIRAO que fornece dados em tempo real sobre o campeonato brasileiro de futebol, incluindo tabelas, resultados e estatísticas.'
                },
                'Planning Poker': {
                    title: 'Planning Poker',
                    description: 'Uma aplicação Flutter multiplataforma para sessões de Planning Poker em tempo real.'
                }
            }
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About Me',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'profile.title': 'Flutter Developer',
            'home.subtitle': 'Mobile application developer with Flutter',
            'about.title': 'About Me',
            'about.intro': '<strong>Flutter Mobile Developer</strong> focused on robust and scalable architectures. Specialist in <strong>Clean Architecture</strong>, <strong>SOLID</strong> and design patterns (Command, Repository, Bloc, MVVM, Factory, Strategy), with consolidated experience in the Dart/Flutter ecosystem, CI/CD.',
            'about.stack': 'Main Stack',
            'about.experience': 'Experience',
            'about.present': 'Present',
            'about.exp1.title': 'Mobile Developer & Flutter Instructor',
            'about.exp1.desc': 'Complete mobile development cycle and technical training of the team.',
            'about.exp2.title': 'Computer Architecture Teaching Assistant',
            'about.exp2.desc': 'Teaching leadership for 40 students with 50% increase in approvals.',
            'about.exp3.title': 'Digital Security Instructor',
            'about.exp3.desc': 'Development of technical content on digital security.',
            'about.education': 'Education',
            'about.edu1': 'Bachelor in Computer Science',
            'about.expected': 'Expected',
            'about.edu2': 'Computer Programming',
            'skills.title': 'Technical Skills',
            'portfolio.title': 'My Projects',
            'contact.title': 'Get in Touch',
            'contact.desc': 'I am always open to new opportunities and collaborations.',
            'project.viewGithub': 'View on GitHub',
            skills: {
                'Flutter': { name: 'Flutter', description: 'Cross-platform development with high performance.' },
                'BLoC & Cubit': { name: 'BLoC & Cubit', description: 'Robust and scalable state management.' },
                'Clean Architecture': { name: 'Clean Architecture', description: 'Clean, testable and maintainable code.' },
                'CI/CD com Codemagic': { name: 'CI/CD with Codemagic', description: 'Automation of builds, tests and deploys.' },
                'Firebase': { name: 'Firebase', description: 'Backend as a service for modern apps.' },
                'APIs REST': { name: 'REST APIs', description: 'Integration with third-party services.' },
                'Offline-First': { name: 'Offline-First', description: 'Functional apps with or without connection.' },
                'GitHub': { name: 'GitHub', description: 'Version control and collaboration.' }
            },
            projects: {
                'Projeto Studie': {
                    title: 'Studie Project',
                    description: 'An app designed for students and developers who want to grow professionally and academically, AI-generated study plans, concept queries contextualized with the best academic references.'
                },
                'API Rest Brasileirão': {
                    title: 'Brazilian League REST API',
                    description: 'An app that implements the BRASILEIRAO API that provides real-time data about the Brazilian football championship, including tables, results and statistics.'
                },
                'Planning Poker': {
                    title: 'Planning Poker',
                    description: 'A cross-platform Flutter application for real-time Planning Poker sessions.'
                }
            }
        }
    };

    let currentLang = localStorage.getItem('language') || 'pt';

    // --- Language Switcher ---
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        
        // Update button states
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Reload skills and projects with new language
        loadSkills();
        loadProjects();
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

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

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
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
        { name: 'Flutter', icon: 'assets/ico/flutter_icon.svg' },
        { name: 'BLoC & Cubit', icon: 'assets/ico/bloc_cubit_icon.png' },
        { name: 'Clean Architecture' },
        { name: 'CI/CD com Codemagic', icon: 'assets/ico/codemagic_icon.png' },
        { name: 'Firebase', icon: 'assets/ico/firebase_icon.svg' },
        { name: 'APIs REST' },
        { name: 'Offline-First', icon: 'assets/ico/sqlite_icon.svg' },
        { name: 'GitHub', icon: 'assets/ico/github_icon.svg' }
    ];

    const skillsGrid = document.querySelector('.skills-grid');
    
    function loadSkills() {
        if (!skillsGrid) return;
        skillsGrid.innerHTML = '';
        
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');

            let iconHtml = '';
            if (skill.icon) {
                iconHtml = `<img src="${skill.icon}" alt="${skill.name}">`;
            } else {
                iconHtml = `<div class="no-icon"><i class="fas fa-layer-group"></i></div>`;
            }

            const translatedSkill = translations[currentLang].skills[skill.name] || { name: skill.name, description: '' };

            skillCard.innerHTML = `
                ${iconHtml}
                <h3>${translatedSkill.name}</h3>
                <p>${translatedSkill.description}</p>
            `;
            skillsGrid.appendChild(skillCard);
        });
    }


    // --- Dynamic Project Loading ---
    const projects = [
        {
            key: 'Projeto Studie',
            image: 'screenshots/studie/flutter_02.png',
            screenshots: [
                'screenshots/studie/flutter_01.png',
                'screenshots/studie/flutter_02.png',
                'screenshots/studie/flutter_03.png',
                'screenshots/studie/flutter_04.png',
            ],
            githubUrl: 'https://github.com/DanielBrown1998/studie_public',
            technologies: ['Bloc', 'Clean Arch', 'I.A Integration', 'SQLite', 'Offline-First', 'Codemagic', 'GitHub Projects', 'Google Crashlytics', 'Google Analytics']
        },
        {
            key: 'API Rest Brasileirão',
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
            key: 'Planning Poker',
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

    function loadProjects() {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            const translatedProject = translations[currentLang].projects[project.key] || { title: project.key, description: '' };

            let techHtml = '';
            if (project.technologies && project.technologies.length > 0) {
                techHtml = `
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                `;
            }

            projectCard.innerHTML = `
                <img src="${project.image}" alt="Screenshot do ${translatedProject.title}" class="project-image">
                <div class="project-info">
                    <h3>${translatedProject.title}</h3>
                    <p>${translatedProject.description}</p>
                    ${techHtml}
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank">${translations[currentLang]['project.viewGithub']} <i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });
    }

    // Initialize language on page load
    setLanguage(currentLang);
});