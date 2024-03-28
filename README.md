# CoinKeeper

Open Source cross platform finance tracking application built using Angular 17


# Note on folder structure

This project uses NX guidelines for managing the folder structure.


index.html
main.ts
src/
├─ app/
│  ├─ domain/
│  │  ├─ data-access/ `stores and data access related stuff`
│  │  ├─ feature/ `smart components, have logic and pull data from data-access and feed to dumb components`
│  │  ├─ ui/ `dumb presentational components`
│  │  ├─ utils/ `other helper functions`
│  ├─ shared/
│  │  ├─ data-access/
│  │  ├─ ui/
├─ assets/
index.html
main.ts
