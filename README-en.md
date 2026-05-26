# ComfyUI Documentation

ComfyUI Chinese documentation site built with VitePress.

## 📖 Preview

Visit: [https://aijs.wang/](https://aijs.wang/)

## ✨ Features

- 📚 Complete ComfyUI user guide
- 🎯 Detailed node documentation
- 💡 Rich example workflows
- 🔧 Practical tips and tutorials

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run docs:dev
```

Visit http://localhost:5173/ to view the documentation.

### Build Production Version

```bash
npm run docs:build
```

Or use the one-click deployment script:

```powershell
.\deploy.ps1
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Fork or clone this repository
2. Push code to `main` branch
3. GitHub Actions auto-build and deploy

Auto-deploy config: `.github/workflows/deploy.yml`

## 📁 Directory Structure

```
docs/
├── index.md              # Home page
├── guide/                # Installation guide
│   ├── installation.md
│   ├── comfyui-desktop.md
│   ├── install-git.md
│   ├── aaaki-launcher.md
│   ├── cloud.md
│   └── model-install.md
├── tutorial/             # Tutorials
│   ├── index.md
│   ├── how-to-run.md
│   ├── first-image.md
│   └── ...
├── workflow/            # Workflows
│   ├── index.md
│   ├── sdxl.md
│   └── ...
├── resource/            # Resource navigation
│   ├── models.md
│   └── ...
├── comfyui-nodes/       # Node documentation
│   ├── core/
│   └── custom/
└── .vitepress/          # VitePress config
    └── config.js
```

## 🌐 Languages

- [中文文档](./README.md) - Chinese documentation
- [English Documentation](./README-en.md) - This page

## 🛠️ Tech Stack

- [VitePress](https://vitepress.dev/) - Static site generator
- [Vue 3](https://vuejs.org/) - JavaScript framework

## 📝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT License