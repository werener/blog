# Elysia with Bun runtime

## Setup
Install bun runtime, if you don't have it with 
```
powershell -c "irm bun.sh/install.ps1 | iex"
```

Install packages with
```
bun install
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## API
You can view API docs at http://localhost:3000/swagger

## DB
Generate migrations: 
```bash
npx drizzle-kit generate
```

Apply migrations:
```bash
npx drizzle-kit migrate
```

Directly apply changes:
```bash
npx drizzle-kit push
```
