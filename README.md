# 💗 Hej, Lenka, kocham Cię

Mała, interaktywna strona-niespodzianka na **1. miesiąc** i **18. urodziny**.
Pięć slajdów w stylu Spotify Wrapped — statystyki, ścieżka dźwiękowa, galeria wspomnień i licznik czasu razem.

Stack: **Astro 5** + vanilla CSS + `canvas-confetti` (zero React, zero Tailwind, czysty wynik).

---

## 🚀 Szybki start

```bash
npm install
npm run dev          # lokalny podgląd: http://localhost:4321
npm run build        # produkcyjny build do ./dist
npm run preview      # podgląd zbudowanej wersji
```

---

## ✏️ Co spersonalizować

**Cała konfiguracja strony jest w jednym pliku:**

```
src/data/config.ts
```

Otwórz go i edytuj:

| Co zmienić                     | Pole                                  |
| ------------------------------ | ------------------------------------- |
| Jej imię, Twoje imię           | `jejImie`, `twojeImie`                |
| Data początku związku          | `dataRazem` (do licznika na żywo)     |
| Data 18. urodzin               | `dataUrodzin`                         |
| Statystyki na slajdzie 2       | `statystyki[]`                        |
| Link Spotify (utwór/playlista) | `spotifyEmbedUrl`                     |
| Zdjęcia w galerii              | `zdjecia[]` + pliki w `public/images/` |
| Życzenia na finał              | `final.zyczenia`                      |
| Nagłówki / podtytuły           | reszta obiektu `siteConfig`           |

### Jak wkleić własny utwór ze Spotify

1. Otwórz utwór/playlistę w Spotify.
2. `⋮` → **Udostępnij** → **Osadź**.
3. Skopiuj **tylko** wartość `src="…"` z wygenerowanego `<iframe>`.
4. Wklej ją w pole `spotifyEmbedUrl` w `config.ts`.

### Jak dodać zdjęcia

1. Wrzuć pliki (jpg/png/webp) do `public/images/` — np. `01.jpg`, `02.jpg`...
2. Uzupełnij tablicę `zdjecia` w `config.ts`:

```ts
zdjecia: [
  { src: '/images/01.jpg', caption: 'Pierwsza randka' },
  { src: '/images/02.jpg', caption: 'Nasza kawa ☕' },
  // …
],
```

---

## 🌐 Deployment na hejlenkakochamcie.pl

Projekt jest **statyczny** (`dist/` to czyste HTML/CSS/JS), więc można go wrzucić gdziekolwiek. Najszybciej:

### Opcja A — Cloudflare Pages (rekomendowane, darmowe + szybkie)

1. Wrzuć repo na GitHub.
2. Wejdź na <https://pages.cloudflare.com/>, połącz repo.
3. Build command: `npm run build`, output: `dist`.
4. Domenę `hejlenkakochamcie.pl` podepnij w zakładce **Custom domains** (Cloudflare automatycznie ustawi DNS, jeśli domena jest u nich; jeśli nie — dodaj rekord CNAME w panelu rejestratora).

### Opcja B — Netlify

1. <https://app.netlify.com/drop> → przeciągnij folder `dist/` po `npm run build`.
2. Albo połącz z GitHubem: build = `npm run build`, publish = `dist`.

### Opcja C — Vercel

```bash
npm i -g vercel
vercel --prod
```

### Opcja D — klasyczny hosting (np. home.pl)

Po `npm run build` wrzuć zawartość `dist/` (w tym podfolder `images/` ze zdjęciami) na FTP do katalogu głównego domeny.

---

## 📁 Struktura

```
src/
├── components/
│   ├── SlideShell.astro     # wspólna "skorupa" slajdu (tło, fade-up, scroll-hint)
│   ├── SlideNav.astro       # boczna nawigacja kropkami
│   ├── Intro.astro          # slajd 1
│   ├── Stats.astro          # slajd 2 — animowane liczniki
│   ├── Soundtrack.astro     # slajd 3 — Spotify embed
│   ├── Gallery.astro        # slajd 4 — galeria zdjęć
│   └── Finale.astro         # slajd 5 — live counter + confetti
├── data/
│   └── config.ts            # 👈 EDYTUJ TYLKO TO
├── layouts/
│   └── Base.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css           # ciemny motyw + gradienty
```

---

## 💡 Pomysły na rozbudowę

- Sekretna sekcja odblokowywana po wpisaniu daty urodzin 🎂
- Tryb "light" z delikatniejszym motywem
- Odliczanie do jej kolejnych urodzin
- Animowane "pływające" serduszka w tle
- Możliwość wysłania odpowiedzi z powrotem do Ciebie (formularz → mail)

Powodzenia — niech się rozpłacze (pozytywnie) 🥹💗