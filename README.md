# karzaa

A simple karzaa management application.

## Installation Instructions

### Technology Requirement

- NodeJS >= 6.x
- ES6 aka ES2015
- ExpressJS >= 4.x
- Bootstrap >= 3.x
- Jade aka Pug (HTML Template)
- Bookshelf (ORM)
- Postgres Database Server >= 9.5

### Setup

```
git clone git@github.com:sanjeevkpandit/karzaa.git
cd karzaa
npm install
```

In `src` folder, copy file `config.json.example` and rename to `config.json`. Update the configuration in `config.json` file.
In project's root directory run following scripts:
```
npm run start  // Watch files and build source files on change in files and reload express server. Developer mode.
npm run build  // Only build the source files
```

The build files are available in `dist` folder. You can see the `dist` folder after running any of the above commands.

### Migration

Install knex globally.
```
npm install knex -g
```

Create a database in `postgres`. Update the database connection settings in `src/config.json` file.

Run the migration and seed data.
```
cd src
knex migrate:latest
knex seed:run
```

### Run

In browser, open [http://localhost:3000/](http://localhost:3000/). You can change the port in `src/config.json` file.


Enjoy!
