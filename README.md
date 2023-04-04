# ig3_prog3_lexikon
Fachbegriffe-Lexikon für Webentwicklung und so (IG3 / Prog3)

## Noch zur Verfügung stehende Begriffe
* .gitignore
* Bootstrap
* Breakpoint
* ~~Browser~~
* CMS (Content Management System)
* CSS
* Developper Tools
* Domain
* flex (CSS)
* Framework
* git
* grid (CSS)
* Größeneinheiten im Web (em, rem, px, %, fr, …)
* Head-Informationen (HTML)
* HTML5
* HTML-Grundgerüst
* Internet
* JavaScript
* ~~jQuery~~
* Library
* margin / padding
* Mobile first
* position (CSS)
* ~~Repository~~
* ~~responsive Webdesign~~
* Schriften einbetten
* Svelte
* Systemschrift
* Top Level Domain
* ~~URL~~
* Webspace

## Contribution
Um eure Unterseite für das Projekt vorzubereiten, braucht ihr ein git-Repo mit folgender Struktur:

```
name_des_themas/
├─ css/
│  ├─ desktop.css
│  ├─ mobile.css
│  ├─ style.css
├─ img/
│  ├─ image1.jpg
│  ├─ ...
index.html
tile.json
```

Der Inhalt der `tile.json` ist folgender:
```
{
"title": "Titel des Themas",
"folder": "name_des_themas",
"description": "Lorem ipsum ...",
"tags": ["tag1", "tag2", "tag3"],
"author": "Fabian Rauch"
}
```
`title`: Headline der Kachel

`folder`: Name des Repositories

`description`: Beschreibungstext auf der Kachel (1 Satz)

`tags`: Array von 1-4 sinnvollen Schlagwörtern

`author`: Name des Studierenden

### Auswahl Schlagworte

- CSS
- Design
- HTML
- Internet
- JavaScript
- Softwareentwicklung
- Versionskontrolle
