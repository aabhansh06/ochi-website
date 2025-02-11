# React + Vite Project Boilerplate

ochi website video 

https://github.com/user-attachments/assets/789a604d-4b19-44dd-aaca-fe0f5a576f27

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-%23646CFF.svg?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-%2361DAFB.svg?logo=react)](https://react.dev/)

A modern React boilerplate with Vite, featuring:

## 🚀 Key Features
- ⚡ **Blazing Fast** development with Vite HMR
- 🛠️ **ESLint Integration** for code quality
- 🎨 **Tailwind CSS** v3.4+ support
- 🧩 **Plugin Options**:
  - [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) (Babel-based)
  - [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) (SWC-based)

## 📦 Getting Started

### Prerequisites
- Node.js v14+
- npm v7+ or yarn v1.22+

### Installation
```bash
git clone https://github.com/your-username/ochi.git
cd ochi
npm install  # or yarn
```

### Development Scripts
| Command          | Description                     |
|------------------|---------------------------------|
| `npm run dev`    | Start development server        |
| `npm run build`  | Create production build         |
| `npm run preview`| Preview production build locally|
| `npm run lint`   | Run ESLint checks               |

## 🛠️ Advanced Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [
    react({  // Switch between Babel/SWC
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});
```

## 🤝 Contributing
PRs welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## 📄 License
MIT 
