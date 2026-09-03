export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://blkakelbygg.se"
).replace(/\/$/, "");

export const company = {
  name: "BL Kakel & Bygg AB",
  shortName: "BL Kakel & Bygg",
  tagline: "Kakel, badrum, kök & byggnation i Helsingborg",
  description:
    "BL Kakel & Bygg AB är ditt lokala hantverksföretag i Helsingborg. Vi är GVK-auktoriserade och hjälper privatpersoner och företag med plattsättning, badrumsrenovering, köksrenovering, microcement och byggnation — från idé till färdigt resultat.",
  yearsExperience: 15,
  projectsDone: 250,
  address: {
    street: "Industrigatan 28",
    city: "Helsingborg",
    zip: "254 67",
    region: "Skåne län",
    country: "SE",
  },
  email: "kontakt@blkakelbygg.se",
  phone: "073-107 12 58",
  phoneHref: "tel:+46731071258",
  emailHref: "mailto:kontakt@blkakelbygg.se",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  serviceArea: [
    "Helsingborg",
    "Höganäs",
    "Ängelholm",
    "Landskrona",
    "Bjuv",
    "Åstorp",
  ],
  openingHours: [
    { days: "Måndag – Fredag", hours: "07:00 – 17:00" },
    { days: "Lördag – Söndag", hours: "Stängt (bokade besök)" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Hem", href: "/" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Våra projekt", href: "/vara-projekt" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakta oss", href: "/kontakta-oss" },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  href: string;
  contactServiceValue: string;
  navLabel: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroImage: string;
  intro: string;
  introHeading: string;
  features: { title: string; description: string; icon: string }[];
  whyUs: { title: string; description: string }[];
  process: ProcessStep[];
  pricingHeading: string;
  pricingBody: string;
  gallery: number[];
  /**
   * Optional dedicated gallery images for this service, used instead of the
   * shared `gallery` id lookup above. Use this when a service has its own
   * photo set that shouldn't also appear in the shared /vara-projekt gallery.
   */
  galleryImages?: { src: string; alt: string }[];
  ctaText: string;
};

export const services: Service[] = [
  {
    slug: "plattsattning-kakel-klinker-helsingborg",
    href: "/plattsattning-kakel-klinker-helsingborg",
    contactServiceValue: "plattsattning",
    navLabel: "Plattsättning",
    name: "Plattsättning – Kakel & Klinker",
    shortName: "Kakel & Klinker",
    tagline: "Plattsättning i Helsingborg med kakel, klinker, natursten & mosaik",
    metaTitle: "Plattsättning Helsingborg – Kakel & Klinker | BL Kakel & Bygg AB",
    metaDescription:
      "Professionell plattsättning i Helsingborg. Vi lägger kakel, klinker, natursten och mosaik i kök, badrum och hall med GVK-auktoriserad kvalitet. Kostnadsfri offert.",
    heroEyebrow: "Plattsättning i Helsingborg",
    heroImage: "/images/projects/project-03.jpg",
    introHeading: "Keramik, natursten, mosaik och plattor",
    intro:
      "Letar du efter professionell plattsättning i Helsingborg? På BL Kakel & Bygg AB är vi experter på att lägga kakel och klinker för både små och stora projekt — alltid med hög precision och noggrannhet. Oavsett om du behöver nya plattor i köket, badrummet, hallen eller andra utrymmen kan du lita på att vi levererar ett hållbart och estetiskt tilltalande resultat.",
    features: [
      {
        icon: "grid",
        title: "Keramik",
        description: "Tidlöst och slitstarkt, perfekt för både golv och väggar.",
      },
      {
        icon: "gem",
        title: "Natursten",
        description: "Skapar en elegant och lyxig känsla i badrum och entréer.",
      },
      {
        icon: "shapes",
        title: "Mosaik",
        description: "Unik design för detaljerade och dekorativa lösningar.",
      },
      {
        icon: "ruler",
        title: "Plattor i olika format",
        description: "Stora, små, matta eller blanka — vi anpassar oss efter din stil.",
      },
    ],
    whyUs: [
      {
        title: "GVK-auktoriserade plattsättare",
        description:
          "Alla våtrumsarbeten utförs enligt gällande branschregler (GVK) så att ditt tätskikt håller i decennier.",
      },
      {
        title: "Branschgodkända material",
        description: "Vi använder endast högkvalitativa material och system för hållbarhet och säkerhet.",
      },
      {
        title: "Precision i varje fog",
        description: "Raka linjer, jämna fogar och noggrant kapade hörn — vi lämnar inget åt slumpen.",
      },
    ],
    process: [
      {
        title: "Konsultation & mätning",
        description:
          "Vi besöker platsen, mäter upp ytan och går igenom vilket material, mönster och fogfärg som passar dig bäst.",
      },
      {
        title: "Offert & materialval",
        description:
          "Du får en tydlig offert med prisuppskattning. Vi hjälper dig även att hitta rätt kakel, klinker eller natursten.",
      },
      {
        title: "Förberedelse av underlag",
        description:
          "Vi säkerställer att underlaget är plant, torrt och rätt förbehandlat — grunden för ett hållbart resultat.",
      },
      {
        title: "Plattsättning & fogning",
        description:
          "Plattorna läggs med hög precision enligt vald design, följt av noggrann fogning och tätskikt vid behov.",
      },
      {
        title: "Slutbesiktning",
        description:
          "Vi går igenom resultatet tillsammans med dig och säkerställer att allt är felfritt innan vi lämnar över.",
      },
    ],
    pricingHeading: "Vad kostar plattsättning i Helsingborg?",
    pricingBody:
      "Priset beror på ytans storlek, valt material och eventuell rivning av befintliga plattor. Vi ger dig alltid en tydlig, kostnadsfri offert innan arbetet påbörjas — utan dolda avgifter.",
    gallery: [4, 6, 8, 10, 15, 16],
    ctaText: "Kontakta oss idag för professionell plattsättning i Helsingborg.",
  },
  {
    slug: "badrumsrenovering-helsingborg",
    href: "/badrumsrenovering-helsingborg",
    contactServiceValue: "badrumsrenovering",
    navLabel: "Badrumsrenovering",
    name: "Badrumsrenovering",
    shortName: "Badrumsrenovering",
    tagline: "Badrumsrenovering i Helsingborg med högsta kvalitet",
    metaTitle: "Badrumsrenovering Helsingborg | BL Kakel & Bygg AB",
    metaDescription:
      "Drömmer du om ett nytt, modernt badrum? BL Kakel & Bygg AB erbjuder badrumsrenovering i Helsingborg med GVK-auktoriserat hantverk, tydlig offert och 15+ års erfarenhet.",
    heroEyebrow: "Badrumsrenovering",
    heroImage: "/images/hero/hero-badrum.jpg",
    introHeading: "Ditt drömbadrum, byggt för att hålla",
    intro:
      "Drömmer du om ett nytt, modernt och stilrent badrum? På BL Kakel & Bygg AB erbjuder vi badrumsrenoveringar i Helsingborg med högsta kvalitet och noggrannhet — från första skiss till färdigt, inflyttningsklart badrum.",
    features: [],
    whyUs: [
      { title: "Helhetslösning", description: "Rivning, tätskikt, plattsättning, VVS-samordning och installation — allt under ett tak." },
      { title: "Auktoriserade hantverkare", description: "Våtrumsarbeten utförs enligt GVK:s branschregler för ett säkert, hållbart tätskikt." },
      { title: "Skräddarsydda lösningar", description: "Vi designar badrummet efter din yta, stil och budget — inga standardlösningar." },
      { title: "Högkvalitativa material", description: "Vi arbetar endast med beprövade material och system från ledande leverantörer." },
      { title: "Trygghet och garanti", description: "Skriftlig offert, tydlig tidsplan och garanti på utfört arbete." },
    ],
    process: [
      {
        title: "Konsultation & Offert",
        description:
          "Vi börjar med ett kostnadsfritt möte där vi lyssnar på dina önskemål och inspekterar ditt nuvarande badrum. Därefter får du en offert med tydlig prisuppskattning.",
      },
      {
        title: "Planering & Materialval",
        description:
          "Tillsammans går vi igenom design, material och funktioner. Vi hjälper dig att välja rätt kakel, klinker, belysning och sanitetsporslin för ditt perfekta badrum.",
      },
      {
        title: "Rivning & Förberedelse",
        description:
          "Vi river ut det gamla badrummet och ser till att alla ytor förbereds korrekt, inklusive tätskikt enligt gällande regler.",
      },
      {
        title: "Plattsättning & Installation",
        description:
          "Våra skickliga plattsättare monterar kakel och klinker med precision, samtidigt som vi installerar el, VVS och övriga detaljer.",
      },
      {
        title: "Slutbesiktning & Överlämning",
        description:
          "När badrummet är klart gör vi en noggrann kontroll och ser till att allt är felfritt innan vi överlämnar ditt nya, fräscha badrum.",
      },
    ],
    pricingHeading: "Hur mycket kostar en badrumsrenovering?",
    pricingBody:
      "Priset för att renovera badrummet beror på flera faktorer, som storlek, materialval och omfattningen av arbetet som krävs. Oavsett om du vill ha en standardlösning eller satsa på exklusiva inslag och skräddarsydd design kan den slutgiltiga kostnaden variera. Vi erbjuder allt från plattsättning och montering av badrumsmöbler till fullständig installation — anpassat för att uppfylla just dina önskemål.",
    gallery: [1, 2, 3, 5, 7, 9, 11, 13],
    ctaText: "Är du redo att förvandla ditt badrum? Kontakta oss idag för en kostnadsfri offert.",
  },
  {
    slug: "koksrenovering-helsingborg",
    href: "/koksrenovering-helsingborg",
    contactServiceValue: "koksrenovering",
    navLabel: "Köksrenovering",
    name: "Köksrenovering",
    shortName: "Köksrenovering",
    tagline: "Köksrenovering i Helsingborg med kvalitet",
    metaTitle: "Köksrenovering Helsingborg | BL Kakel & Bygg AB",
    metaDescription:
      "Nytt kök i Helsingborg? BL Kakel & Bygg AB erbjuder helhetslösningar för köksrenovering — kakelsättning, bänkskivor, skåp och installation. Begär offert idag.",
    heroEyebrow: "Köksrenovering",
    heroImage: "/images/koksrenovering/koksrenovering-hero.jpg",
    introHeading: "Ett kök som höjer både värde och vardagskomfort",
    intro:
      "Ett funktionellt och stilrent kök höjer både hemmets värde och din vardagskomfort. På BL Kakel & Bygg AB erbjuder vi helhetslösningar för köksrenovering i Helsingborg — från kakelsättning och golvläggning till montering av skåp, bänkskivor och smarta detaljer. Vi skapar kök som kombinerar estetik, hållbarhet och funktionalitet.",
    features: [
      { icon: "layout-grid", title: "Kakelsättning Köket", description: "Välj mellan klassiskt, modernt eller trendigt kakel för en fräsch känsla." },
      { icon: "square-stack", title: "Bänkskivor & Design", description: "Hållbara och stilrena bänkskivor som lyfter kökets funktion och utseende." },
      { icon: "archive", title: "Skåp & Förvaring", description: "Platsbyggda lösningar som maximerar utrymmet och skapar en stilren look." },
    ],
    whyUs: [],
    process: [
      {
        title: "Konsultation & Offert",
        description:
          "Vi inleder med ett kostnadsfritt möte där vi diskuterar dina önskemål och inspekterar ditt befintliga kök. Därefter får du en offert med tydlig prisuppskattning och planering.",
      },
      {
        title: "Planering & Materialval",
        description:
          "Tillsammans går vi igenom design, material, färger och funktionalitet. Vi hjälper dig att välja rätt köksluckor, bänkskivor, kakel, vitvaror och smarta förvaringslösningar som passar din stil och ditt behov.",
      },
      {
        title: "Demontering & Förberedelse",
        description:
          "Vi tar bort det gamla köket och ser till att alla ytor förbereds korrekt, inklusive el, VVS och eventuella justeringar i planlösningen för en smidig installation.",
      },
      {
        title: "Montering & Installation",
        description:
          "Våra skickliga hantverkare monterar skåp, bänkskivor, kakel och vitvaror med precision. Vi säkerställer att allt från el och VVS till belysning och detaljer installeras korrekt och enligt plan.",
      },
      {
        title: "Slutbesiktning & Överlämning",
        description:
          "När köket är färdigt gör vi en noggrann genomgång och ser till att allt är perfekt innan vi överlämnar ditt nya, funktionella och stilrena kök!",
      },
    ],
    pricingHeading: "Hur mycket kostar ett nytt kök?",
    pricingBody:
      "Priset på en köksrenovering beror på flera faktorer, såsom storlek, materialval och omfattningen av arbetet. Kostnaden påverkas av om du väljer standardlösningar eller exklusiva material och specialanpassningar. Vi erbjuder allt från plattsättning och bänkskivor till komplett köksmontering — skräddarsytt efter dina önskemål.",
    gallery: [],
    galleryImages: [
      {
        src: "/images/koksrenovering/koksrenovering-material.jpg",
        alt: "Materialval och kulörprover för köksrenovering",
      },
      {
        src: "/images/koksrenovering/koksrenovering-kakling-pagaende.jpg",
        alt: "Pågående kakelsättning i sillbensmönster i köket",
      },
      {
        src: "/images/koksrenovering/koksrenovering-hantverkare.jpg",
        alt: "Hantverkare sätter kakel ovanför spisen i köket",
      },
      {
        src: "/images/koksrenovering/koksrenovering-marmor.jpg",
        alt: "Exklusivt kök med marmorbänkskiva och köksö",
      },
      {
        src: "/images/koksrenovering/koksrenovering-tradkok.jpg",
        alt: "Kök i trä med köksö och matplats",
      },
      {
        src: "/images/koksrenovering/koksrenovering-vedspis.jpg",
        alt: "Mysigt vitt kök med vedspis",
      },
      {
        src: "/images/koksrenovering/koksrenovering-turkos-kakel.jpg",
        alt: "Kök med turkost kakel som stänkskydd",
      },
    ],
    ctaText: "Är du redo att förvandla ditt kök? Kontakta oss idag för en kostnadsfri offert.",
  },
  {
    slug: "byggnation-renovering-helsingborg",
    href: "/byggnation-renovering-helsingborg",
    contactServiceValue: "byggnation-renovering",
    navLabel: "Byggnation & Renovering",
    name: "Byggnation & Renovering",
    shortName: "Byggnation & Renovering",
    tagline: "Byggnation & renovering i Helsingborg",
    metaTitle: "Byggnation & Renovering Helsingborg | BL Kakel & Bygg AB",
    metaDescription:
      "BL Kakel & Bygg AB är din pålitliga partner för byggnation och renovering i Helsingborg — helhetslösning från konsultation till slutbesiktning. Kontakta oss idag.",
    heroEyebrow: "Byggnation & Renovering",
    heroImage: "/images/byggnation/byggnation-hero.jpg",
    introHeading: "Din pålitliga partner för byggnation & renovering",
    intro:
      "Oavsett om du planerar en omfattande renovering eller en nybyggnation är BL Kakel & Bygg AB din pålitliga partner i Helsingborg. Vi tar ansvar för hela processen — från idé och planering till färdigt, kvalitetssäkrat resultat.",
    features: [],
    whyUs: [
      { title: "Helhetslösning", description: "Vi samordnar hela projektet — snickeri, plattsättning, el och VVS — så du slipper hantera flera entreprenörer." },
      { title: "Högkvalitativa material", description: "Vi väljer material som håller i längden, anpassade efter ditt projekt och din budget." },
      { title: "Skräddarsydda projekt", description: "Varje byggnation eller renovering planeras utifrån just dina förutsättningar och önskemål." },
      { title: "Erfarna hantverkare", description: "Vårt team har lång erfarenhet av både nybyggnation och renovering av äldre fastigheter." },
      { title: "Trygghet & garanti", description: "Tydlig offert, fast tidsplan och garanti på allt utfört arbete." },
    ],
    process: [
      {
        title: "Konsultation & Offert",
        description:
          "Vi börjar med ett kostnadsfritt möte där vi går igenom dina behov, önskemål och projektets omfattning. Därefter får du en detaljerad offert med tydlig prisuppskattning.",
      },
      {
        title: "Planering & Materialval",
        description:
          "Tillsammans tar vi fram en plan för byggnationen eller renoveringen. Vi hjälper dig att välja material, design och funktionella lösningar som matchar dina behov.",
      },
      {
        title: "Rivning & Förberedelse",
        description:
          "Vi förbereder ytorna genom att demontera och riva vid behov, samt säkerställer att allt är redo för en smidig byggprocess.",
      },
      {
        title: "Plattsättning & Installation",
        description:
          "Våra hantverkare genomför allt från snickeri och plattsättning till installation av el, VVS och andra byggmoment. Vi arbetar effektivt och noggrant för att leverera högsta kvalitet.",
      },
      {
        title: "Slutbesiktning & Överlämning",
        description:
          "När allt är klart går vi igenom hela projektet tillsammans och säkerställer att du är helt nöjd med resultatet innan vi överlämnar det färdiga arbetet.",
      },
    ],
    pricingHeading: "Förverkliga ditt byggprojekt med oss",
    pricingBody:
      "Vill du renovera eller bygga nytt? BL Kakel & Bygg AB är din trygga partner för byggnation och renovering i Helsingborg. Kontakta oss idag för en offert och låt oss skapa ett hållbart och stilrent resultat anpassat efter dina önskemål.",
    gallery: [],
    galleryImages: [
      {
        src: "/images/byggnation/byggnation-pagaende-renovering.jpg",
        alt: "Pågående totalrenovering av rum med synliga installationer",
      },
      {
        src: "/images/byggnation/byggnation-fore-efter.jpg",
        alt: "Före och efter-bild av renoverat rum med accentväggar",
      },
      {
        src: "/images/byggnation/byggnation-nybygge.jpg",
        alt: "Nybyggnation av villa med ställning",
      },
    ],
    ctaText: "Vill du renovera eller bygga nytt? Kontakta oss idag för en offert.",
  },
  {
    slug: "microcement-helsingborg",
    href: "/microcement-helsingborg",
    contactServiceValue: "microcement",
    navLabel: "Microcement",
    name: "Microcement",
    shortName: "Microcement",
    tagline: "Microcement i Helsingborg – stilrent, hållbart och modernt",
    metaTitle: "Microcement Helsingborg – Golv, Väggar & Bänkskivor | BL Kakel & Bygg AB",
    metaDescription:
      "Microcement i Helsingborg för golv, väggar, badrum och bänkskivor. Fogfri, vattentålig och modern yta i valfri kulör. BL Kakel & Bygg AB — kostnadsfri offert.",
    heroEyebrow: "Microcement",
    heroImage: "/images/microcement/microcement-hero-kok.jpg",
    introHeading: "Stilrent, hållbart och modernt för alla ytor",
    intro:
      "Microcement är en elegant och flexibel ytskiktslösning som kan appliceras på golv, väggar, bänkskivor och möbler. Det skapar en sömlös, fogfri yta med en exklusiv känsla, perfekt för både hem och kommersiella miljöer.",
    features: [
      { icon: "droplets", title: "Fogfri & lättskött", description: "En sömlös yta utan skarvar som gör rengöring enkel." },
      { icon: "shield-check", title: "Vattentåligt & hållbart", description: "Perfekt för badrum, kök och högtrafikerade områden." },
      { icon: "palette", title: "Brett färg- & strukturutbud", description: "Anpassa ytan efter din stil och designvision." },
      { icon: "hammer", title: "Kan appliceras på befintliga ytor", description: "Ingen rivning krävs, snabb och smidig installation." },
      { icon: "layers", title: "Mångsidig användning", description: "Passar golv, väggar, trappor, bänkskivor och möbler." },
    ],
    whyUs: [],
    process: [
      {
        title: "Konsultation & kulörval",
        description: "Vi går igenom vilken yta som ska behandlas och hjälper dig välja kulör och struktur som passar din stil.",
      },
      {
        title: "Förbehandling av underlag",
        description: "Befintlig yta rengörs, primas och förbereds noggrant — microcement kan ofta appliceras utan rivning.",
      },
      {
        title: "Applicering i flera lager",
        description: "Microcementet appliceras för hand i flera tunna lager för en jämn, sömlös yta.",
      },
      {
        title: "Försegling",
        description: "Ytan förseglas med ett vattentätt, slitstarkt skyddslager anpassat för golv, våtrum eller bänkskivor.",
      },
      {
        title: "Slutbesiktning",
        description: "Vi går igenom den färdiga ytan tillsammans med dig innan överlämning.",
      },
    ],
    pricingHeading: "Förverkliga ditt projekt!",
    pricingBody:
      "Ge ditt hem eller din lokal en exklusiv och modern känsla med microcement. Oavsett om du vill ha en ny golvyta, en elegant bänkskiva eller en fogfri badrumslösning — vi levererar kvalitet med precision.",
    gallery: [],
    galleryImages: [
      {
        src: "/images/microcement/microcement-dusch.jpg",
        alt: "Microcementklädd duschvägg i badrum",
      },
      {
        src: "/images/microcement/microcement-trappa.jpg",
        alt: "Trappa med sömlös microcementyta i grå kulör",
      },
      {
        src: "/images/microcement/microcement-vagg-dekor.jpg",
        alt: "Dekorobjekt mot strukturerad microcementvägg",
      },
      {
        src: "/images/microcement/microcement-applicering.jpg",
        alt: "Handapplicering av microcement på vägg",
      },
      {
        src: "/images/microcement/microcement-vardagsrum.jpg",
        alt: "Microcementpanel på vägg i vardagsrum",
      },
    ],
    ctaText: "Låt oss hjälpa dig skapa en modern och exklusiv yta — kontakta oss idag!",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const stats = [
  { value: 250, suffix: "+", label: "Projekt genomförda" },
  { value: 15, suffix: "+", label: "Års erfarenhet" },
  { value: 100, suffix: "%", label: "GVK-auktoriserat hantverk" },
  { value: 24, suffix: "h", label: "Svar på din offertförfrågan" },
];

export const whyChooseUs = [
  {
    title: "Helhetslösning",
    description:
      "Från konsultation och design till färdigt resultat — vi samordnar hela projektet så att du slipper anlita flera olika hantverkare.",
    icon: "layers",
  },
  {
    title: "GVK-auktoriserade",
    description:
      "Vi är GVK-auktoriserade och följer branschens säkerhetsregler för våtrum, så att ditt tätskikt håller i decennier.",
    icon: "badge-check",
  },
  {
    title: "Högkvalitativa material",
    description: "Vi arbetar endast med beprövade material och system från ledande leverantörer.",
    icon: "gem",
  },
  {
    title: "Skräddarsydda lösningar",
    description: "Varje projekt planeras utifrån din yta, stil och budget — inga färdiga standardlösningar.",
    icon: "ruler",
  },
  {
    title: "Erfarna hantverkare",
    description: "Med 15+ års erfarenhet och 250+ genomförda projekt vet vi vad som krävs för ett hållbart resultat.",
    icon: "hammer",
  },
  {
    title: "Trygghet & garanti",
    description: "Tydlig skriftlig offert, fast tidsplan och garanti på allt utfört arbete.",
    icon: "shield-check",
  },
];

export const testimonials = [
  {
    quote:
      "BL Kakel & Bygg AB gjorde ett fantastiskt jobb med vår badrumsrenovering! Från första kontakten till professionella, punktliga och extremt noggranna. Vi är så nöjda med vårt nya badrum.",
    name: "Johan Andersson",
    role: "Badrumsrenovering, Helsingborg",
  },
  {
    quote:
      "Vi anlitade BL Kakel & Bygg AB för att sätta nytt kakel i köket, och resultatet blev helt fantastiskt! Deras team var trevliga, effektiva och arbetade med stor precision. Vi kommer definitivt att använda deras tjänster igen!",
    name: "Sofia Nilsson",
    role: "Köksrenovering, Helsingborg",
  },
  {
    quote:
      "Noggranna, punktliga och väldigt lyhörda för våra idéer. Trappan i klinker blev precis så som vi hade hoppats — riktigt proffsigt jobb från start till mål.",
    name: "Karin Persson",
    role: "Plattsättning, Helsingborg",
  },
];

export const faq = [
  {
    question: "Vilka tjänster erbjuder ni?",
    answer:
      "Vi erbjuder ett brett utbud av bygg- och renoveringstjänster, inklusive kakel- och klinkerläggning, badrums- och köksrenovering, microcement, snickeriarbeten, målning samt fönster- och solskyddsinstallationer. Se våra tjänstesidor för mer information om varje område.",
  },
  {
    question: "Arbetar ni med både privatpersoner och företag?",
    answer:
      "Ja, vi tar oss an projekt åt både privatpersoner och företag — från mindre badrum till större kommersiella ombyggnationer.",
  },
  {
    question: "Har ni nödvändiga certifikat och behörigheter?",
    answer:
      "Ja, BL Kakel & Bygg AB är GVK-auktoriserat och våra plattsättare har yrkesbevis och behörighet enligt gällande branschregler för våtrum.",
  },
  {
    question: "Hur lång tid tar en badrumsrenovering?",
    answer:
      "De flesta badrumsrenoveringar tar mellan 2–4 veckor beroende på badrummets storlek och omfattningen av arbetet. Du får alltid en tydlig tidsplan innan vi startar.",
  },
  {
    question: "Hur får jag en offert?",
    answer:
      "Fyll i formuläret på vår kontaktsida eller ring oss direkt. Berätta gärna vilken tjänst du är intresserad av, ytans storlek och önskat datum — då återkommer vi vanligtvis inom 24 timmar med ett prisförslag.",
  },
];

export const certifications = [
  { file: "/images/certs/cert-1.jpg", alt: "Intyg – Lerum Utbildning" },
  { file: "/images/certs/cert-2.jpg", alt: "Yrkesbevis Plattsättare – BYN" },
  { file: "/images/certs/cert-3.jpg", alt: "Diplom – GVK-kurs Behörighet Keramik" },
  { file: "/images/certs/cert-4.jpg", alt: "GVK-auktoriserad – BL Kakel & Bygg AB" },
];

export const offeredCrafts = [
  "Snickeri",
  "Villa- & lägenhetsrenovering",
  "Putsning av husfasader",
  "Kakel & klinker",
  "Måleri",
  "Badrumsrenovering",
  "Fönster & solskydd",
];

export const projectImages = [
  { id: 1, src: "/images/projects/project-25.jpg", alt: "Dusch med kakel i sillbensmönster och infälld hylla" },
  { id: 2, src: "/images/projects/project-26.jpg", alt: "Badrum med kakel, mörk kommod och LED-spegel" },
  { id: 3, src: "/images/projects/project-27.jpg", alt: "Badrum med fristående badkar och duschvägg i glas" },
  { id: 4, src: "/images/projects/project-28.jpg", alt: "Kök med kakel i sillbensmönster ovanför diskbänken" },
  { id: 5, src: "/images/projects/project-29.jpg", alt: "Badrum med badkar, olivträd och varma detaljer" },
  { id: 6, src: "/images/projects/project-30.jpg", alt: "Uterum med kakelgolv i sillbensmönster" },
  { id: 7, src: "/images/projects/project-31.jpg", alt: "Spa-inspirerat badrum med dubbla duschar" },
  { id: 8, src: "/images/projects/project-32.jpg", alt: "Kaklat golv i schackrutigt mönster i badrum" },
  { id: 9, src: "/images/projects/project-33.jpg", alt: "Duschutrymme med handdukstork och kakel" },
  { id: 10, src: "/images/projects/project-34.jpg", alt: "Tvättstuga med sexkantigt kakelgolv" },
  { id: 11, src: "/images/projects/project-35.jpg", alt: "Tvättstuga med rund belyst spegel" },
  { id: 12, src: "/images/projects/project-36.jpg", alt: "Tvättstuga med rund spegel och bänkskiva i trä" },
  { id: 13, src: "/images/projects/project-37.jpg", alt: "Toalettutrymme med kakel och förvaringsskåp i trä" },
  { id: 14, src: "/images/projects/project-38.jpg", alt: "Tvättstuga med toalett och förvaring" },
  { id: 15, src: "/images/projects/project-39.jpg", alt: "Plattsättning med distanser och utsättning i duschutrymme" },
  { id: 16, src: "/images/projects/project-40.jpg", alt: "Detaljbild av golvbrunn i kaklat golv" },
];
