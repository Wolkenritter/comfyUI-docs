# ComfyUI Docs 部署脚本

## 🚀 快速部署

### 方式一：一键部署（推荐）

```powershell
# 在项目根目录执行
.\deploy.ps1
```

### 方式二：手动部署

```powershell
# 1. 安装依赖（首次需要）
npm install

# 2. 构建文档
npm run docs:build

# 3. 预览（可选）
npm run docs:preview
```

---

## 📁 输出目录

构建完成后，静态文件位于：
```
docs/.vitepress/dist/
```

---

## 🌐 GitHub Pages 部署

### 方式一：GitHub Actions 自动部署（推荐）

1. 将代码推送到 GitHub 仓库
2. GitHub Actions 会自动构建和部署

自动触发条件：
- 推送到 `main` 分支
- 创建 PR 并合并

### 方式二：手动部署到 GitHub Pages

```powershell
# 1. 构建
npm run docs:build

# 2. 初始化 git（首次）
git init
git add .
git commit -m "Deploy ComfyUI docs"

# 3. 推送到 GitHub（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main

# 4. 在 GitHub 仓库设置中启用 Pages
# Settings → Pages → Source: main branch, /docs folder
```

---

## 🏠 自定义域名

### 配置 CNAME

1. 在 `docs/.vitepress/dist/` 目录下创建 `CNAME` 文件
2. 内容填入你的域名：
```
docs.yourdomain.com
```

### DNS 配置

在你的域名服务商处添加：

| 类型 | 主机记录 | 值 |
|------|---------|-----|
| CNAME | docs | your-username.github.io |

---

## 🔧 脚本说明

| 脚本 | 说明 |
|------|------|
| `deploy.ps1` | Windows 一键部署脚本 |
| `.github/workflows/deploy.yml` | GitHub Actions 自动部署 |

---

## ❓ 常见问题

### Q: 构建失败

**A**: 确保 Node.js 版本 ≥ 18

```powershell
node -v
npm -v
```

### Q: 预览无法访问

**A**: 检查是否有其他程序占用 4173 端口

### Q: GitHub Pages 404

**A**: 确保仓库 Settings → Pages 配置正确，branch 指向包含构建结果的分支

---

## 📞 获取帮助

- [VitePress 部署文档](https://vitepress.dev/guide/deploy)
- [GitHub Pages 文档](https://docs.github.com/en/pages)