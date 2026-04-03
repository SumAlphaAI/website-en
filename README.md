# SumAlpha Landing Page

This is the official landing page for **SumAlpha**, the automated asset management matrix bridging Web2 and Web3.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Features

- **Bilingual Support**: Seamless switching between English (default) and Chinese.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **Brand Identity**: Implements the Deep Ocean Blue, Emerald Green, and Royal Purple color scheme.
- **Performance**: Static Generation (SSG) for optimal load times.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## Deployment

### Vercel (Recommended)

This project is ready to be deployed on Vercel.

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. **Important**: In the "Root Directory" setting, select `website_landing` (or click "Edit" and type `website_landing`).
4. The framework preset should automatically be detected as `Next.js`.
5. Click **Deploy**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2FSumAlpha%2Ftree%2Fmain%2Fwebsite_landing)

### Cloudflare Pages

This project can also be deployed on **Cloudflare Pages**.


1. Connect your GitHub repository to Cloudflare Pages.
2. Set the build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npx @cloudflare/next-on-pages@latest` (or `npm run build` if using standard Node adapter)
   - **Output Directory**: `.vercel/output/static` (for static export) or default.

For standard Vercel/Node deployment:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Project Structure

- `app/`: Next.js App Router pages and layout.
- `components/`: Reusable UI components (Hero, Features, Ecosystem, etc.).
- `lib/i18n/`: Internationalization logic and translations.
- `public/`: Static assets.

## Brand Guidelines

- **Primary**: Deep Ocean Blue (`#020617`)
- **Yield**: Emerald Green (`#10b981`)
- **Alpha**: Royal Purple (`#7c3aed`)
