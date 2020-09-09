# Chrome dev tools

## Antall bilder på forside

F12 for å komme til devtools. Trykker så på Network. Her kan jeg filtrere requeste etter hva slags type fil som har blitt hentet. Filtrer etter IMG og refresher siden. Det er mellom 17 og 23 bilder.

Etter litt etterforskning har jeg kommer frem til at det lastes inn 17 bilder. Hvis jeg endrer litt på viewporten til siden, økes dette antallet. Vil da tro at det er nettsiden som som laster inn ny versjoner av bilder, som passer bedre til den nye oppløsningen. 

## Lastetid

Dette varierer selvfølgelig per innlasting, men jeg gjorde 10 refreshes med caching og 10 uten.


Med caching: 
Kjappeste innlastning var på 833 ms og tregeste innlastning var på 1.03 s eller 1030 ms. Dette er da en variasjonsbredde på 197 ms.

Uten caching:
Kjappeste innlastning var på 1610 ms og tregeste var på 1150 ms. Dette er en variasjonsbredde på 460 ms.


Det er altså en merkbar mengde tid man sparer med caching. 

## Audit

Audit har tydeligvis blitt erstattet med Lighthouse, så kjører det istendenfor. Jeg fant hvertfall ikke audit i mine dev tools. Jeg kjørte teste i desktop mode uten noen ekstra extensions.

Hiof.no fikk disse scorene:

Performance: 88

Noen ting som kan forbedres:
* Fjern ubrukt javascript
* Bruk moderne bilde formater
* Mer effektiv encoding av bilder
* Statisk innhold kan caches bedre

Accessibility: 84

Noen ting som kan forbedres:
* Farger burde ha bedre kontrast
* Bilde elementer har ikke alt attributes
* Forms mangler labels
* Linker har ikke navn

Best practices: 85

Noen ting som kan forbedres:
* Bruker JS biblioteker med kjente sikkerhetshull
* Browser errorer blir logget til konsollen

SEO: 90

Noen ting som kan forbedres:

* Bilde elementer har ikke alt attributes

## Hva er "Content type" i response headers på https://www.hiof.no/tjenester/

Går igjen inn i Network tabben og filtrer etter documents. Her er det bare en fil jeg kan se på, "tjeneste/". Kan her se at content-type: text/html;charset=utf-8

## Hva er "Cache-Control" i request header på https://www.hiof.no/tjenester/

Cache-control er no-cache.

## Hvilken protokoll bruker den siden?

Denne siden bruker HTTPS protokollen.
