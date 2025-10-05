# Project Version Specifications

## Development Environment Requirements

### System Requirements
- **Operating System**: Windows 10/11 (64-bit)
- **Architecture**: x64

### Core Development Tools

#### Node.js
- **Version**: 24.9.0
- **Installer**: `node-v24.9.0-x64.msi`
- **Package Manager**: npm (included)

#### Java Development Kit (JDK)
- **Version**: 21.0.7
- **Installer**: `jdk-21.0.7_windows-x64_bin.exe`
- **Purpose**: Android development and Capacitor requirements

#### Android Development Tools

##### Android Command Line Tools
- **Version**: 13114758 (latest)
- **Package**: `commandlinetools-win-13114758_latest.zip`
- **Purpose**: Android SDK management without Android Studio

##### Android Studio
- **Version**: 2025.1.3.7
- **Installer**: `android-studio-2025.1.3.7-windows.exe`
- **Purpose**: Optional IDE for Android development

## Project Dependencies

### Production Dependencies

#### React & Core Libraries
- **react**: ^19.1.1
- **react-dom**: ^19.1.1
- **react-router-dom**: ^7.9.3

#### Payment Processing
- **@stripe/react-stripe-js**: ^5.0.0
- **@stripe/stripe-js**: ^8.0.0

#### UI & Styling
- **tailwindcss**: ^4.1.14
- **@tailwindcss/vite**: ^4.1.14
- **aos** (Animate On Scroll): ^2.3.4

#### Graphics & Multimedia
- **pixi.js**: ^8.13.2 (2D WebGL renderer)

#### Networking
- **axios**: ^1.12.2 (HTTP client)
- **websocket**: ^1.0.35 (WebSocket client)

#### Build Tools
- **rollup-plugin-copy**: ^3.5.0

### Development Dependencies

#### Cross-Platform Development
- **@capacitor/core**: ^7.4.3
- **@capacitor/cli**: ^7.4.3
- **@capacitor/android**: ^7.4.3
- **capacitor**: ^0.5.6

#### Desktop Application
- **electron**: ^38.2.1
- **electron-builder**: ^26.0.12

#### Build System & Development Server
- **vite**: ^7.1.7
- **@vitejs/plugin-react**: ^5.0.4

#### TypeScript & Type Definitions
- **typescript**: ~5.9.3
- **@types/node**: ^24.6.0
- **@types/react**: ^19.1.16
- **@types/react-dom**: ^19.1.9

#### Code Quality & Linting
- **eslint**: ^9.36.0
- **@eslint/js**: ^9.36.0
- **typescript-eslint**: ^8.45.0
- **eslint-plugin-react-hooks**: ^5.2.0
- **eslint-plugin-react-refresh**: ^0.4.22
- **globals**: ^16.4.0

## Platform Support Matrix

### Supported Build Targets
- ✅ **Web** (Progressive Web App)
- ✅ **Chrome Extension** (Side Panel)
- ✅ **Android** (via Capacitor)
- ✅ **Desktop** (Windows via Electron)
