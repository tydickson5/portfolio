# Ty Dickson — Personal Portfolio

A fast, responsive, and minimalist personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Styled with a refined **dark forest green and warm tan** earthy aesthetic, designed for deployment on **Vercel**.

## 🎨 Theme & Styling

- **Background**: Warm earthy tan (`#F5F2EB`) with a subtle organic grain overlay.
- **Accents & Text**: Deep forest green (`#142E23`, `#1B3E2F`, `#28543E`).
- **Interactive Details**: Clean category filters, modal architecture deep-dives, one-click copy email button, and responsive mobile navigation.

## 🚀 Projects Showcased

The project data is configured in [`data/projects.ts`](data/projects.ts) based on the ideas roadmap:

1. **Caravyn**: Multi-platform travel ecosystem with a native **iOS app**, scalable **backend telemetry service**, and **web dashboard** for synchronized road trips.
2. **Chef n Share**: Culinary social network & meal-sharing **website/app** with recipe scaling and ingredient inventory matching.
3. **HoosJoining**: Spontaneous event & community meetup platform with real-time activity beacons.
4. **Question Forecaster**: Probabilistic question forecasting & Bayesian calibration analytics tool.
5. **WebScraper & Data Pipeline**: High-throughput distributed crawler with proxy pooling and schema validation.

## 🛠️ Local Development

To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🌐 Deploying to Vercel

This repository is pre-configured for **Vercel**:

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: initial portfolio website build"
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `tydickson5/portfolio` repository.
4. Vercel automatically detects Next.js. Click **Deploy**.

## 📝 Customizing Information

- **Projects**: Modify or add projects in [`data/projects.ts`](data/projects.ts).
- **Skills**: Update skills & proficiencies in [`data/skills.ts`](data/skills.ts).
- **Contact & Email**: Adjust the recipient address in [`components/Contact.tsx`](components/Contact.tsx).

