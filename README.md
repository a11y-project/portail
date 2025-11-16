# Hub - Portail de liens
https://a11y-project.github.io/portail/index.html
Application web pour organiser et accéder à vos liens favoris via des portails thématiques.

## Structure du projet

```
hub/
├── index.html              # Page de sélection des portails
├── portal.html             # Page de détail d'un portail
├── css/
│   └── styles.css         # Styles de l'application
├── js/
│   ├── portals-list.js    # Gestion de la liste des portails
│   └── portal-detail.js   # Gestion des détails d'un portail
└── data/
    └── portals.json       # Données des portails et liens
```

## Utilisation

### Lancer l'application

Pour que l'application fonctionne correctement (chargement du fichier JSON), vous devez utiliser un serveur HTTP local.

**Option 1 : Avec Python**

Si vous avez Python installé :

```bash
# Python 3
cd "C:\Users\Eurobraille\OneDrive - TF1\Documents\hub"
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Puis ouvrez votre navigateur à l'adresse : http://localhost:8000

**Option 2 : Avec Node.js (http-server)**

Si vous avez Node.js installé :

```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
cd "C:\Users\Eurobraille\OneDrive - TF1\Documents\hub"
http-server -p 8000
```

Puis ouvrez votre navigateur à l'adresse : http://localhost:8000

**Option 3 : Avec VS Code (Live Server)**

Si vous utilisez Visual Studio Code :
1. Installez l'extension "Live Server"
2. Ouvrez le dossier du projet dans VS Code
3. Clic droit sur `index.html` > "Open with Live Server"

## Modifier les données

Pour ajouter, modifier ou supprimer des portails et des liens, éditez le fichier `data/portals.json`.

### Structure des données

```json
{
  "portals": [
    {
      "id": "identifiant-unique",
      "name": "Nom du portail",
      "sections": [
        {
          "title": "Titre de la section",
          "links": [
            {
              "name": "Nom du lien",
              "url": "https://example.com"
            }
          ]
        }
      ]
    }
  ]
}
```

## Fonctionnalités

- Sélection de portails thématiques
- Organisation des liens par sections
- Interface responsive
- Accessibilité avec rôles ARIA
- Chargement dynamique des données depuis JSON
