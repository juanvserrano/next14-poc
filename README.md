This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project contains Paper's PLP & PDP. It is a NextJS application with Typescript. Check [stack](#) to see more details about the project.

## Getting Started

AWS KEYCHAIN!

## Running development

- TK:
- WW:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

TODO: explain hosts/etc configuration here.

## Stack

Currently, this project uses:
**NextJS**

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

**Zod**

- link to zod

**Radix Primitives**

- link to radix

**Framer Motion**

- Link to framer motion

**(S)CSS Modules**

- link

**graphql Request**

-link

## About this project

This project has a set of rules that encourage developers to follow a set of strict software design principles:

### Domain driven design

XXXX

### Inversion of control

### Colocation

xxxxx

### Dependency encapsulation

xxxxxx

## Contributing

### Recommended checks

- Use Dev Tools to validate there are no memory leaks in the code you will be submitting.
- Run `pnpm analyze` to validate your changes are not introducing changes in the bundle size.
- Validate User perception running `pnpm build && pnpm start`. This will compile a production version where you can check that everything works fine.
- Run tests

### Github Actions during P.R. Review

- Analyze: checks for big changes in the bundle size.
- Format & Lint: checks for issues with code guidelines
- Test: runs the whole Test Suite for unit and integration
- e2e: runs e2e tests.

## Code Guidelines

TBD

## TL;DR

### Environment variables

All dotenvs are typed using Zod and must be consumed from `@env`:

```typescript
//❌ DONT
const API_URL = process.env.API_URL as string;

//✅ DO
import { ENV } from "@env";

const API_URL = ENV.API_URL;
```

Paper Catalog is a multi tenant project. If you need to add a new dotenv, it must be added to all keychains.

###
