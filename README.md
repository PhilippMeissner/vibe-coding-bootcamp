# Vibe Coding Bootcamp — Session 4

Deployment & Hosting: Vom Laptop zur Live-App

---

## Voraussetzungen

- [Node.js](https://nodejs.org/) installiert (Version 18.17 oder höher)
- [NPM](https://npmjs.com/) installiert
- Ein [GitHub](https://github.com/) Account
- Ein [Vercel](https://vercel.com/) Account (kostenlos, am besten direkt mit GitHub verknüpfen)

---

## Schritt 1: Forken & Vercel anbinden

1. Wenn du das hier liest, solltest du auf Github sein. Klicke oben rechts auf **Fork**, um das Repo in deinen eigenen GitHub-Account zu kopieren.
2. Gehe zu [vercel.com/new](https://vercel.com/new) und importiere dein geforktes Repo.
3. Klicke auf **Deploy** — was passiert?

> Der Build ist fehlgeschlagen - Das ist Absicht und wir klären später, was es damit auf sich hat.


## Schritt 2: Lokal einrichten

```bash
# Repo klonen (DEIN-USERNAME ersetzen!)
git clone https://github.com/DEIN-USERNAME/vibe-coding-bootcamp.git

# In den Ordner wechseln
cd vibe-coding-bootcamp

# Abhängigkeiten installieren
npm install

# Dev-Server starten
npm run dev

# Tipp: Wenn etwas beim installieren oder starten schief läuft, kannst du auch Claude Code nutzen um eine Lösung zu erarbeiten.
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser — du solltest eine Willkommensnachricht sehen.

> ⚠️  Gib im Chat eine kurze Rückmeldung wenn du hier angekommen bist und schreib "Deployed und lokal gestartet - ✅"

---

## Schritt 3: Dein Motto & Impressum anzeigen

```bash
# .env-Datei aus dem Template erstellen
cp .env.example .env
```

Öffne die `.env`-Datei und befülle die Variablen nach deinem Gusto.
```bash
# Denk an die Schreibweise:
KEY="VALUE"

# Beispiel:
MEINE_UMGEBUNGSVARIABLE="Der Wert, den diese Variable innehaben soll"
```

Die Seite sollte automatisch neu laden und deine Daten darstellen.

> ⚠️  Gib im Chat eine kurze Rückmeldung wenn du hier angekommen bist und schreib "Personalisiert - ✅"

---

## Schritt 4: Warum ist der Vercel-Build fehlgeschlagen?

Gehe auf [vercel.com](https://vercel.com) → dein Projekt → **Deployments** → klicke auf das fehlgeschlagene Deployment → **Build Logs**.
Dort solltest du eine Fehlermeldung sehen - Was sagt sie aus? Kannst du den Fehler finden?

> ⚠️  Gib im Chat eine kurze Rückmeldung, wenn du meinst den Fehler gefunden zu haben und schreib "🕵️"

---

## Schritt 5: Let's get live!
1. **Vercel** → **Settings** → **Environment Variables**
2. Umgebungsvariablen eintragen (fiktive oder echte Werte)
3. Umgebung: **Alle** (Production, Preview, Development)
4. Re-Deploy des fehlgeschlagenen Builds auf Vercel, nachdem die Umgebungsvariablen hinzugefügt wurden
5. Sobald der Build erfolgreich ist, öffne die Seite und sieh nach, ob alles geklappt hat.

> ⚠️  Gib im Chat eine kurze Rückmeldung, wenn dein Zitat/Motto live ist - Teile die URL im Chat!

---

## Schritt 6: Review-App erstellen

Erstelle lokal einen neuen Branch und baue etwas Neues ein - Ganz egal was. Am Ende teilen wir die Ergbnisse :)
Mit deinen Änderungen erstellst du dann auf Github einen Pull-Request gegen den `main` Branch.
Was passiert, wenn der Pull-Request eröffnet wurde? Denk an unsere Deployment-Pipeline zurück.

Tipp: Du kannst Claude nutzen um Ideen zu sammeln oder deine Ideen implementieren zu lassen.

Vorschläge:
1. Konfetti! 🎉 Wenn jemand die Seite lädt, einen Klick macht oder einfach alle 5 Sekunden soll ein Konfettiregen auf der Seite starten.
2. Theme it! Lasse den Look der Seite so ändern, dass es deiner Lieblingsserie/-film entspricht. Wie wäre es mit dem Star Wars Effekt im Hintergrund?
3. Tipp-Effekt - Dein Motto soll Buchstabe für Buchstabe angezeigt werden, als ob es jemand gerade live tippen würde. Am Ende könnte dann ein blinkender Cursor sein.
4. Move it! Das Lieblingsmotto soll sich verschieben, wenn die Maus zu nahe kommt. Das Motto soll dann immer wieder zurück an seinen Ursprungsort springen.
5. Sounds??! - Binde deinen passenden Lieblingssong als Spotify-Player darunter ein.
6. ??? - Get creative!

```bash
# Git Cheat Sheet

# Zu (bestehendem Branch) wechseln
git checkout <branch-name>

# Neuen Branch erstellen
git checkout -b neuer-branch-name

# Schauen, welche Dateien sich geändert haben und/oder bereits "hinzugefügt" wurden
git status

# Alle Änderungen hinzufügen
git add .

# Änderungen einer einzelnen Datei hinzufügen
git add ./dateiname.json

# Hinzugefügte Änderungen bündeln und mit einer aussagekräftigen Nachricht versehen
git commit -m "Löst die Welthungersnot"

# Änderungen zu Github schieben
git push origin neuer-branch-name

# Änderungen von Github abholen
git pull origin <branch-name>
```

> ⚠️  Gib im Chat eine kurze Rückmeldung und heb die Hand, wenn du fertig bist!


--- 


## Schritt 7: Mergen & Production-Deployment

1. Merge deinen Pull Request auf GitHub
2. Gehe zu Vercel → **Deployments** — ein neues Production-Deployment startet automatisch
3. Öffne deine Production-URL — deine Änderungen sind live!


> ⚠️  YOU DONE DID IT! - Teile deinen Production-Link im Chat, damit alle deine App sehen können!

--- 


## Schritt 8: Cleanup

1. Wechsle lokal auf den `main` Branch zurück
2. Bringe deinen `main` Branch auf den aktuellsten Stand von Github
3. Verifizere es, indem du den lokalen Stand via `localhost:3000` anschaust.


> ⚠️ Fertig - Noch Fragen?



