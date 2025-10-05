# 🧩 Project Version Specification

## 📦 Development Environment

### 🖥️ System Requirements

| Component            | Specification            |
| -------------------- | ------------------------ |
| **Operating System** | Windows 10 / 11 (64-bit) |
| **Architecture**     | x64                      |

---

### ⚙️ Core Development Tools

| Tool                            | Version           | Installer                                  | Notes                                     |
| ------------------------------- | ----------------- | ------------------------------------------ | ----------------------------------------- |
| **Node.js**                     | 24.9.0            | `node-v24.9.0-x64.msi`                     | Includes npm                              |
| **Java Development Kit (JDK)**  | 21.0.7            | `jdk-21.0.7_windows-x64_bin.exe`           | Required for Android / Capacitor builds   |
| **Android Command Line Tools**  | 13114758 (latest) | `commandlinetools-win-13114758_latest.zip` | For SDK management without Android Studio |
| **Android Studio** *(optional)* | 2025.1.3.7        | `android-studio-2025.1.3.7-windows.exe`    | Full IDE for Android development          |

---

## 📁 Project Dependencies

### 🧠 Production Dependencies

| Category                   | Package                 | Version | Description                 |
| -------------------------- | ----------------------- | ------- | --------------------------- |
| **React & Core Libraries** | react                   | ^19.1.1 | Core UI library             |
|                            | react-dom               | ^19.1.1 | DOM bindings for React      |
|                            | react-router-dom        | ^7.9.3  | Routing for React apps      |
| **Payment Processing**     | @stripe/react-stripe-js | ^5.0.0  | React Stripe integration    |
|                            | @stripe/stripe-js       | ^8.0.0  | Stripe.js library           |
| **UI & Styling**           | tailwindcss             | ^4.1.14 | Utility-first CSS framework |
|                            | @tailwindcss/vite       | ^4.1.14 | Tailwind Vite integration   |
|                            | aos                     | ^2.3.4  | Animate On Scroll library   |
| **Graphics & Multimedia**  | pixi.js                 | ^8.13.2 | 2D WebGL rendering engine   |
| **Networking**             | axios                   | ^1.12.2 | HTTP client                 |
|                            | websocket               | ^1.0.35 | WebSocket client            |
| **Build Tools**            | rollup-plugin-copy      | ^3.5.0  | File copy plugin for builds |

---

### 🧩 Development Dependencies

| Category                          | Package                     | Version  | Description                       |
| --------------------------------- | --------------------------- | -------- | --------------------------------- |
| **Cross-Platform Development**    | @capacitor/core             | ^7.4.3   | Core Capacitor runtime            |
|                                   | @capacitor/cli              | ^7.4.3   | Capacitor CLI                     |
|                                   | @capacitor/android          | ^7.4.3   | Android bridge                    |
|                                   | capacitor                   | ^0.5.6   | Legacy or helper package          |
| **Desktop Application**           | electron                    | ^38.2.1  | Electron runtime                  |
|                                   | electron-builder            | ^26.0.12 | Electron packaging & distribution |
| **Build System & Dev Server**     | vite                        | ^7.1.7   | Modern frontend build tool        |
|                                   | @vitejs/plugin-react        | ^5.0.4   | React plugin for Vite             |
| **TypeScript & Type Definitions** | typescript                  | ~5.9.3   | TypeScript compiler               |
|                                   | @types/node                 | ^24.6.0  | Node.js type definitions          |
|                                   | @types/react                | ^19.1.16 | React type definitions            |
|                                   | @types/react-dom            | ^19.1.9  | React DOM types                   |
| **Code Quality & Linting**        | eslint                      | ^9.36.0  | JavaScript linter                 |
|                                   | @eslint/js                  | ^9.36.0  | ESLint core configuration         |
|                                   | typescript-eslint           | ^8.45.0  | TypeScript linting support        |
|                                   | eslint-plugin-react-hooks   | ^5.2.0   | React Hooks linting rules         |
|                                   | eslint-plugin-react-refresh | ^0.4.22  | Fast refresh lint support         |
|                                   | globals                     | ^16.4.0  | Predefined global variables       |

---

## 🧱 Platform Support Matrix

| Platform                          | Supported | Build System       |
| --------------------------------- | --------- | ------------------ |
| **Web (PWA)**                     | ✅         | Vite               |
| **Chrome Extension (Side Panel)** | ✅         | Vite + Manifest v3 |
| **Android (via Capacitor)**       | ✅         | Capacitor + JDK 21 |
| **Desktop (Windows)**             | ✅         | Electron           |

---

## 🏷️ Summary

**Project Type:** Cross-platform (Web + Android + Desktop + Extension)
**Build Toolchain:** Vite + Capacitor + Electron
**Language:** TypeScript / React (v19)
**Last Updated:** October 2025