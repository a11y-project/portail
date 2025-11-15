// Chargement des données au démarrage
document.addEventListener('DOMContentLoaded', () => {
    displayPortalCards();
});

// Affichage des cartes de portails
function displayPortalCards() {
    const grid = document.getElementById('portals-grid');
    const portalsData = PORTALS_DATA.portals;

    if (!portalsData || portalsData.length === 0) {
        grid.innerHTML = '<p style="color: white; text-align: center;">Aucun portail disponible</p>';
        return;
    }

    grid.innerHTML = '';

    portalsData.forEach(portal => {
        const card = createPortalCard(portal);
        grid.appendChild(card);
    });
}

// Création d'une carte de portail
function createPortalCard(portal) {
    const listItem = document.createElement('li');

    const card = document.createElement('a');
    card.className = 'portal-card';
    card.href = `portal.html?id=${portal.id}`;

    const title = document.createElement('span');
    title.className = 'portal-name';
    title.textContent = portal.name;

    card.appendChild(title);
    listItem.appendChild(card);

    return listItem;
}
