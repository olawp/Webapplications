## Git

# Sette opp git lokalt

Først installer git. Dette kan gjøres enten via en github klient (Github Desktop, Fork, GitKraken osv), direkte i VS code eller i git bash eller terminal hvis man kjører mac eller linux. 

I mitt tilfelle installerte jeg det med packagemanageren pacman med kommandoen:
pacman -S git.

Når git er installert kan jeg navigere til mappen der jeg vil opprette repoet og bruke kommandoen: 
git init

# Sette opp nytt repo i github
 Logg inn på github og opprett nytt repo velg reponavn osv. Når kan vi koble det lokale repoet sammen med github repoet.

 I det lokale repoet vil vi gjerne lage noen filer og commite de.

 touch test.txt

 nano test.txt - Legger til innhold i fila

 Adder og commiter så filene

 git add * - "*" vil si å adde alle filene i repoet
 git commit -m "commit message"

 For å koble det lokale repoet til github kan vi skrive:

 git remote add origin https://github.com/olawp/oppgave3Merge.git

 For å pushe lokale filer til github skriver vi:

 git push -f origin master

 # Lage dev branch lokalt

 Først puller vi de siste endringene

 git pull

 Nå kan sjekke ut av current branch, og bytte til en ny:

 git checkout -b dev

 Push så den nye branchen:

 git push origin dev

 # Lage fil i dev branch

 touch hiof.js - oppretter hiof.js fil
 nano hiof.js - legger inn innholder

 # Commit fil i dev

 git add hiof.js

 git commit -m "commit message"

 # Push til dev

 git push origin dev

 # Lage en fil i dev remote

 Leser dette som at repoet på github.com er remoten, så adder en ny fil der og commiter den.

 # Hente endring lokalt
 
 git pull origin dev

 # Merge filer fra dev i master
 git checkout master - bytter tilbake til master
 git pull origin master - henter ned siste endringer
 git merge dev - merger branchene
 git push origin master

