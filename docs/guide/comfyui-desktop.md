# ComfyUI Desktop 安装指南

ComfyUI 官方推出了桌面版本，支持 Windows 和 Mac，一键安装，简单快捷。

## 系统要求

### Windows

| 要求 | 最低配置 | 推荐配置 |
|------|----------|----------|
| 操作系统 | Windows 10 | Windows 11 |
| 显卡 | NVIDIA 6GB+ VRAM | NVIDIA 8GB+ VRAM |
| 内存 | 8GB | 16GB+ |
| 硬盘 | 10GB 可用空间 | 20GB+ SSD |

### Mac

| 要求 | 最低配置 | 推荐配置 |
|------|----------|----------|
| 芯片 | M1 | M2/M3 |
| 内存 | 8GB | 16GB+ |
| 硬盘 | 10GB 可用空间 | 20GB+ SSD |

## 下载地址

访问 [ComfyUI 官网](https://www.comfy.org/zh-CN) 下载最新版本。

## 安装步骤

### Windows 安装

1. 下载 `.exe` 安装包
2. 双击运行安装包
3. 选择安装路径
4. 等待安装完成
5. 启动 ComfyUI Desktop

### Mac 安装

1. 下载 `.dmg` 安装包
2. 双击打开 `.dmg` 文件
3. 拖拽 ComfyUI 到 Applications 文件夹
4. 启动 ComfyUI Desktop

## 主要功能

### 1. 一键安装 Python 环境

内置推荐的 Python 环境，无需手动配置。

### 2. 自带 ComfyUI Manager

直接内置 Manager，可从 ComfyUI 注册表安装节点。

### 3. 自动更新

支持自动更新，保持在稳定版本。

### 4. 模型导入

安装时可选择现有目录，自动导入模型。

### 5. 日志集成

内置日志查看器，方便调试。

### 6. 跨平台支持

支持 Windows、macOS、Linux。

## 与传统版本的区别

| 特性 | ComfyUI Desktop | 传统版本 |
|------|----------------|----------|
| 安装 | 一键安装 | 需要手动配置 |
| Python | 内置 | 需自行安装 |
| Manager | 内置 | 需单独安装 |
| 更新 | 自动更新 | 手动更新 |

## 常见问题

### Q: 安装时报错 "安全警告"

**A**: ComfyUI Desktop 已进行代码签名，可放心运行。

### Q: Mac 版本无法启动

**A**: 确保在"系统偏好设置 → 安全性与隐私"中允许运行。

### Q: 模型目录在哪里

**A**: 默认在用户目录 `~/ComfyUI/` 或安装目录下的 `models/`。

## 下一步

- [模型安装](./model-install) - 了解如何安装各种模型
- [基础教程](../tutorial/how-to-run) - 学习启动和基本操作