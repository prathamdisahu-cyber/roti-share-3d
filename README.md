# 🫓 Roti Share 3D: The Fractions Adventure

[![Deploy to GitHub Pages](https://github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646CFF.svg)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/graphics-Three.js-black.svg)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Roti Share 3D** is a fully functional, real-time 3D browser-based educational game designed for Class 3–4 students (ages 8–10) to master fractions through interactive Indian kitchen food sharing.

---

## 🌟 Key Features

1. **Genuine 3D WebGL Graphics (Three.js)**:
   - Stylized Indian village kitchen with warm directional sunlight, soft PCF shadows, rustic teakwood dining table, circular wooden cutting board (*chakla*), rolling pin (*belan*), clay pots (*matkas*), and stainless steel plates (*thalis*).
   - Movable perspective camera with OrbitControls (pan, zoom, orbit around table) and a quick camera reset view.

2. **Procedural 3D Roti with Real Sector Slicing**:
   - Realistic circular dough geometry with visible thickness, organic uneven edge waviness, and toasted golden-brown blister spots (*tawa charring*).
   - Mathematical radial sector slicing with true `BufferGeometry` meshes (top, bottom, curved perimeter, and internal cut faces).
   - Slices separate visibly and smoothly animate or drag directly onto Chintu's, Meera's, or Golu's plate.

3. **Three Animated 3D Cartoon Characters**:
   - **Chintu**: Cheerful boy in bright saffron kurta who loves eating roti.
   - **Meera**: Clever girl in teal kurta with twin hair buns who loves math puzzles.
   - **Golu**: Funny, hungry friend in red vest.
   - Dynamic character behaviors: idle breathing/head-bobs, reaching and eating animations, joyful celebrations when fair sharing is achieved, and confused expressions when sharing is unequal.

4. **10 Curriculum-Aligned Levels**:
   - **Level 1: Two Friends** (Share equally into 2 halves: 1/2 each)
   - **Level 2: Three Friends** (Share equally among 3 friends: 1/3 each)
   - **Level 3: Four Quarters** (Divide into four 1/4 pieces, 1 remains on board)
   - **Level 4: Identify Fractions** (Interactive 3D piece inspection & fraction quiz)
   - **Level 5: Three-Quarters** (Assemble 3/4 on Golu's plate and observe remainder)
   - **Level 6: Compare Fractions** (Side-by-side 3D rotis: 1/2 vs 1/4 using 3D Balance Scale)
   - **Level 7: Equivalent Fractions** (Visual area equivalence: 1/2 = 2/4 on Scale & Tiles)
   - **Level 8: Adding Fractions** (1/4 + 1/4 = 2/4 = 1/2 on Meera's plate)
   - **Level 9: Roti Shop Order** (Serve customer order of 1/2 roti for coins)
   - **Level 10: Fraction Master** (Divide into 6 equal slices: 2/6 = 1/3 to each friend)

5. **Multiple Game Modes & Interactive Equipment**:
   - **Modes**: Story Campaign, Roti Shop Order Mode, Timed Fraction Rush, Creative Kitchen Sandbox (Roti, Pizza, Pancake, Laddoo).
   - **Equipment**: Butter Knife (cutting), Serving Spatula (sharing), Measuring Tool / Protractor (angle & degrees), 3D Balance Scale (torque tilting), Fraction Tiles Rack.

6. **Audio, HUD, & Feedback**:
   - Synthesized Web Audio API sound effects: slicing sounds, plate drops, cheerful victory arpeggios, and buzzer prompts.
   - Confetti bursts on level completion using `canvas-confetti`.
   - LocalStorage persistence for unlocked levels, high scores, coins, and stars.

---

## 🚀 Quick Start (Running Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open your browser at `http://localhost:3000` (or the port printed in your console) to play.

---

## 🧪 Running Tests

Verify the 10-level fraction calculations and sharing validation suites:

```bash
npm test
```

---

## 📦 Deploying to GitHub

### Option 1: Automatic Deployment with GitHub Pages (Recommended)

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. **Create a new repository on GitHub**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name it `roti-share-3d` (or any name you prefer).
   - Keep it Public (or Private with GitHub Pro/Teams for Pages).
   - Do **not** initialize with a README, .gitignore, or license (already present in this project).

2. **Push your code**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/roti-share-3d.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - Your site will automatically build and publish at `https://<YOUR-USERNAME>.github.io/roti-share-3d/`!

---

### Option 2: Deploying to Vercel / Netlify

1. Push your repository to GitHub as shown above.
2. Go to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. Click **Add New Project** and import your GitHub repository.
4. Settings are automatically detected:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## 📁 Project Structure

```
roti-share-3d/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/                       # Static public assets
├── src/
│   ├── characters.js             # 3D cartoon characters (Chintu, Meera, Golu)
│   ├── equipment.js              # Knife, Spatula, Scale, Protractor, Tiles
│   ├── food.js                   # Procedural 3D Roti, Pizza, Pancake, Laddoo
│   ├── fractions.js              # Fraction math engine & sector geometry
│   ├── game.js                   # Three.js scene, lighting, camera & game state
│   ├── levels.js                 # 10 Level definitions, quizzes, shop orders
│   ├── main.js                   # Application entrypoint
│   ├── style.css                 # Responsive UI & modal styling
│   └── ui.js                     # HUD, audio manager, modals & dialogs
├── index.html                    # Main HTML shell
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite build configuration (base: './')
└── README.md                     # Documentation & deployment guide
```

---

## 📜 License

This project is licensed under the MIT License.
