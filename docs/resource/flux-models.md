# Flux 模型资源

整理 Flux 系列模型的下载资源和使用指南。

## 下载平台

| 平台 | 说明 | 地址 |
|------|------|------|
| 🤗 Hugging Face | 官方模型 | [官网](https://huggingface.co/models) |
| 🏠 魔搭社区 | 国内镜像，速度快 | [ModelScope](https://www.modelscope.cn/home) |

> 💡 推荐使用[魔搭社区](https://www.modelscope.cn/home)下载，访问速度快，国内用户友好。

## Flux 模型概述

Flux 是由 Black Forest Labs 开发的最新图像生成模型系列。

## 模型版本

### Flux.1 Dev

| 属性 | 说明 |
|------|------|
| 类型 | 开源开发版 |
| 许可证 | Apache 2.0 |
| 尺寸 | ~23.8GB (fp16) |
| 特点 | 高质量，细节丰富 |

### Flux.1 Schnell

| 属性 | 说明 |
|------|------|
| 类型 | 快速版本 |
| 许可证 | Apache 2.0 |
| 尺寸 | ~23.8GB |
| 特点 | 快速生成，4-8步 |

### Flux.1 Pro

| 属性 | 说明 |
|------|------|
| 类型 | 闭源 API |
| 访问 | API 付费 |
| 特点 | 最佳质量 |

## 下载地址

### 官方版本

| 模型 | 下载 |
|------|------|
| Flux.1 Dev | [HuggingFace](https://huggingface.co/black-forest-labs/FLUX.1-dev) / [魔搭社区](https://www.modelscope.cn/home) |
| Flux.1 Schnell | [HuggingFace](https://huggingface.co/black-forest-labs/FLUX.1-schnell) / [魔搭社区](https://www.modelscope.cn/home) |

### 量化版本

| 模型 | 说明 | 下载 |
|------|------|------|
| FP8 (Dev) | 精度略有下降 | [HuggingFace](https://huggingface.co/Comfy-Org/flux1-dev/tree/main) |
| GGUF | 多种量化 | [HuggingFace](https://huggingface.co/cubiq/flux_fill) |
| NF4 | 4bit 量化 | [HuggingFace](https://huggingface.co/Kijai/flux-fp8) |

> 💡 量化版本可在[魔搭社区](https://www.modelscope.cn/home)搜索获取。

## ComfyUI 安装

### 1. 模型目录

```
ComfyUI/models/unet/     # Flux 核心模型
ComfyUI/models/vae/     # Flux VAE
```

### 2. 文件命名

推荐重命名为：
```
flux1_dev.safetensors
flux1_schnell.safetensors
flux_dev_vae.safetensors
```

### 3. ComfyUI 原生支持

ComfyUI 原生支持 Flux，可直接使用。

## Flux ControlNet

### 可用 ControlNet

| 模型 | 用途 | 下载 |
|------|------|------|
| Flux ControlNet Canny | 边缘 | [XLabs](https://huggingface.co/xtrec/Flux-ControlNet-Canny) |
| Flux ControlNet Depth | 深度 | [XLabs](https://huggingface.co/xtrec/Flux-ControlNet-Depth) |

## 使用建议

### Dev 版本

- 高质量输出
- 20-50 步采样
- 支持 ControlNet

### Schnell 版本

- 快速生成
- 4-8 步采样
- 不支持 ControlNet

## 显存要求

| 版本 | 最低 | 推荐 |
|------|-------|------|
| fp16 | 24GB | 32GB |
| fp8 | 16GB | 24GB |
| nf4 | 12GB | 16GB |

## 常见问题

### Q: 模型下载慢

**A**: 使用国内镜像或下载工具。

### Q: 显存不足

**A**: 使用 FP8 或 NF4 量化版本。

### Q: 如何选择版本

**A**: 追求质量用 Dev，快速预览用 Schnell。

## 下一步

- [Flux 文生图](../tutorial/advanced/flux-t2i) - 使用教程
- [Flux ControlNet](../tutorial/advanced/flux-controlnet) - ControlNet 使用