# 🎮 Comet GameHouse Frontend

**A modern, cross-platform gaming platform**
Built with **React**, **Vite**, **Capacitor**, and **Electron** for seamless performance across **web**, **mobile**, **desktop**, and **browser extension** environments.

---

## 📘 Overview

**Comet GameHouse** delivers an integrated gaming experience that bridges platforms — from desktop to mobile and browser — allowing users to play, manage, and explore games anywhere.

* 🌐 **Web App (PWA)** powered by Vite + React
* 📱 **Android App** built with Capacitor
* 💻 **Desktop App** packaged via Electron
* 🧩 **Chrome Extension** side-panel integration

---

## 👤 Author

**Akira Nakamura**
📧 [cometstar864@gmail.com](mailto:cometstar864@gmail.com)
🌐 [https://akiranakamura-cometstar.web.app](https://akiranakamura-cometstar.web.app)

---

## ⚙️ Development Environment

| Component                       | Version                           | Notes                                                   |
| ------------------------------- | --------------------------------- | ------------------------------------------------------- |
| **Operating System**            | Windows 10 / 11 (64-bit)          | Development environment                                 |
| **Architecture**                | x64                               | Required                                                |
| **Node.js**                     | 24.9.0                            | `node-v24.9.0-x64.msi`                                  |
| **npm**                         | Included with Node.js             | Package manager                                         |
| **JDK**                         | 21.0.7                            | `jdk-21.0.7_windows-x64_bin.exe` (required for Android) |
| **Android CLI Tools**           | 13114758 (latest)                 | `commandlinetools-win-13114758_latest.zip`              |
| **Android Studio** *(optional)* | 2025.1.3.7                        | Optional IDE for Android                                |
| **Build Tools**                 | Vite, Electron Builder, Capacitor | Multi-platform build system                             |

---

## 🧩 Tech Stack

| Layer                     | Framework / Library       | Version           |
| ------------------------- | ------------------------- | ----------------- |
| **Frontend**              | React                     | ^19.1.1           |
| **Router**                | React Router DOM          | ^7.9.3            |
| **Styling**               | TailwindCSS + Vite Plugin | ^4.1.14           |
| **Animation**             | AOS (Animate On Scroll)   | ^2.3.4            |
| **Graphics Engine**       | Pixi.js                   | ^8.13.2           |
| **Networking**            | Axios, WebSocket          | ^1.12.2 / ^1.0.35 |
| **Payments**              | Stripe SDKs               | ^5.0.0 / ^8.0.0   |
| **Build Tool**            | Vite                      | ^7.1.7            |
| **Cross-Platform Bridge** | Capacitor                 | ^7.4.3            |
| **Desktop Runtime**       | Electron                  | ^38.2.1           |

---

## 🏗️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Comet-GameHouse/Frontend.git
cd Frontend
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Development Server

```bash
yarn run dev
```

Runs the app locally at [http://localhost:5173](http://localhost:5173).

---

## 📦 Build Commands

| Command                   | Description                    |
| ------------------------- | ------------------------------ |
| `npm run build`           | Build for web (production)     |
| `npm run build:desktop`   | Build Electron desktop app     |
| `npm run build:android`   | Build Capacitor Android app    |
| `npm run build:extension` | Build Chrome extension version |

---

## 🔢 Version Management

Versioning is handled manually without Git tags.

| Command                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| `npm run version:patch` | Increment patch version (e.g., 0.0.1 → 0.0.2) |
| `npm run version:minor` | Increment minor version (e.g., 0.0.1 → 0.1.0) |
| `npm run version:major` | Increment major version (e.g., 0.1.0 → 1.0.0) |

`postversion` script automatically updates manifest files via
`scripts/update-manifest-version.js`.

---

## 🧱 Platform Targets

| Platform                     | Supported | Build Output     | Framework                   |
| ---------------------------- | --------- | ---------------- | --------------------------- |
| 🌐 **Web (PWA)**             | ✅         | `dist/web`       | React + Vite                |
| 🧩 **Chrome Extension**      | ✅         | `dist/extension` | Vite (Manifest v3)          |
| 📱 **Android App**           | ✅         | `dist/android`   | Capacitor + JDK 21          |
| 💻 **Desktop App (Windows)** | ✅         | `dist/desktop`   | Electron + Electron Builder |

---

## 🧰 Electron Build Configuration

**App ID:** `com.comet.gamehouse`
**Product Name:** `Comet GameHouse`

**Packaging Targets:**

* Windows → NSIS Installer
* macOS → DMG
* Linux → AppImage

**Build Output:** `dist/desktop`
**Main Entry:** `platforms/desktop/main.js`

---

## 📄 License

© 2025 **Akira Nakamura**
All rights reserved.
For commercial licensing or partnership inquiries, please contact
📧 [cometstar864@gmail.com](mailto:cometstar864@gmail.com)

---

## 🪄 Summary

| Item                 | Detail                      |
| -------------------- | --------------------------- |
| **Project Name**     | Comet GameHouse             |
| **Version**          | 0.0.0                       |
| **Primary Language** | TypeScript                  |
| **Framework**        | React 19                    |
| **Build System**     | Vite + Capacitor + Electron |
| **Last Updated**     | October 2025                |
