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
};

export const blogPosts: BlogPost[] = [
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
