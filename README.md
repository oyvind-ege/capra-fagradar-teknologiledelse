## Capra fagradar

Basert på https://github.com/thoughtworks/build-your-own-radar med inspirasjon fra https://github.com/oslokommune/origo-teknologiradar.

Dataen til fagraderen er her: https://docs.google.com/spreadsheets/d/1ijgKkGvDoHSC1DgF5oWlPRZQJvm23N5oz-ssY9ZJMRs

### Oppdater fagrader-data
Eksporter Google spreadsheetet til csv og oppdater `data/radar.csv`.

Det er viktig at kolonne-navnene forblir `name,ring,quadrant,isNew,description` og at dataen i `quadrant` og `ring`
stemmer overens med `/graphing/config.js` sine `getQuadrants` og `getRings` data.

### Kjør lokalt:
```
npm install
npm run dev
```


### Deploy:

```
aws-vault exec <capra-profile> -- npm run deploy
```

Foreløpig kjører det på en private AWS konto. Oppdater `deploy` scriptet i `package.json` for å bytte target s3 bøtte.

Radaren genereres on-demand fra `data/radar.csv`, så man trenger ikke kjøre ny deploy hvis man bare har oppdatert csv-filen.
