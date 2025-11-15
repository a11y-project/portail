// Chargement du portail au démarrage
document.addEventListener('DOMContentLoaded', () => {
    loadPortal();
});

// Récupération de l'ID du portail depuis l'URL
function getPortalIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Chargement du portail
function loadPortal() {
    const portalId = getPortalIdFromUrl();

    if (!portalId) {
        displayError('Aucun portail sélectionné');
        return;
    }

    const portalsData = PORTALS_DATA.portals;
    const portal = portalsData.find(p => p.id === portalId);

    if (!portal) {
        displayError('Portail non trouvé');
        return;
    }

    displayPortal(portal);
}

// Affichage du portail
function displayPortal(portal) {
    // Mise à jour du titre
    const titleElement = document.getElementById('portal-title');
    titleElement.textContent = portal.name;

    // Affichage des sections
    renderPortalContent(portal);
}

// Rendu du contenu du portail
function renderPortalContent(portal) {
    const contentContainer = document.getElementById('portal-content');
    contentContainer.innerHTML = '';

    if (!portal.sections || portal.sections.length === 0) {
        contentContainer.innerHTML = '<p style="color: white; text-align: center;">Aucune section disponible pour ce portail</p>';
        return;
    }

    portal.sections.forEach(section => {
        const sectionElement = createSectionElement(section);
        contentContainer.appendChild(sectionElement);
    });
}

// Création d'un élément de section
function createSectionElement(section) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';

    const title = document.createElement('h2');
    title.textContent = section.title;
    sectionDiv.appendChild(title);

    if (section.links && section.links.length > 0) {
        const linksList = createLinksList(section.links);
        sectionDiv.appendChild(linksList);
    } else {
        const noLinks = document.createElement('p');
        noLinks.textContent = 'Aucun lien disponible';
        noLinks.style.color = '#999';
        sectionDiv.appendChild(noLinks);
    }

    return sectionDiv;
}

// Création de la liste de liens
function createLinksList(links) {
    const ul = document.createElement('ul');
    ul.className = 'links-list';

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = link.url;
        a.textContent = link.name;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';

        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
}

// Affichage d'un message d'erreur
function displayError(message) {
    const titleElement = document.getElementById('portal-title');
    titleElement.textContent = 'Erreur';

    const contentContainer = document.getElementById('portal-content');
    contentContainer.innerHTML = `
        <div class="error" style="
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            color: #dc3545;
            font-size: 1.2em;
        ">
            <p>${message}</p>
            <a href="index.html" style="
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background: #667eea;
                color: white;
                text-decoration: none;
                border-radius: 8px;
            ">Retour aux portails</a>
        </div>
    `;
}
