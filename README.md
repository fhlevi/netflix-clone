# 🎬 Netflix Clone - Next.js 13+ | TypeScript | Tailwind CSS

A beautifully crafted Netflix clone built with **Next.js App Router**, **Tailwind CSS**, and **TypeScript**. The app replicates the visual and functional design of Netflix's login and browsing experience, using modular components and SOLID principles for scalability and maintainability.

---

## 🚀 Features

- 🔐 Authentication-ready (mock or Firebase/NextAuth)
- 🎥 Movie data powered by [TMDB API](https://www.themoviedb.org/)
- 💅 Netflix-style UI with responsive design
- ⚙️ Clean folder structure with SOLID principle
- 💻 Built with TypeScript and Tailwind CSS
- 🧱 Scalable and maintainable architecture
- 🔄 App Router support (Next.js 13+)

---

## 📂 Project Structure

```
netflix-clone/
├── public/                     # Static files (images, icons, etc.)
│   └── assets/
│
├── app/                    # Next.js App Router directory
│   ├── (home)/             # Landing page
│   ├── login/              # Login page
│   ├── browse/             # Post-login dashboard
│   └── layout.tsx          # Root layout wrapper
│
├── components/             # Reusable UI components
│   ├── login/              # Login-related components (form, layout, footer)
│   └── common/             # Navbar, Banner, MovieRow, etc.
│
├── constants/              # App-wide static constants
│
├── config/                 # App config (e.g., API keys, URLs)
│
├── lib/                    # Logic layer: API clients, auth utils
│
├── styles/                 # Global and scoped CSS
│
├──types/                  # TypeScript types and interfaces
│
├── .env.local                  # Environment variables
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── tsconfig.json               # TypeScript config
└── package.json                # NPM scripts and dependencies
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/netflix-clone-nextjs.git
cd netflix-clone-nextjs
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

> 🔑 You can get a free TMDB API key at [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

| Script         | Description                       |
|----------------|-----------------------------------|
| `dev`          | Run the app in development mode   |
| `build`        | Compile the app for production    |
| `start`        | Start the production server       |
| `lint`         | Run lint checks                   |

---

## 📌 Technologies Used

- [Next.js 13+](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [The Movie Database API](https://www.themoviedb.org/)
- (Optional) [Firebase](https://firebase.google.com/) / [NextAuth.js](https://next-auth.js.org/)

---

## ⚙️ Future Enhancements

- ✅ Add real authentication (Firebase or NextAuth.js)
- 🎬 Add trailers and video modals
- 💾 User profiles & favorites
- 🌐 i18n and accessibility improvements
- 🧪 Add unit and integration tests with Testing Library and Jest

---

## 📸 Screenshots

> Coming soon...

---

## 🧠 SOLID Principles Applied

| Principle | Description |
|----------|-------------|
| **S - Single Responsibility** | Each component does one thing: form, layout, footer, etc. |
| **O - Open/Closed** | Components are extendable without modifying core logic |
| **L - Liskov Substitution** | Auth logic and services can be swapped (e.g., Firebase ↔️ NextAuth) |
| **I - Interface Segregation** | Components only receive props they actually use |
| **D - Dependency Inversion** | UI depends on abstractions like auth utility functions |

---

## 🙋‍♂️ Acknowledgements

- UI inspired by [Netflix](https://www.netflix.com/)
- Movie data from [TMDB](https://www.themoviedb.org/)

---

## 📬 Contact

Have questions or feedback?  
Open an issue or reach out via [GitHub](https://github.com/fhlevi).

---

> ⚠️ This project is for educational/demo purposes only. It is not affiliated with Netflix.