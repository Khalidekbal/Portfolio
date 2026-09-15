# Khalid Mohamed — Mechatronics & Robotics Engineering Portfolio

A modern, ultra-responsive, dark-themed engineering portfolio website for **Khalid Mohamed (Ekbal)**, inspired by modern mechatronics aesthetics. Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed for zero-configuration deployment to **Vercel** and direct version control on **GitHub**.

---

## 🌟 Key Highlights & Features

- **Floating Glassmorphic Header**: Sticky navigation with dynamic scroll spy, monogram logo, mobile drawer menu, and quick CV action.
- **Hero Showcase**: Status badge (*"Available for Mechatronics & Robotics Opportunities"*), engineering headline, direct project scroll anchors, and social links.
- **Interactive Project Case Studies**: Filterable project gallery (`Robotics & Mechatronics`, `Biomechatronics`, `Embedded Systems`) featuring:
  - **S.A.V.I. (Secure Autonomous Vial Interface) Medical Robot**
  - **Myoelectric (sEMG) Gesture Control Pipeline**
  - **7-DOF Robotic Arm (ROS 2 & Micro-ROS)**
  - **Industrial Automated Production Line (Siemens S7-1500 PLC & Factory I/O)**
  - **Smart IoT Cup-Anemometer Flowmeter System**
  - **Formula Student EV Battery & BMS Dynamic Modeling**
  - Detailed case study modals with hardware vs. software specifications, metrics, and problem/solution engineering breakdown.
- **Verified Credentials Grid**: Interactive certificates viewer with zoom lightbox supporting both high-resolution images and embedded PDFs.
- **Curriculum Vitae Preview Modal**: In-browser PDF preview modal with direct one-click PDF download button.
- **Technical Skills Matrix**: Badged capabilities across Mechanical CAD, Embedded/Robotics, Software, and Biomechatronics/DSP.
- **Interactive Contact Section**: Contact form, one-click copy email button (`khalidekbal03@gmail.com`), and direct WhatsApp/LinkedIn links.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js**: v18.0 or newer (tested on Node v20/v24)
- **npm**: v9.0 or newer

### 2. Installation
Open your terminal in the project directory:

```bash
# Install all required dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser. The server supports instant Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This generates an optimized, minified production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Static Assets Management

All static files are stored in `public/` and served directly from the root `/`:

| Asset Directory | Purpose | File Path |
| :--- | :--- | :--- |
| `public/cv/` | Khalid's Resume / CV | `/cv/Khalid_Mohamed_CV.pdf` |
| `public/images/` | Professional Profile Photo | `/images/profile.jpg` |
| `public/certificates/` | Credentials & Diplomas | `/certificates/*` (Images or PDFs) |

### Updating or Adding New Assets:
1. **Resume / CV**: Replace `public/cv/Khalid_Mohamed_CV.pdf` with your latest PDF version.
2. **Profile Picture**: Replace `public/images/profile.jpg` with any professional square/portrait headshot.
3. **Certificates**: Add new certificates into `public/certificates/` and register them in `src/data/certificates.ts`.
4. **Projects**: Add or edit projects anytime in `src/data/projects.ts`.

---

## 🐙 Step-by-Step GitHub Setup

To push this repository to your personal GitHub account:

1. **Initialize Git in the project root**:
   ```bash
   git init
   ```

2. **Stage all files and make the initial commit**:
   ```bash
   git add .
   git commit -m "feat: initial release of Khalid Mohamed Mechatronics portfolio"
   ```

3. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `mechatronics-portfolio` (or your preferred name)
   - Leave "Initialize with README" unchecked.

4. **Link local repository and push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/mechatronics-portfolio.git
   git push -u origin main
   ```

---

## ⚡ Step-by-Step Vercel Deployment

Deploying on Vercel is 100% zero-configuration and automatic:

### Method A: Connect through Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your `mechatronics-portfolio` repository from the list and click **Import**.
4. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within ~30 seconds, your site will be live with a free SSL certificate (e.g. `https://khalid-mohamed-portfolio.vercel.app`).
7. Any future `git push` to `main` will automatically trigger an instant deployment!

### Method B: Deploy using Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your command line.

---

## 🛠️ Tech Stack Overview

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (`vercel.json` pre-configured for SPA rewrites and asset caching)

---

## 📬 Contact & Information

- **Engineer**: Khalid Mohamed Ekbal
- **Email**: [khalidekbal03@gmail.com](mailto:khalidekbal03@gmail.com)
- **Phone / WhatsApp**: +20 1140070356
- **Location**: Giza / Cairo, Egypt
- **University**: Ain Shams University — Faculty of Engineering (Mechatronics & Automation)
