const sidebars = {
    // Sidebar pour le projet
    tutorialSidebar: [
        {
            type: 'category',
            label: '🔨Présentation',
            items: [
                'presentation/Bonjour',      // Exemple d'identifiant d'un document .md dans le dossier `docs`// Ajoutez les autres documents nécessaires
            ],
        },
        {
            type: 'category',
            label: '🏡Projet Domus',
            items: [
                'projet-domus/Présentation',      // Exemple d'un autre document .md
                'projet-domus/Ladomus',     // Et ainsi de suite
            ],
        },
    ],
};

export default sidebars;
