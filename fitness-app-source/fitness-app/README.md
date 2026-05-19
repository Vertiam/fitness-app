# 💪 Fitness App

A personal macro tracker + workout circuit app. Dark-themed, mobile-first, offline-capable. All data stays in `localStorage` — no backend.

---

## What's inside

### Macro Tracker tab
- Daily food log with date navigation
- Live progress bars for Calories / Protein / Carbs / Fat (turns red if over target)
- 6 one-tap preset meals (Breakfast Base, Whey Shake, Dal+Roti, Paneer, Curd, Soy Chunks)
- Custom food entry form
- Weekly calorie bar chart (Recharts)

### Circuit tab
Three splits — toggle between them, remembered on reload:

| Split | Days | Notes |
|---|---|---|
| **Bro Split** | 5 (Mon–Fri) | Classic muscle-group split |
| **Home Circuit** | 5 gym + Sat swim | Fat-loss phase — gym + evening swim sessions |
| **PPL** | 6 (Mon–Sat) | Push/Pull/Legs, each muscle hit twice/week |

Every exercise has:
- A **🎬 YT** button that opens the YouTube form guide
- A **weight input** with live PR comparison
- A **NEW PR 🎉** flash when you beat your saved record
- PRs are shared across splits (set one in Bro Split → PPL sees it)

---

## Hosting on GitHub Pages — step by step

### 1. Create a public repository

Go to **https://github.com/new**, create a **public** repo.
Name it exactly what you want the URL to be — e.g. `fitness-app`.

### 2. Push the source code

Unzip `fitness-app-source.zip`, then:

```bash
cd fitness-app
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fitness-app.git
git push -u origin main
```

### 3. Edit the repo name in the workflow

Open `.github/workflows/deploy.yml` and find this line:

```yaml
VITE_BASE: /fitness-app/
```

Replace `fitness-app` with your **exact** repository name.

| Your repo URL | Set VITE_BASE to |
|---|---|
| github.com/john/fitness-app | `/fitness-app/` |
| github.com/john/my-gym | `/my-gym/` |
| github.com/john/john.github.io | `/` |

Commit and push.

### 4. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source** choose **GitHub Actions**
3. Click **Save**

### 5. Done

The deploy runs automatically after every push to `main`.
Your app will be live at:

```
https://YOUR_USERNAME.github.io/fitness-app/
```

Check the **Actions** tab to watch the deploy — it takes about 1 minute.
You can also trigger it manually: Actions → Deploy to GitHub Pages → Run workflow.

---

## Custom domain

1. Add domain in **Settings → Pages → Custom domain**
2. Set `VITE_BASE: /` in `deploy.yml`
3. Commit and push

---

## Local development

```bash
pnpm install    # install deps
pnpm dev        # dev server → http://localhost:5173
pnpm build      # production build → dist/
pnpm preview    # preview the production build
```

---

## Stack

| | |
|---|---|
| React 19 + TypeScript | UI |
| Vite 6 | Build tool |
| Tailwind CSS | Styling |
| Recharts | Weekly chart |
| localStorage | All persistence |
