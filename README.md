This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Please have Node and npm to run this project

If you do not have/do not want to install the above, you can use docker by running the command:

```bash
docker-compose up --build
```

This project uses:

- Next.js
- Zod
- shadcn
- tailwind

Install any necessary dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Please use [http://localhost:3000](http://localhost:3000) to access UI or use for accessing routes below.

## Routes

This project consists of 5 main Routes:

1. List all the constituents in the system:

```bash
GET constituents/
```

2. Submit a new constituent:

```bash
POST constituents/
```

This request needs a req.body object with the following information:

```typescript
{
  email: string;
  name: string;
  address: string;
}
```

Any other objects of submission will recieve an error

3. Export a csv File:

```bash
GET constituents/export/
```

4. Main UI Page:

```bash
http://localhost:3000/
```

5. Seeding Example Data:

```bash
POST /constituents/seed/[[count]]
```

This route take in an optional count for however many constituent objects you'd like
