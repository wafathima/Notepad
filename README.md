# Mini Notepad

A personal notepad web app. Register, log in, write notes, attach images, and
manage everything from a private dashboard. Built with Next.js (App Router),
TypeScript, Tailwind CSS, and MongoDB.

## Stack

| Layer          | Choice                                             |
|----------------|-----------------------------------------------------|
| Framework      | Next.js 16 (App Router, TypeScript)                 |
| Styling        | Tailwind CSS v4                                      |
| Database       | MongoDB via Mongoose                                 |
| Auth           | Custom JWT in an httpOnly cookie (`jose` + `bcryptjs`) |
| Route protection | `src/proxy.ts` (Next.js 16's replacement for middleware) |
| Validation     | `zod` on every API route                             |
| Image storage  | Local disk (`public/uploads`) — see production note below |

## Project structure

```
src/
  app/
    page.tsx                # Landing page
    login/, register/       # Auth pages
    profile/                # User profile
    notes/                  # Dashboard, new note, edit note
    api/
      auth/{register,login,logout,me}/route.ts
      notes/route.ts        # list + create
      notes/[id]/route.ts   # get + update + delete
      upload/route.ts       # image upload
  components/                # Navbar, NoteCard, NoteEditor, ImageUploader
  context/AuthContext.tsx    # client-side auth state
  lib/                       # db.ts, auth.ts, getCurrentUser.ts, validation.ts
  models/                    # User.ts, Note.ts (Mongoose schemas)
  proxy.ts                   # protects /notes and /profile
```

## 1. Install Node.js and create the project (what I already did)

This is how the project was scaffolded, for reference:

```bash
npx create-next-app@latest mini-notepad \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-npm

cd mini-notepad
npm install mongoose bcryptjs jsonwebtoken jose zod
npm install -D @types/bcryptjs @types/jsonwebtoken
```

You don't need to redo this — the finished project is included.

## 2. Install dependencies

```bash
cd mini-notepad
npm install
```

## 3. Set up MongoDB

Pick one:

**Option A — MongoDB Atlas (recommended, free tier available)**
1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Create a database user and allow your IP (or `0.0.0.0/0` for quick testing)
3. Copy the connection string, e.g.
   `mongodb+srv://user:pass@cluster0.mongodb.net/mini-notepad`

**Option B — Local MongoDB**
```bash
# macOS
brew tap mongodb/brew && brew install mongodb-community
brew services start mongodb-community
# Connection string: mongodb://127.0.0.1:27017/mini-notepad
```
Or run it in Docker:
```bash
docker run -d -p 27017:27017 --name mini-notepad-mongo mongo:7
```

## 4. Configure environment variables

Copy the example file and fill it in:

```bash
cp .env.example .env.local
```

```env
MONGODB_URI=mongodb://127.0.0.1:27017/mini-notepad
JWT_SECRET=<generate with: openssl rand -base64 32>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`.env.local` is already git-ignored.

## 5. Run it

```bash
npm run dev
```

Visit http://localhost:3000. Try the flow:
1. Home page → **Register** → create an account (redirects to the dashboard)
2. **+ New note** → add a title, some content, drag in an image → **Save note**
3. Open the note from the dashboard, edit it, or delete it
4. **Logout** → the navbar reverts to Login/Register, and `/notes` now
   redirects you to `/login` if you try to visit it directly

## 6. Build for production

```bash
npm run build
npm run start
```

## Feature checklist (mapped to requirements)

- Done — App Router + dynamic routing — `notes/[id]`
- Done — Authentication — register/login/logout with hashed passwords (`bcryptjs`) and JWT in an httpOnly cookie
- Done — API routes — `src/app/api/**`
- Done — MongoDB integration — Mongoose models + cached connection (`src/lib/db.ts`)
- Done — Responsive design — mobile-first Tailwind layout throughout
- Done — Form validation — `zod` schemas on the server, plus inline client checks
- Done — Protected routes — `src/proxy.ts` guards `/notes` and `/profile`; every API route also re-checks the session server-side
- Done — Image upload — drag-in uploader, stored per-note
- Done — CRUD for notes — create, read, update, delete, all scoped to `owner: userId`
- Done — User profile — `/profile` shows account info and note count
- Done — SEO — metadata, Open Graph tags, `robots.ts`, `sitemap.ts`
- Done — Deployment-ready — see below

## Important production note: image storage

The upload route (`src/app/api/upload/route.ts`) currently writes files to
`public/uploads` on the server's local disk. That's fine for local
development, but **most serverless hosts (including Vercel) have a read-only
or ephemeral filesystem in production** — uploaded images would disappear
after each deploy or between function invocations.

For production, swap the upload route to use an object store instead, e.g.:
- **Vercel Blob** (`@vercel/blob`) — simplest if deploying to Vercel
- **AWS S3** (`@aws-sdk/client-s3`)
- **Cloudinary** (great if you also want on-the-fly image transforms)

The rest of the app doesn't change — `Note.images` just stores whatever URL
the storage provider returns, exactly like it does now.

## Deploying to Vercel

1. Push this project to a GitHub repo
2. Import it at https://vercel.com/new
3. Add the environment variables in the Vercel project settings:
   - `MONGODB_URI` (use an Atlas connection string — Vercel can't reach a
     `localhost` database)
   - `JWT_SECRET`
   - `NEXT_PUBLIC_SITE_URL` (your production URL)
4. Swap the image upload route for a cloud storage provider (see above)
   before going live, since local disk writes won't persist on Vercel
5. Deploy

## Security notes

- Passwords are hashed with `bcryptjs` before being stored — never in plain text
- The JWT is stored in an **httpOnly** cookie, so client-side JS can't read it (mitigates XSS token theft)
- Every notes API route re-verifies the session **and** scopes the query to
  `owner: user.userId`, so one user can never read/edit/delete another
  user's notes, even by guessing an ID
- `src/proxy.ts` provides route-level redirection for a better UX, but the
  API routes are the real enforcement layer — never rely on client-side
  checks alone
