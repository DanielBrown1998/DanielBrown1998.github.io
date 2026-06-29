document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const header = document.querySelector('.site-header');
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.main-nav');
    const themeButton = document.querySelector('.theme-toggle');
    const navLinks = [...document.querySelectorAll('.main-nav a')];

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.dataset.theme = 'dark';
    }

    themeButton.addEventListener('click', () => {
        const isDark = root.dataset.theme === 'dark';
        if (isDark) {
            delete root.dataset.theme;
            localStorage.setItem('theme', 'light');
        } else {
            root.dataset.theme = 'dark';
            localStorage.setItem('theme', 'dark');
        }
    });

    const closeMenu = () => {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
        const willOpen = !navigation.classList.contains('open');
        navigation.classList.toggle('open', willOpen);
        menuButton.setAttribute('aria-expanded', String(willOpen));
        menuButton.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
        document.body.classList.toggle('menu-open', willOpen);
    });

    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    const sections = [...document.querySelectorAll('main section[id]')];
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-30% 0px -60%', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));

    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    document.getElementById('current-year').textContent = new Date().getFullYear();
});
