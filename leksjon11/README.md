# Poll nettside

## Requirements: 

* Node og NPM installert
* En installasjon av MongoDB
* Mongo må kjøre for at applikasjonen skal ha noe funksjonalitet
* Client og server må kjøre samtidig. 


## Info
* Databasen heter hiof, og kjører på port 27017. Dette skal være default for mongo.
* BASEURL skal være /api/v1. Webserveren kjører på port 5000. 
* Jeg er ganske sikker på at dette skal fungere out of the box, det eneste er nok at hiof databasen må opprettes i mongoshellet, Compass eller lignende. Hvis noe av dette ikke skal fungere vil du finne all infoen du burde trenge i .env filene i /client og /server.
* Hvis du er borti andre problemer, send meg gjerne en mail på olawp@hiof.no


## Instruksjoner
### Starte server
Naviger til server folderen og kjør "npm install". Start serveren med "npm run dev". 

### Starte client
Naviger til client folder og kjør "npm install". Start klienten med "npm run dev".


Nå skal nettsiden være mulig å åpne på localhost:3000.  
Man kan se alle tilgjengelige polls på hovedsiden, opprette en bruker, opprette en poll og se pollresultater. Selv om man kan lage en bruker og lagre den i databasen, blir ikke polls eller votes knyttet til denne brukeren. Man kan derimot skrive inn et brukernavn når man oppretter en poll. 

Brukere blir lagt i users collectionen og polls blir lagt i polls collectionen. 

## Test

"npm run test" i client folderen for å kjøre tester