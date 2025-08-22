# Charles Wu — Design Portfolio (React + Vite)

Static site built with React (Vite) and deployed to Netlify/GitHub Pages.

## Local development

1. Install Node 18+.
2. Install deps:

```sh
npm install
```

3.1 Run dev server:

```sh
npm run dev
```

3.2 Configure netlify:

```sh
npx netlify-cli link
npx netlify-cli env:set OPENAI_MODEL gpt-4o-mini
```


4. Build:

```sh
npm run build && npm run preview
```
Update assistant-system.txt:

```sh
npx netlify-cli env:set ASSISTANT_SYSTEM "$(cat netlify/assistant-system.txt)" --force
```

## Password protection (client-side)

Private case studies are gated client-side and remembered for the browser session via `sessionStorage`.

Set the SHA-256 hash of your password in an environment variable so the plaintext password is not embedded in code.

- Copy `.env.sample` to `.env` and set:

```
VITE_PORTFOLIO_PASSWORD_HASH=your_sha256_hash
```

- Generate a SHA-256 hash for your password (lowercase hex). Example using Node:

```sh
node -e "console.log(require('crypto').createHash('sha256').update(process.argv[1]).digest('hex'))" "your-password"
```

The app will only load protected content after the correct password is entered. This is best-effort protection for static hosting; highly sensitive material should use server-side auth.

## Netlify

- The included `netlify.toml` sets SPA redirects and caching headers.
- In your site settings → Environment variables, add:
  - `VITE_PORTFOLIO_PASSWORD_HASH` = the SHA-256 hash of your password
- Build command: `npm run build`
- Publish directory: `dist`

## Content

- Add/edit portfolio entries in `src/data/portfolio.ts` and corresponding components under `src/portfolio/`.
- Thumbnails can be wired into `Card` and assets imported via Vite.

## Notes

- Password is remembered per session; closing the tab/browser clears it.
- If you prefer an obfuscated URL fallback, you can create alternate routes and only link them after unlocking.