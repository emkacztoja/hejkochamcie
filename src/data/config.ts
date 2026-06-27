// ============================================================================
//  ♥ KONFIGURACJA — EDYTUJ TYLKO TO ♥
//  Wszystkie personalizacje strony są tutaj.
//  Po zmianie: zapisz plik i odśwież stronę (npm run dev).
// ============================================================================

export const siteConfig = {
  // ─── Piosenki na każdy slajd ───────────────────────────────────────────
  // Wrzuć pliki mp3 do folderu public/audio/
  // Jeśli nie chcesz piosenki na dany slajd, zostaw puste stringi
  piosenki: [
    // Slajd 0 — PreIntro (bez piosenki)
    {
      tytul: '',
      artysta: '',
      src: '',
      cover: '',
    },
    // Slajd 1 — Intro
    {
      tytul: 'Twój utwór na Intro',
      artysta: 'Twój artysta',
      src: '/audio/01-intro.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 2 — Jak to się zaczęło
    {
      tytul: 'Twój utwór na "Jak to się zaczęło"',
      artysta: 'Twój artysta',
      src: '/audio/02-jak-to-sie-zaczelo.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 3 — Statystyki
    {
      tytul: 'Twój utwór na Statystyki',
      artysta: 'Twój artysta',
      src: '/audio/03-statystyki.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 4 — Soundtrack (zostaw puste — masz już Spotify embed)
    {
      tytul: 'Alexander',
      artysta: 'Myslovitz',
      src: '/audio/04-soundtrack.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 5 — Wiadomości
    {
      tytul: 'Twój utwór na Wiadomości',
      artysta: 'Twój artysta',
      src: '/audio/05-wiadomosci.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 6 — Galeria
    {
      tytul: 'Twój utwór na Galerię',
      artysta: 'Twój artysta',
      src: '/audio/06-galeria.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 7 — Kupony
    {
      tytul: 'Paper Rings',
      artysta: 'Taylor Swift',
      src: '/audio/07-kupony.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 8 — Dlaczego ją kocham
    {
      tytul: 'Yellow',
      artysta: 'Coldplay',
      src: '/audio/08-dlaczego.mp3',
      cover: '/images/album-placeholder.svg',
    },
    // Slajd 9 — Finale
    {
      tytul: 'A Sky Full of Stars',
      artysta: 'Coldplay',
      src: '/audio/09-finale.mp3',
      cover: '/images/album-placeholder.svg',
    },
  ],
  // ─── O Was ──────────────────────────────────────────────────────────────
  jejImie: 'Lenka',
  twojeImie: 'Oluś rembertów', // może zostawić "Ty" — wtedy nie wyświetlamy tej zmiennej
  // tytul: 'Dla Lenki 💗',
  jejProfilowe: '/images/avatar.jpg', // Zdjęcie profilowe do czatu — wrzuć plik do public/images/

  // ─── Daty ──────────────────────────────────────────────────────────────
  // Data początku związku (od niej liczy się licznik "od ilu dni jesteśmy razem").
  // Format: 'YYYY-MM-DDTHH:mm:ss' (czas lokalny, np. polski).
  dataRazem: '2026-05-22T20:00:00',

  // Data jej 18. urodzin (opcjonalnie — pokaże się w sekcji finałowej).
  // Format: 'YYYY-MM-DD'.
  dataUrodzin: '2008-06-29',

  // ─── Slajd 2 — Jak to się zaczęło ──────────────────────────────────────
  // Screenshot z relacji na Instagramie — wrzuć plik do public/images/
  screenshotIG: '/images/ig-story.jpg', // np. '/images/ig-story.jpg'

  // Data kiedy odpowiedziała na relację
  dataRelacji: '22 maja 2026',

  // Opis tej chwili
  historiaPoznania: 'Odpowiedziałaś na moją relację. Reszta to historia.',

  // ─── Slajd 0 — PreIntro ────────────────────────────────────────────────
  preIntro: {
    naglowek: 'Hej Lenka! 💗',
    podtytul: 'Mam dla Ciebie małą niespodziankę…',
    przycisk: 'Otwórz',
  },

  // ─── Slajd 1 — Intro ───────────────────────────────────────────────────
  intro: {
    naglowek: 'W 30 dni może wydarzyć się naprawdę wiele…',
    podtytul: 'Zobacz, jak wyglądał nasz pierwszy wspólny miesiąc.',
    przycisk: 'Uruchom podsumowanie',
  },

  // ─── Slajd 2 — Statystyki ──────────────────────────────────────────────
  statystyki: [
    {
      ikona: '⏳',
      wartosc: 0,
      etykieta: 'czasu razem',
      przyrostek: '',
      typ: 'dynamiczny'
    },
    {
      ikona: '💬',
      wartosc: '∞',
      etykieta: 'wiadomości (czyli w chuj)',
      przyrostek: '',
      typ: 'nieskonczonosc'
    },
    {
      ikona: '🥰',
      wartosc: 1,
      etykieta: 'najszczęśliwszy chłopak',
      przyrostek: '',
      typ: 'staly'
    },
  ],
  statystykiPodtytul: 'Dobra próba badawcza - ale to dopiero początek.',

  // ─── Slajd 3 — Ścieżka dźwiękowa ──────────────────────────────────────
  // 1) Znajdź utwór/playlistę w Spotify → kliknij "Udostępnij" → "Osadź".
  // 2) Skopiuj TYLKO fragment src="..." z <iframe>.
  // 3) Wklej go tutaj (zamieniając 'track' na 'track', 'playlist' na 'playlist' itd.).
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/track/3ilgxZl5g7MOQCUiky3VOG?utm_source=generator',
  soundtrackOpis:
    'Ta nuta już zawsze będzie mi się z tobą kojarzyła',

  // ─── Slajd 4 — Galeria wspomnień ──────────────────────────────────────
  galeriaNaglowek: 'Złapane w kadrze 📸',
  galeriaOpis: 'Szybki przegląd momentów, które zdefiniowały ostatnie tygodnie.',

  // Zdjęcia — wrzuć swoje pliki do folderu public/images/ (jpg/png/webp).
  // Podaj ich nazwy poniżej (lub URL-e z zewnętrznego hostingu).
  // caption = krótki podpis pod zdjęciem (opcjonalny).
  zdjecia: [
    { src: '/images/01.jpg', wariant: 'pionowe' },
    { src: '/images/02.jpg', wariant: 'poziome' },
    { src: '/images/03.jpg', wariant: 'poziome' },
    { src: '/images/04.jpg', wariant: 'pionowe' },
    { src: '/images/05.jpg', wariant: 'poziome' },
    { src: '/images/06.jpg', wariant: 'pionowe' },
    { src: '/images/07.jpg', wariant: 'poziome' },
    { src: '/images/08.jpg', wariant: 'pionowe' },
    { src: '/images/09.jpg', wariant: 'poziome' },
  ],

  // ─── Slajd 5 — Wiadomości ─────────────────────────────────────────────
  // Wiadomości z czatu — { tresc, kto: 'ja' | 'ona', czas }
  // Kto = 'ja' — Twoje wiadomości (różowy gradient)
  // Kto = 'ona' — Jej wiadomości (szare tło)
  wiadomosci: [
    { tresc: 'no ciśnie mi się cis na usta no', kto: 'ona', czas: '01:35' },
    { tresc: 'i chuj', kto: 'ona', czas: '01:36' },
    { tresc: 'ci w dupe', kto: 'ona', czas: '01:36' },
    { tresc: 'okok', kto: 'ona', czas: '01:36' },
    { tresc: 'buzi', kto: 'ona', czas: '01:36' },
    { tresc: 'aaa', kto: 'ja', czas: '01:37' },
    { tresc: 'bbb', kto: 'ona', czas: '01:37' },
    { tresc: 'ej ale to dobrze chyba', kto: 'ja', czas: '01:37' },
    { tresc: 'czekam aż się najebiesz 22', kto: 'ja', czas: '01:37' }
  ],

  // ─── Slajd 6 — Kupony Miłości ────────────────────────────────────────
  kupony: [
    {
      tresc: 'Wspólne zdjęcia',
      opis: 'Ruszamy w miasto zrobić nam super, klimatyczne fotki.',
      ikona: '👩‍❤️‍👨'
    },
    {
      tresc: 'Wyjście na lody',
      opis: 'Idziemy na najlepsze lody w mieście, Ty wybierasz smaki!',
      ikona: '🍦'
    },
    {
      tresc: 'Maraton filmowy',
      opis: 'Oglądamy co chcesz, a ja nie marudzę (nawet na komediach romantycznych).',
      ikona: '🎬'
    },
    {
      tresc: 'Sesja dla Ciebie',
      opis: 'Twoja prywatna sesja portretowa... odpalimy jak tylko naprawię obiektyw! 🛠️',
      ikona: '📸'
    },
    {
      tresc: 'Wspólny spacer',
      opis: 'Zabieram Cię w nowe, klimatyczne miejsce. Odpoczniemy od wszystkiego.',
      ikona: '🌲'
    },
    {
      tresc: 'Wieczór nad Wisłą',
      opis: 'Bierzemy koc, coś do picia i idziemy posiedzieć nad rzeką, czekając na zachód słońca. Zero pośpiechu.',
      ikona: '🌇'
    },
  ],

  // ─── Slajd 7 — Listy "Otwórz gdy..." ─────────────────────────────────
  listy: [
    { okazja: 'Gdy masz gorszy dzień', tresc: 'Pamiętaj, że wszystko mija. A ja zawsze jestem tu, gotowy Cię wesprzeć. Kocham Cię i to się nie zmieni. 💕' },
    { okazja: 'Gdy za mną tęsknisz', tresc: 'Ja też. Zawsze. Nawet gdy jesteśmy obok siebie, tęsknię za Tobą. Świadomość, że istniejesz, jest najlepszą rzeczą w moim życiu. 💗' },
    { okazja: 'Gdy potrzebujesz uśmiechu', tresc: 'Hej! Wiesz co? Jesteś najlepszą rzeczą, jaka mi się przydarzyła. Teraz się uśmiechnij, bo na to zasługujesz! 😊' },
    { okazja: 'Gdy nie możesz zasnąć', tresc: 'Zamknij oczy. Weź głęboki oddech. Wyobraź sobie, że jestem tuż obok. Dobranoc, moje wszystko. 🌙' },
    { okazja: 'Przed egzaminem', tresc: 'Wierzę w Ciebie w 100%! Jesteś mądrzejsza niż myślisz i silniejsza niż się boisz. Daj z siebie wszystko! Powodzenia! 🍀' },
  ],

  // ─── Slajd 8 — Sekretne zdjęcie ──────────────────────────────────────
  // Pierwsze wspólne zdjęcie — odsłonięte po przytrzymaniu/hover
  sekretneZdjecie: {
    src: '/images/first-photo.jpg', // Wrzuć zdjęcie do public/images/
    podpis: 'Pierwsze zdjęcie, które zrobiłem Ci na pamiątkę 📸',
  },

  // ─── Slajd 9 — Dlaczego ją kocham ─────────────────────────────────────
  powody: [
    'Za twój uśmiech',
    'Za twoje piękne oczy',
    'Za to, że najebałaś się winem 24 kwietnia',
    'Za to, że się o mnie tak bardzo martwisz',
    'Za to, że nie masz wyjebane w to co mówię',
    'Za to, że masz do mnie cierpliwość',
    'Za to, że jesteś sobą tak fr',
  ],

  // ─── Slajd 5 — Finał ───────────────────────────────────────────────────
  final: {
    naglowekPrzed: 'I najlepsze jest to…',
    naglowekPo: '…że dopiero się rozkręcamy.',
    zyczenia: 'Wszystkiego najlepszego z okazji 18 urodzin (mimo tego że oszukujesz i są dopiero 29), jesteś dosłownie najcudowniejszą dziewczyną w moim życiu i się trochę wjebałaś bo już nie uciekniesz ale to już twój problem tak. Kocham cię Lenka <3',
    licznikEtykieta: 'Jesteśmy razem od',
  },
};

export type SiteConfig = typeof siteConfig;