document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.getAttribute('data-name');
            history.pushState(null, null, '/wiki/' + name);
            
            // Przewijanie do odpowiedniej sekcji
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });

            // Aktualizacja tytułu strony
            document.title = `SeaOfSalt Wiki - ${name.charAt(0).toUpperCase() + name.slice(1)}`;
        });
    });

    window.addEventListener('popstate', function(event) {
        // Obsługa przycisków przeglądarki do przodu/do tyłu
        const path = window.location.pathname;
        const page = path.split('/').pop();
        const section = document.querySelector('#' + page);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

