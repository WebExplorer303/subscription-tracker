# Subscription Tracker

A small full-stack app I built to keep tabs on recurring subscriptions — the kind of thing that starts as "let me just track my Netflix and Spotify" and turns into an actual project once you realize how easy it is to lose track of what you're paying for every month.

**Domain:** [subscription-tracker-delta-cyan.vercel.app](https://subscription-tracker-delta-cyan.vercel.app)

## What it does

- Add, edit, and delete subscriptions (name, cost, billing cycle, etc.)
- See your total spend broken down monthly and yearly, so you actually know what all these "small" charges add up to
- Sign in securely and only see your own data — auth is handled with Clerk, and every data-fetching action checks the logged-in user before touching the database

## Why I built it

I wanted a project that wasn't just a to-do list clone — something with real auth, a real database, and a UI that has to actually communicate numbers clearly (monthly vs. yearly totals aren't as trivial to display well as they sound).

## Tech stack

- **Framework:** Next.js 16 (App Router, Server Actions)
- **UI:** React 19, Tailwind CSS 4
- **Auth:** Clerk
- **Database:** PostgreSQL (Neon) via Prisma ORM 7
- **Icons:** Lucide + Tabler
- **Deployment:** Vercel

