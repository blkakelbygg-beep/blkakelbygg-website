export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO format, e.g. "2026-08-20"
  image: string;
  readTime: string;
  /**
   * Simple content model: an array of paragraphs.
   * A string starting with "## " is rendered as a subheading instead of a paragraph.
   */
  content: string[];
  /**
   * Optional canonical URL override. By default a post lives at
   * /blogg/<slug>. Set this to publish a post at its own dedicated
   * top-level route instead (a page must exist at that path) — it's
   * excluded from /blogg/[slug] so the content only ever has one URL.
   */
  href?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kakel-bygg-renovering-helsingborg",
    href: "/kakel-bygg-renovering-helsingborg",
    title: "Kakel, bygg och renovering i Helsingborg – en helhetsguide",
    excerpt:
      "Fundera på ditt nästa projekt men vet inte var du ska börja? Här reder vi ut hur kakel, byggnation och renovering hänger ihop — och varför en helhetslösning ofta lönar sig.",
    category: "Renovering",
    date: "2026-09-03",
    image: "/images/byggnation/byggnation-hero.jpg",
    readTime: "5 min",
    content: [
      "De flesta hemrenoveringar handlar sällan om bara en sak. Ett nytt badrum kräver både kakelsättning och ofta VVS-arbete. En köksrenovering kan innebära allt från ny bänkskiva till att en vägg behöver flyttas. På BL Kakel & Bygg AB möter vi det här varje dag — därför får vi ofta frågan hur kakel, byggnation och renovering egentligen hänger ihop, och vad som skiljer dem åt. Här reder vi ut begreppen och ger dig några saker att tänka på inför ditt eget projekt.",
      "## Kakel och plattsättning – grunden i våtrum och kök",
      "Plattsättning är ofta den del av ett projekt som syns mest, men som också ställer högst krav på fackmässigt utförande. I våtrum som badrum och tvättstuga är en korrekt utförd tätskiktning under kaklet minst lika viktig som själva plattorna — det är den som avgör om rummet håller tätt i decennier. Vi arbetar enligt GVK:s branschregler och rekommenderar alltid att plattsättning i våtutrymmen utförs av auktoriserade hantverkare, oavsett hur enkelt eller stort projektet är.",
      "## Byggnation – när projektet kräver mer än nya ytskikt",
      "Ibland räcker det inte att byta golv och kakel. Om planlösningen inte fungerar, om en vägg behöver flyttas, eller om el- och VVS-installationer är föråldrade, handlar det om byggnation snarare än ren ytrenovering. Det kan gälla allt från att slå ihop två mindre rum till att bygga ut ett kök eller anpassa ett hus för en ny familjesituation. Den här typen av arbete kräver noggrann planering redan från start, eftersom ändringar i bärande konstruktioner eller installationer påverkar resten av projektet.",
      "## Renovering – att lyfta ett hem utan att bygga om från grunden",
      "Renovering behöver inte betyda att allt rivs ut. Många projekt handlar om att modernisera det som redan finns — nya ytskikt, uppdaterad belysning, byte av kök- eller badrumsinredning och allmän upprustning som förlänger husets livslängd. Det är ofta den mest kostnadseffektiva vägen till ett fräschare hem, förutsatt att stommen och installationerna under ytan är i gott skick.",
      "## Varför en helhetslösning ofta lönar sig",
      "Många av våra kunder kommer till oss efter att ha försökt samordna flera olika hantverkare själva — en för kakel, en för snickeri, en för VVS — och upptäckt hur mycket tid det tar att hålla ihop tidsplan och ansvar mellan dem. När kakel, byggnation och renovering hanteras av samma team slipper du vara mellanhand mellan olika entreprenörer. Du får en tydlig offert, en gemensam tidsplan och en part som tar ansvar för helheten — från första konsultation till slutbesiktning.",
      "Oavsett om ditt projekt handlar om ny plattsättning i badrummet, en köksutbyggnad eller en renovering av hela hemmet hjälper vi dig gärna att reda ut vad som faktiskt behöver göras — och i vilken ordning. Kontakta oss för ett kostnadsfritt möte, så går vi igenom just ditt projekt tillsammans.",
    ],
  },
  {
    slug: "sa-valjer-du-ratt-kakel-till-badrummet",
    title: "Så väljer du rätt kakel till badrummet",
    excerpt:
      "Kakel, klinker eller mosaik? Här är vad du bör tänka på innan du väljer material till ditt nya badrum.",
    category: "Badrum",
    date: "2026-08-20",
    image: "/images/projects/project-05.jpg",
    readTime: "4 min",
    content: [
      "Att välja kakel till badrummet handlar om mer än färg och mönster. Materialet ska klara fukt och temperaturväxlingar i många år framöver, samtidigt som det ska kännas rätt varje dag. Här går vi igenom de viktigaste sakerna att tänka på innan du bestämmer dig.",
      "## Tänk på fuktklassning först",
      "Badrum räknas som våtutrymme, vilket ställer särskilda krav på både tätskikt och material. Se alltid till att plattsättningen utförs enligt GVK:s branschregler — det är den enskilt viktigaste faktorn för att badrummet ska hålla tätt i decennier, oavsett hur snyggt kaklet är.",
      "## Stora eller små plattor?",
      "Stora format ger ett lugnt, sömlöst intryck och färre fogar att hålla rena, vilket många uppskattar i mindre badrum. Mindre plattor och mosaik är däremot enklare att anpassa efter runda ytor och avlopp, och ger ofta en mer taktil, personlig känsla — särskilt som accent i duschutrymmet.",
      "## Halksäkert golv, snyggt väggkakel",
      "Golv och väggar har olika krav. Golvet bör ha en halkskyddsklass anpassad för våtrum, medan väggkaklet i första hand får styras av stil och budget. Att kombinera en matt, halksäker klinker på golvet med ett blankare kakel på väggarna är ett vanligt och väl fungerande val.",
      "Osäker på vilket material som passar just ditt badrum? Vi hjälper dig gärna att väga design mot funktion utifrån rummets storlek, ljusinsläpp och budget — och som GVK-auktoriserade ser vi alltid till att helheten håller i längden, inte bara ser bra ut på ytan.",
    ],
  },
  {
    slug: "5-tecken-pa-att-det-ar-dags-att-renovera-koket",
    title: "5 tecken på att det är dags att renovera köket",
    excerpt:
      "Är ditt kök omodernt, otympligt eller bara inte du längre? Här är fem tydliga tecken på att det är dags för en köksrenovering.",
    category: "Kök",
    date: "2026-07-30",
    image: "/images/projects/project-15.jpg",
    readTime: "3 min",
    content: [
      "Köket är hemmets mest använda rum — och ofta det som slits mest. Men det kan vara svårt att veta om det bara behöver några mindre justeringar eller en fullständig renovering. Här är fem tecken som brukar tyda på att det senare är läge.",
      "## 1. Skåp och luckor är slitna eller trasiga",
      "Gångjärn som lossnar, luckor som inte längre stänger jämnt eller ytskikt som flagnar är tydliga tecken på att köksstommen nått vägs ände.",
      "## 2. Bänkskivan är repig, missfärgad eller sprucken",
      "En sliten bänkskiva syns direkt och påverkar hela kökets intryck — dessutom kan sprickor släppa in fukt som skadar skåpstommen under.",
      "## 3. Planlösningen känns otymplig",
      "Om du ständigt är i vägen för dig själv vid matlagning, eller saknar bänkyta och förvaring, är det sällan en fråga om städning — det är planlösningen som inte längre fungerar för hur du faktiskt lever.",
      "## 4. Vitvaror och installationer är föråldrade",
      "Äldre el- och VVS-installationer i köket kan både vara en säkerhetsrisk och göra det svårt att använda moderna vitvaror fullt ut.",
      "## 5. Du undviker att visa köket för gäster",
      "Det är en enkel men ärlig signal. Om köket är rummet du helst inte visar upp är det sällan en tillfällig känsla.",
      "Känner du igen ett eller flera av tecknen ovan? Vi hjälper dig gärna med allt från ny kakelsättning och bänkskiva till en komplett köksrenovering, anpassad efter din budget och tidsplan.",
    ],
  },
  {
    slug: "vad-ar-microcement-och-passar-det-ditt-hem",
    title: "Vad är microcement och passar det ditt hem?",
    excerpt:
      "Microcement blir allt populärare i svenska hem. Vi förklarar vad det är, var det passar bäst och vad du bör tänka på innan du väljer det.",
    category: "Microcement",
    date: "2026-06-18",
    image: "/images/projects/project-12.jpg",
    readTime: "4 min",
    content: [
      "Microcement har på kort tid blivit ett av de mest efterfrågade ytskikten i moderna hem — och det är lätt att förstå varför. Den sömlösa, fogfria ytan ger ett stilrent och exklusivt uttryck som passar såväl minimalistiska som varmare, mer klassiska hem.",
      "## Vad är microcement egentligen?",
      "Microcement är en tunn, cementbaserad beläggning som appliceras för hand i flera lager direkt på befintligt underlag — golv, vägg, bänkskiva eller till och med möbler. Till skillnad från kakel behövs varken fogar eller, i de flesta fall, rivning av det gamla underlaget.",
      "## Var passar det bäst?",
      "Microcement fungerar utmärkt i badrum och kök tack vare sin vattentålighet efter försegling, men även på golv i vardagsrum, hallar och trapphus där ett sömlöst uttryck eftersträvas. Det går även att applicera på bänkskivor för en helt fogfri köksyta.",
      "## Vad bör du tänka på?",
      "Ytan kräver ett korrekt förarbete och rätt antal lager för att bli hållbar — det här är inget att göra själv som förstagångsprojekt. Färgen kan variera något beroende på underlag och applicering, vilket är en del av materialets levande, naturliga karaktär snarare än en brist.",
      "Fundera du på microcement till ditt nästa projekt? Vi hjälper dig bedöma om ditt underlag passar, går igenom kulörval tillsammans med dig och säkerställer att varje lager appliceras och förseglas korrekt.",
    ],
  },
];

export const blogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

/** A post's canonical path — /blogg/<slug> unless it overrides with `href`. */
export const blogPostPath = (post: BlogPost) => post.href ?? `/blogg/${post.slug}`;
