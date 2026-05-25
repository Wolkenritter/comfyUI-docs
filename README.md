# ComfyUI 中文文档

基于 VitePress 构建的 ComfyUI 中文文档站点。

## 📖 文档预览

访问：[https://comfyui.aijs.wang/comfyUI-docs/](https://comfyui.aijs.wang/comfyUI-docs/)

## ✨ 功能特色

- 📚 完整的 ComfyUI 使用指南
- 🎯 详细的节点文档
- 💡 丰富的示例工作流
- 🔧 实用的技巧和教程

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run docs:dev
```

访问 http://localhost:5173/comfyUI-docs/ 查看文档。

### 构建生产版本

```bash
npm run docs:build
```

或使用一键部署脚本：

```powershell
.\deploy.ps1
```

## 🌐 部署

### GitHub Pages（推荐）

1. Fork 或克隆此仓库
2. 推送代码到 `main` 分支
3. GitHub Actions 自动构建部署

自动部署配置：`.github/workflows/deploy.yml`

### 自定义域名

1. 在 `docs/.vitepress/dist/` 创建 `CNAME` 文件
2. 填入你的域名（如 `docs.yourdomain.com`）
3. 在域名服务商添加 DNS CNAME 记录指向你的 GitHub Pages

### Vercel / Netlify

```bash
# Vercel
npx vercel

# Netlify
npx netlify deploy
```

## 📁 目录结构

```
docs/
├── index.md              # 首页
├── guide/                # 安装指南
│   ├── installation.md
│   ├── comfyui-desktop.md
│   ├── install-git.md
│   ├── aaaki-launcher.md
│   ├── cloud.md
│   └── model-install.md
├── tutorial/             # 教程
│   ├── index.md
│   ├── how-to-run.md
│   ├── first-image.md
│   └── ...
├── workflow/            # 工作流
│   ├── index.md
│   ├── sdxl.md
│   └── ...
├── resource/            # 资源导航
│   ├── models.md
│   └── ...
├── comfyui-nodes/       # 节点文档
│   ├── core/
│   └── custom/
└── .vitepress/          # VitePress 配置
    └── config.js
```

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [Vue 3](https://vuejs.org/) - JavaScript 框架

## 📝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License