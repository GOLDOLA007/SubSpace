# SubSpace | Membership Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

---

### 📝 Description
A modern, highly responsive **Membership & Subscription Platform** landing page built with **React** and **TypeScript**. This project features a clean, professional dark mode UI based on the Material Dark theme, crafted for seamless user experience across devices to showcase subscription tiers.

---

### ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Multi-Tier System** | 3 distinct membership tiers (Bronze, Silver, Gold) with clear value delivery. |
| **Material Dark Theme** | Eye-friendly dark mode aesthetic using a refined `#121212` color palette. |
| **Component Reusability** | Fully typed, dynamic React components driven by TypeScript interfaces. |
| **Sticky UI Layout** | Clever Flexbox implementation ensuring strict layout alignment and pinned actions. |
| **Responsive Design** | Fluid container wrapping that adapts effortlessly from mobile screens to large monitors. |

---

### 📦 Plans and Benefits

| Plan | Benefits | Focus |
| :--- | :--- | :--- |
| **🥉 Bronze** | Exclusive weekly newsletter sent directly to your email. | Text-based content consumption. |
| **🥈 Silver** | Newsletter + Access to the exclusive course platform. | Practical learning and video lessons. |
| **🥇 Gold** | Newsletter + Course Platform + VIP Group Access. | Networking, mentoring, and community. |

---

### 🛠️ Tech Stack

* **Frontend Framework:** React 18+ (Bundled via Vite)
* **Language:** TypeScript (Strictly typed props and interfaces)
* **Styling:** Tailwind CSS (Utility-first CSS, custom arbitrary values)
* **Build Tool:** Package Manager (npm)

---

### 📦 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone [https://github.com/your-username/subspace.git](https://github.com/your-username/subspace.git)
```

2️⃣ **Install dependencies**
```bash
cd subspace
npm install @tailwindcss/vite tailwindcss
```

3️⃣ **Run the application (Development Server)**
```bash
npm run dev
```

Once running, you can access the local server in your browser (usually at `http://localhost:5173`).

### 🛡️ UI Architecture & Best Practices

- **Strict Prop Typing:** Avoided runtime errors by implementing robust TypeScript `interfaces` to control how data flows into reusable UI components.

- **Contrast Optimization:** Replaced bright borders with low-opacity variants (`border-zinc-800/50`) to create soft, premium-looking edges on high-contrast dark backgrounds.

- **Dynamic Variants:** Handled theme-specific layouts by creating style literal dictionaries mapped directly to explicit types (`"gold" | "silver" | "bronze"`).
