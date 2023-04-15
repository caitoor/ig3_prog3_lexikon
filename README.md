# ig3_prog3_lexikon
Fachbegriffe-Lexikon für Webentwicklung und so (IG3 / Prog3)

## Semesteraufgabe Teil 1 (HTML/CSS)
Alle Kursteilnehmer*innen müssen einen Begriff des Programmieren3-Lexikons als eigene Unterseite mit folgenden Anforderungen ausarbeiten:

- Eigenes Layout
- ausführliche Erklärung des Begriffs
- Text-Bild-Kombination als Content
- Allgemeines Seitenlayout mit CSS-grid, 
- COntentbereich der Seite mit CSS-flex
- Google Font lokal einbinden 
- Responsive (mobile / desktop)
- Verlinkung auf Hauptseite (`<a href="../../index.html">Hauptseite</a>`)
- Quickfacts als JSON
- als Repo auf github hochgeladen
- Größe des Gesamtordners max. 1 MB

## Noch zur Verfügung stehende Begriffe
* .gitignore
* Bootstrap
* Breakpoint
* ~~Browser~~
* CMS (Content Management System)
* ~~CSS~~
* ~~Developper Tools~~
* ~~Domain~~
* ~~flex (CSS)~~
* ~~Framework~~
* git
* ~~grid (CSS)~~
* ~~Größeneinheiten im Web (em, rem, px, %, fr, …)~~
* ~~Head-Informationen (HTML)~~
* ~~HTML5~~
* ~~HTML-Grundgerüst~~
* ~~Internet~~
* ~~JavaScript~~
* ~~jQuery~~
* Library
* ~~margin / padding~~
* Mobile first
* position (CSS)
* ~~Repository~~
* ~~responsive Webdesign~~
* Schriften einbetten
* Svelte
* ~~Systemschrift~~
* ~~Top Level Domain~~
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
├─ fonts/
│  ├─ ...
├─ img/
│  ├─ image1.jpg
│  ├─ ...
index.html
tile.json
```

Bitte auf korrekte Benennung der Dateien und Ordner achten!

Der Inhalt der `tile.json` ist folgender:
```
{
"title": "Titel des Themas",
"folder": "name_des_themas",
"description": "Lorem ipsum ...",
"tags": ["tag1", "tag2", "tag3"],
"author": "Fabian Rauch",
"github": "https://github.com/caitoor/ig3_prog3_lexikon"
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

### Links

Das fertige Projekt befindet sich auf https://ig3.rauch-fabian.de/