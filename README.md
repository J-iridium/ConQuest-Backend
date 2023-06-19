# How to run the project
## Developing

```bash
# this will run `npm install` if you didn't have it already, and starts the live server using `npm run dev`!
./setup.bat

# also run so that the database will be up and running
docker-compose up 
```


Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Prisma commands that would be great to run!

```bash
# get the web GUI of the DB
npx prisma studio

# to sync the db with newly created modals use 
npx prisma db push

# to seed a db
npx prisma db seed 

# to migrate a db from one to another
npx prisma migrate dev --name init
``` 

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Project structure
``` js
my-project/
├ prisma/
│ ├ migrations/
│ │ └ [migrated db]     # All the DB files created when running migration
│ ├ dev.db              # The DB created by prisma command;
│ ├ schema.prisma       # All the MODAL files used in the DB;
│ └ seed.ts             # seeded file that executes for modal tests;
│
├ src/
│ ├ assets/
│ │ └ [your local assets files]
│ │
│ ├ lib/                    # lib -> [public library of SVELTE components]
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ ├ database.ts           # Prisma client DB module introduction;
│ │ └ [your lib files]
│ │
│ ├
│ │
│ ├ params/
│ │ └ [your param matchers] 
│ │
│ ├ routes/
│ │ ├ api
│ │ │ ├ [your api calls]
│ │ │ └ example
│ │ │   └ +server.ts            # an example how to make API call;
│ │ │ 
│ │ ├ [your routes]/
│ │ │ ├ components/
│ │ │ │ └ page specific components  
│ │ │ ├ +error.svelte         # Routed error page
│ │ │ └ +page.svelte          # The specific page;
│ │ │
│ │ ├ +error.svelte         # General error page;
│ │ ├ +layout.svelte        # Basic layout of website;
│ │ ├ +layout.ts            # Rendering settings;
│ │ ├ +page.css             # Page css;
│ │ └ +page.svelte          # The page;
│ │
│ ├ app.css
│ ├ app.d.ts
│ ├ app.html
│ ├ hooks.client.js
│ └ hooks.server.js
│
└ static/
  └ [your static assets]
```
