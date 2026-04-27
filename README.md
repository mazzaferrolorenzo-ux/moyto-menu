# 🍕 MOYTO – Artisan Pizza Experience

Menu digitale interattivo per **MOYTO Pizza & Food** — Porto Sant'Elpidio, Lungomare Nord.

> *Dal forno al calice: un viaggio artigianale nel gusto.*

Web app premium, mobile-first, dark luxury. Costruita con **React + Vite + Tailwind + Framer Motion**. Nessun backend: il menu vive in un singolo file JS modificabile.

---

## ✨ Caratteristiche

- 🎬 **Loading screen** animato con logo MOYTO
- 🌒 **Hero cinematico** con sipario rosso, halo dorato e luce radiale che segue il cursore
- 🔍 **Ricerca live** su nome, descrizione e ingredienti (IT/EN)
- 🎚️ **Filtri**: vegetariano, piccante, consigliato
- 🌐 **Toggle lingua** IT/EN persistente
- ❤️ **Preferiti** salvati in localStorage
- 📱 **Sticky category nav** con scroll smooth e categoria attiva (IntersectionObserver)
- 🪟 **Modal fullscreen** per ogni prodotto con dettagli completi
- 💨 **Effetto vapore CSS** su pizze, cocktail e spritz
- 📞 Pulsanti rapidi: Chiama · Indicazioni · Prenota · Instagram
- ♿ Accessibilità: contrasti AA, focus visibili, `prefers-reduced-motion`, aria-label
- 🚀 Pronto per deploy su **Vercel**, **Netlify** o qualunque host statico

---

## 🚀 Avvio rapido

