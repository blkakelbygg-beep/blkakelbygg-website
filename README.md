# BL Kakel & Bygg AB — webbplats

En helt ny, animerad flersidig webbplats för **BL Kakel & Bygg AB** i Helsingborg, byggd i **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**. Ljust/mörkt läge (ljust som standard), SEO-metadata och strukturerad data (JSON-LD) på varje sida, samt ett kontaktformulär förberett för **Resend**.

## Sidstruktur

| Sida | URL |
| --- | --- |
| Hem | `/` |
| Om oss *(ny sida)* | `/om-oss` |
| Plattsättning – Kakel & Klinker | `/plattsattning-kakel-klinker-helsingborg` |
| Badrumsrenovering | `/badrumsrenovering-helsingborg` |
| Köksrenovering | `/koksrenovering-helsingborg` |
| Byggnation & Renovering | `/byggnation-renovering-helsingborg` |
| Microcement | `/microcement-helsingborg` |
| Blogg | `/blogg` |
| Kontakta oss | `/kontakta-oss` |
| Våra projekt | `/vara-projekt` |

Alla URL:er matchar de befintliga adresserna på blkakelbygg.se så att gammal SEO-ranking och eventuella externa länkar fortsätter fungera. **Om oss** är en ny sida — bra för förtroende och lokal SEO, med företagets historia, värderingar och certifikat.

## Kom igång lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

Bygg för produktion:

```bash
npm run build
npm run start
```

## Koppla in kontaktformuläret till Resend

Kontaktformuläret på `/kontakta-oss` (med val av tjänst) är helt byggt på både klient och server — det saknar bara en API-nyckel för att faktiskt skicka e-post.

1. Skapa ett konto på [resend.com](https://resend.com) (gratisnivå räcker för att komma igång).
2. Skapa en API-nyckel under **API Keys**.
3. Kopiera `.env.example` till `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Klistra in nyckeln i `.env.local`:
   ```
   RESEND_API_KEY=re_din_nyckel_här
   ```
5. Som avsändaradress (`RESEND_FROM_EMAIL`) funkar `onboarding@resend.dev` direkt för test. För att skicka från er egen domän (rekommenderas), verifiera **blkakelbygg.se** under **Domains** i Resend och byt sedan till t.ex. `BL Kakel & Bygg AB <offert@blkakelbygg.se>`.
6. `RESEND_TO_EMAIL` styr vart förfrågningar skickas (standard: `kontakt@blkakelbygg.se`).
7. Starta om servern. Formuläret postar till `/api/contact` (`src/app/api/contact/route.ts`), som validerar med Zod och skickar e-post via Resend.

Utan `RESEND_API_KEY` fungerar formuläret (validering, laddningsläge) precis som vanligt, men visar ett tydligt felmeddelande istället för att skicka — så inget går sönder innan ni kopplat in nyckeln.

## Redigera innehåll

Nästan allt textinnehåll — företagsuppgifter, tjänster, priser-texter, processteg, vanliga frågor, omdömen, statistik — ligger samlat i **`src/lib/site-config.ts`**. Det är den enda filen du normalt behöver ändra i för att uppdatera texter, telefonnummer, adress eller lägga till/ta bort en tjänst.

Formulärets tjänstealternativ styrs separat i `src/lib/validation.ts` (`serviceOptions`).

## Blogg

Bloggen ligger på `/blogg` och länkas från både menyn och sidfoten. Alla inlägg definieras i **`src/lib/blog-posts.ts`** — det är den enda filen du behöver ändra i för att lägga till, redigera eller ta bort ett inlägg.

Så lägger du till ett nytt inlägg:

1. Öppna `src/lib/blog-posts.ts`.
2. Kopiera ett av de befintliga objekten i `blogPosts`-listan och klistra in det som ett nytt objekt.
3. Ändra `slug` (måste vara unikt och url-vänligt, t.ex. `"mitt-nya-inlagg"`), `title`, `excerpt`, `category`, `date` (format `"ÅÅÅÅ-MM-DD"`), `image` (sökväg till en bild i `public/images/...`) och `readTime`.
4. Skriv innehållet i `content`-listan — varje textrad blir ett eget textstycke. Vill du ha en mellanrubrik, börja raden med `"## "`, t.ex. `"## En rubrik"`.
5. Spara filen — inlägget dyker automatiskt upp i bloggens lista, får en egen sida på `/blogg/din-slug` och läggs till i `sitemap.xml` automatiskt.

Vill du ta bort ett inlägg? Ta bara bort dess objekt ur listan.

## Bilder

- `public/images/projects/` — 24 riktiga projektbilder (beskurna från era befintliga sidor) som används i galleriet på `/vara-projekt` samt utspridda på tjänstesidorna.
- `public/images/certs/` — era fyra certifikat/auktorisationer (GVK m.fl.), visas på startsidan och `/om-oss`.
- `public/images/hero/` — bakgrundsbilder för sidhuvuden på tjänstesidorna.

Vill ni byta ut eller lägga till fler projektbilder: lägg filerna i `public/images/projects/`, döp dem `project-25.jpg`, `project-26.jpg` osv., och öka `projectImageCount` i `site-config.ts`. Bilderna dyker då automatiskt upp i galleriet.

## Ljust/mörkt läge

Läget hanteras av [`next-themes`](https://github.com/pacocoursey/next-themes) (`src/components/theme-provider.tsx`). **Ljust läge är standard** och används tills besökaren själv klickar på sol/måne-ikonen i menyn — valet sparas sedan i webbläsaren.

## SEO

- Unika `<title>`, meta-beskrivningar, Open Graph- och Twitter-kort per sida (`src/lib/metadata.ts`).
- `sitemap.xml` och `robots.txt` genereras automatiskt (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Strukturerad data (JSON-LD) för företaget (`HomeAndConstructionBusiness`), varje tjänst (`Service`), vanliga frågor (`FAQPage`) och brödsmulor (`BreadcrumbList`) — se `src/components/json-ld.tsx`.
- Sätt `NEXT_PUBLIC_SITE_URL` i `.env.local` till er riktiga domän innan ni går live, så att kanoniska länkar och sitemap pekar rätt.

## Distribution

Projektet är förberett för [Vercel](https://vercel.com) (skaparna av Next.js) — koppla bara GitHub-repot och sätt miljövariablerna från `.env.example` i projektinställningarna. Det går även att hosta var som helst som stödjer Node.js via `npm run build && npm run start`.

## Teknikstack

- **Next.js 16** (App Router, Turbopack, statiskt genererade sidor)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll-animationer, sidmenyer, lightbox, FAQ-accordion
- **next-themes** — ljust/mörkt läge
- **Zod** — formulärvalidering (klient + server)
- **Resend** — e-postutskick från kontaktformuläret
- **lucide-react** — ikoner
