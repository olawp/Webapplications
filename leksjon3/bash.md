# Bash cardio



## Opprett mappe


mkdir test - Oppretter en folder med navn test

## Lage fil i mappen

cd test - Navigerer inn i mappen
touch testfil - Oppretter en fil med navn testfil, det finnes en rekke måter å gjøre dette på, men dette er den jeg pleier å bruke.

## Legge tekst til filen

Så lenge man oppholder seg i mappen filen holder til:

echo "hello world!" >> testfil - legger til tekststrengen "hello world" på enden av filen.

En mer vanlig approach er å åpne opp filen ved hjelp av en editor, gjøre endringen i filen også lagre. Dette kan f.eks gjøres på denne måten:

code testfil - Åpner i code
subl testfil - Åpner i Sublime text
osv osv


## Endre filen i kommandolinjen

For endring via kommandolinjen kan man f.eks bruke teksteditoren nano ved å bruke kommandoen:

nano testfil - Åpner filen i kommandolinjen, og lare brukeren endre innholdet.

Ellers kan man bruke metoden nevnt under "Legge til tekst i filen" seksjonen.

## Slette filen

For å slette filer bruker man kommandoen rm:

rm testfil - Sletter filen. Tar utgangspunkt i at brukeren faktisk har rettighetene til å slette den.