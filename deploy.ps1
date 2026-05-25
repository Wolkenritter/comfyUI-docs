# ComfyUI 文档部署脚本
# 一键构建并准备部署

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   ComfyUI 文档部署脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js
Write-Host "[1/4] 检查环境..." -ForegroundColor Yellow
$nodeVersion = node -v 2>$null
if (-not $nodeVersion) {
    Write-Host "❌ 错误: 未安装 Node.js" -ForegroundColor Red
    Write-Host "请从 https://nodejs.org 下载安装" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Node.js 版本: $nodeVersion" -ForegroundColor Green

# 检查 npm
$npmVersion = npm -v 2>$null
Write-Host "✓ npm 版本: $npmVersion" -ForegroundColor Green

# 安装依赖
Write-Host ""
Write-Host "[2/4] 安装依赖..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ 依赖安装失败" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ 依赖安装完成" -ForegroundColor Green
} else {
    Write-Host "✓ 依赖已存在，跳过安装" -ForegroundColor Green
}

# 构建文档
Write-Host ""
Write-Host "[3/4] 构建文档..." -ForegroundColor Yellow
npm run docs:build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败" -ForegroundColor Red
    exit 1
}
Write-Host "✓ 文档构建完成" -ForegroundColor Green

# 完成
Write-Host ""
Write-Host "[4/4] 部署准备完成!" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   构建输出目录" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "docs/.vitepress/dist/" -ForegroundColor White
Write-Host ""
Write-Host "下一步操作:" -ForegroundColor Yellow
Write-Host "1. 将 dist 目录内容推送到 GitHub" -ForegroundColor White
Write-Host "2. 在 GitHub 仓库 Settings → Pages 启用" -ForegroundColor White
Write-Host "3. 如需自定义域名，添加 CNAME 文件" -ForegroundColor White
Write-Host ""
Write-Host "查看构建结果: npm run docs:preview" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan