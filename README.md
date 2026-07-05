# Donna Aseret Rivas - SkyAccess Candidate Spotlight Portfolio

A highly polished, premium candidate showcase and interactive video pitch presenting **Donna Aseret Rivas** for the **Charter Sales Associate** position at **SkyAccess**. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Deployment Guide: Github & Vercel

### 1. Set Your Permanent Video Link
To make your Google Drive video play automatically as the default presentation for all visitors, you have two flexible, production-ready options:

#### Option A: Edit the Code (Recommended for Simplicity)
Open `/src/data/candidateData.ts` and set your URL in the `DEFAULT_VIDEO_URL` constant:
```typescript
export const DEFAULT_VIDEO_URL = "YOUR_GOOGLE_DRIVE_OR_YOUTUBE_URL_HERE";
```
*Note: Our universal link parser automatically handles both Google Drive share/view links and standard YouTube links, converting them into seamless inline embeds.*

#### Option B: Use Environment Variables (Recommended for Security/Vercel)
You can set an environment variable named `VITE_PERMANENT_VIDEO_URL` in your Vercel Dashboard, and the site will dynamically load it on runtime.

---

### 2. Prepare Google Drive Sharing
For your Google Drive video to load correctly inside the website's player:
1. Open your video in **Google Drive**.
2. Click **Share** -> **Get Link**.
3. Under General Access, change "Restricted" to **"Anyone with the link"** and set the role to **Viewer**.
4. Copy the link and paste it into `DEFAULT_VIDEO_URL` or set it as `VITE_PERMANENT_VIDEO_URL`.

---

### 3. Push to GitHub
1. Open your terminal in the exported project folder.
2. Initialize and push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete interactive candidate spotlight with permanent video config"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

---

### 4. Deploy to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.
4. *(Optional)* If you chose **Option B** for your video, expand the **Environment Variables** accordion and add:
   - **Key**: `VITE_PERMANENT_VIDEO_URL`
   - **Value**: *Your Google Drive video link*
5. Click **Deploy**. Vercel will automatically build and publish your portfolio website on a live link!

---

## ✨ Features Built For SkyAccess

- **Aesthetic Premium Layout**: A dark-themed fixed header paired with high-contrast text and a modern light-slate container design.
- **Interactive Pitch Player**: Full interactive transcript highlighting synchronized with simulated cockpit dials (Altitude, Airspeed, and Heading tracking playback progress).
- **Google Drive / YouTube Inline Embedding**: Zero-configuration, bulletproof parsing of cloud-hosted video streams.
- **Academic & Research Showcases**: Highlighting Georgetown, Harvard, and Cal Poly academic accomplishments.
- **Interactive Sales Tenure Records**: A timeline highlighting $300k+ in high-ticket luxury sales across Maserati, Chevrolet, and Jared fine jewelry.
- **Skills Bento Grid & Recommendation Letters**: Highly readable asset summaries highlighting key strengths and professional endorsements.
