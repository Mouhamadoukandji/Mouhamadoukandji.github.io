# Portfolio — Mouhamadou Falilou Kandji

Site personnel statique (HTML, CSS, JavaScript, sans dépendance), en français et
en anglais, prévu pour GitHub Pages.

## Mettre en ligne sur GitHub Pages (5 minutes)

1. Sur GitHub, crée un nouveau dépôt **public** nommé exactement
   `Mouhamadoukandji.github.io`.
2. Dans le dépôt : **Add file → Upload files**, glisse tous les fichiers de ce
   dossier (`index.html`, `style.css`, `main.js`, `favicon.svg`, le CV en PDF,
   ce README), puis **Commit changes**.
3. **Settings → Pages** : dans *Build and deployment*, choisis
   *Deploy from a branch*, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une à deux minutes, le site est en ligne sur
   **https://mouhamadoukandji.github.io**

Ou en ligne de commande :

```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/Mouhamadoukandji/Mouhamadoukandji.github.io.git
git push -u origin main
```

Pour mettre le site à jour ensuite : modifie les fichiers et refais un commit,
GitHub Pages republie automatiquement.

## Ce qu'il reste à compléter

**Liens des projets** — en haut de `main.js`, bloc `REPOS` : colle l'adresse de
chaque dépôt quand il est public. Tant qu'un lien est vide, le projet renvoie
vers ton profil GitHub (sauf Fayma, affiché « code non public »).

```js
var REPOS = {
  etl:   "https://github.com/Mouhamadoukandji/pipeline-etl-airflow",
  kafka: "",
  ...
};
```

**Captures d'écran** (Power BI, Airflow) — dépose l'image dans le dossier, par
exemple `powerbi.png`, et demande-moi de l'ajouter au projet : elle peut
s'afficher sous le schéma ou à sa place.

**Photo** — même chose : dépose-la (format carré, 600 × 600 px environ) et
je l'intègre à côté de ton nom.

**CV** — remplace `CV_Mouhamadou_Falilou_KANDJI.pdf` par la nouvelle version en
gardant le même nom de fichier. Attention : le CV actuel contient ton numéro de
téléphone, qui sera donc téléchargeable par tous les visiteurs.

## Modifier les textes

Tous les contenus sont dans `main.js` :

- `T` : textes de l'interface (titres, boutons) en français et en anglais ;
- `PROJECTS` : les projets, leurs points clés, technologies et schémas ;
- `STAGES` : compétences par étape du pipeline ;
- `TIMELINE` : formations et expériences.

Chaque texte existe en `fr` et en `en` : pense à modifier les deux.