### Requisiti
- **Node.js 18+** ([download](https://nodejs.org))
- npm (incluso con Node)

### Installazione locale

```bash
# 1. Entra nella cartella del progetto
cd moyto-menu

# 2. Installa le dipendenze
npm install

# 3. Avvia il dev server
npm run dev
```

Apri il browser su 👉 **http://localhost:5173**

### Build di produzione

```bash
npm run build      # genera la cartella dist/
npm run preview    # anteprima del build di produzione
```

---

## 📝 Come modificare il menu

**Tutto il contenuto del menu è in un solo file**:

```
src/data/menu.js
```

### Modificare i contatti del ristorante

Apri `src/data/menu.js` e modifica l'oggetto `RESTAURANT` in cima al file:

```js
export const RESTAURANT = {
  phone: '+390000000000',           // ← numero di telefono reale
  phoneDisplay: '+39 000 000 0000',
  maps: 'https://maps.google.com/?q=...',  // ← link Google Maps reale
  instagram: 'https://instagram.com/...',  // ← @ Instagram reale
  reservation: '+390000000000',     // ← numero per prenotazioni
  // ...
}
```

### Aggiungere o modificare un piatto

Cerca l'array `MENU` e modifica/aggiungi un oggetto. Ogni prodotto ha questa forma:

```js
{
  id: 'margherita',                    // identificatore unico
  category: 'pizze-rosse',             // deve esistere in CATEGORIES
  name: { it: 'Margherita', en: 'Margherita' },
  description: {
    it: 'Pomodoro San Marzano e mozzarella…',
    en: 'San Marzano tomato and mozzarella…',
  },
  ingredients: {
    it: ['San Marzano', 'Mozzarella', 'Basilico'],
    en: ['San Marzano', 'Mozzarella', 'Basil'],
  },
  price: '7€',                         // stringa libera (per supportare formati come "0,2L 4€ · 0,4L 6€")
  tags: ['vegetarian'],                // 'vegetarian' | 'spicy' | 'recommended'
}
```

Per i **vini**, c'è un campo extra opzionale `wine: { doc: 'DOC', year: '2022' }` che viene mostrato in card.

### Modificare orari ed eventi

Sempre in `src/data/menu.js`, dentro `RESTAURANT`:

```js
hours: {
  it: 'Tutti i giorni · 19:00 — 01:00',
  en: 'Every day · 7:00 PM — 1:00 AM',
},
specialEvent: {
  it: 'Venerdì · serata karaoke',
  en: 'Friday · karaoke night',
},
```

### Modificare le quote brand

In fondo al file, l'oggetto `BRAND_QUOTES` contiene il claim hero, la filosofia, le frasi delle sezioni. Modifica solo il testo, non le chiavi.

### Modificare le stringhe UI (etichette pulsanti, ricerca, ecc.)

File: `src/data/i18n.js`. Contiene tutto il testo dell'interfaccia in IT/EN.

---

## ☁️ Pubblicare su Vercel (consigliato)

Vercel è il modo più rapido per mettere online il menu. **Deploy in 2 minuti, gratis, HTTPS automatico.**

### Opzione A — Drag & drop (la più rapida)

1. Esegui `npm run build`
2. Vai su [vercel.com/new](https://vercel.com/new)
3. Trascina la cartella `dist/` nella pagina
4. Vercel ti darà un URL tipo `https://moyto-menu.vercel.app` ✅

### Opzione B — Da repository GitHub

1. Crea un repo su GitHub e pusha il progetto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<tuo-username>/moyto-menu.git
   git push -u origin main
   ```
2. Vai su [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
3. Seleziona il repo. Vercel rileva automaticamente Vite e configura tutto
4. Click su **Deploy** ✅

Ad ogni `git push` il sito si aggiorna automaticamente.

### Opzione C — Via CLI Vercel

```bash
npm i -g vercel
vercel login
vercel              # primo deploy → ti chiede qualche cosa
vercel --prod       # promuove a produzione
```

### Dominio personalizzato

Su Vercel: **Settings → Domains → Add** → inserisci il dominio (es. `menu.moyto.it`) e segui le istruzioni DNS.

---

## 🌐 Alternative di deploy

<details>
<summary><b>Netlify</b></summary>

```bash
npm run build
# Vai su app.netlify.com → drag&drop della cartella dist/
```

Oppure connetti il repo GitHub: rileva Vite automaticamente.
</details>

<details>
<summary><b>GitHub Pages</b></summary>

1. Aggiungi a `vite.config.js`: `base: '/moyto-menu/'`
2. `npm run build`
3. Pusha la cartella `dist/` sul branch `gh-pages` (o usa l'action [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages))
</details>

<details>
<summary><b>Hosting tradizionale (cPanel, FTP, ecc.)</b></summary>

1. `npm run build`
2. Carica via FTP **tutto il contenuto** della cartella `dist/` nella root del sito (o sottocartella)
3. Assicurati che il server serva `index.html` come fallback per route inesistenti
</details>

---

## 📲 Generare il QR code per il tavolo

Dopo aver pubblicato online il menu (es. `https://moyto-menu.vercel.app` o `https://menu.moyto.it`):

### Strumenti gratuiti consigliati

- 🔗 [qr-code-generator.com](https://www.qr-code-generator.com/) — gratis, customizzabile, supporta logo
- 🔗 [qrcode-monkey.com](https://www.qrcode-monkey.com/) — eyecatching, permette frame/logo/colori dorati
- 🔗 [the-qrcode-generator.com](https://www.the-qrcode-generator.com/) — semplice, no signup

### Procedura consigliata

1. Vai su uno dei generator
2. Inserisci l'URL del menu pubblicato
3. **Personalizzazione brand**:
   - Colore foreground: nero `#0a0705` (o oro `#d4a24c`)
   - Colore background: crema `#f5ead4` (per leggibilità) o trasparente
   - Logo al centro: la "M" del logo MOYTO (esporta da `public/favicon.svg`)
4. **Esporta in alta risoluzione**:
   - PNG ≥ 1024×1024 px per stampa A6/A5
   - SVG (vettoriale) per stampe grandi e cornici tavoli
5. Stampa su **carta opaca o cartoncino kraft**, evita superfici lucide (riflessi rovinano la lettura)
6. Dimensione minima sul tavolo: **3×3 cm**, ideale 4–5 cm

### Test del QR
Scansiona con la fotocamera dello smartphone (iOS) o Google Lens (Android) prima di stampare.

### Tip pro
Se prevedi di **cambiare URL** (es. domini stagionali, redirect), usa un **QR code dinamico** (servizi come [qrcg.com](https://www.qr-code-generator.com/) Pro o [bitly.com](https://bitly.com)). Costo basso, ti permette di aggiornare la destinazione senza ristampare.

---

## 📁 Struttura del progetto

```
moyto-menu/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CategoryNav.jsx       # Nav sticky orizzontale
│   │   ├── CategorySection.jsx   # Header sezione + griglia card
│   │   ├── CursorGlow.jsx        # Halo radiale che segue il mouse
│   │   ├── Footer.jsx            # Orari, location, contatti, quote
│   │   ├── Hero.jsx              # Hero fullscreen iniziale
│   │   ├── LoadingScreen.jsx     # Schermata di caricamento
│   │   ├── Logo.jsx              # Logo testuale "MOYTO Pizza & Food"
│   │   ├── NoResults.jsx         # Stato vuoto
│   │   ├── ProductCard.jsx       # Card prodotto con steam, prezzo, fav
│   │   ├── ProductModal.jsx      # Modal fullscreen dettaglio
│   │   ├── SearchAndFilters.jsx  # Input ricerca + chip filtri
│   │   ├── Steam.jsx             # 3 wisp CSS per vapore
│   │   └── TopBar.jsx            # Bar fissa in alto
│   ├── data/
│   │   ├── menu.js               # ⭐ TUTTO IL MENU (modifica qui)
│   │   └── i18n.js               # Stringhe UI IT/EN
│   ├── hooks/
│   │   ├── useCursorGlow.js
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 # Variabili, grain texture, animazioni globali
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🎨 Personalizzare i colori del brand

Apri `tailwind.config.js`. Puoi modificare la palette `moyto.*`:

```js
colors: {
  moyto: {
    black: '#0a0705',     // nero profondo
    gold: '#d4a24c',      // oro caldo
    cream: '#f5ead4',     // crema testi
    copper: '#b87333',    // rame accenti
    burgundy: '#5a0e1a',  // rosso vino del sipario
    red: '#a30c1f',       // rosso acceso
  }
}
```

I componenti useranno automaticamente i nuovi valori.

Per il **font display** (titoli) e **script** (cuore brand), edita `tailwind.config.js` e i Google Fonts in `index.html`.

---

## 🐛 Troubleshooting

**Il menu non si apre / pagina bianca dopo il deploy**
→ Su hosting tipo GitHub Pages, devi impostare `base` in `vite.config.js`. Su Vercel/Netlify funziona out-of-the-box.

**Le icone Lucide non appaiono**
→ Assicurati di aver fatto `npm install` (Lucide è in `dependencies`).

**Le animazioni vanno a scatti su mobile vecchi**
→ La app già rispetta `prefers-reduced-motion`. Per disattivare manualmente: nelle impostazioni di iOS/Android, attiva *Riduci animazioni*.

**Voglio nascondere temporaneamente una categoria**
→ In `src/data/menu.js`, commenta la riga in `CATEGORIES` o sposta i prodotti in un'altra categoria. Le categorie senza prodotti non vengono renderizzate.

---

## 📜 Licenza

Codice del progetto: uso libero per il ristorante MOYTO.
Font: Playfair Display, Inter, Dancing Script (Google Fonts, OFL).
Icone: [Lucide](https://lucide.dev) — ISC license.

---

**Buon servizio!** 🥂
