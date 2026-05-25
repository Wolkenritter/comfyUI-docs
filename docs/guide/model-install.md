# 模型安装指南

ComfyUI 需要各种模型来生成图像。本指南介绍如何下载和安装各种类型的模型。

## 下载平台

| 平台 | 说明 | 地址 |
|------|------|------|
| 🤗 Hugging Face | 官方模型 | [官网](https://huggingface.co/models) |
| 🏠 魔搭社区 | 国内镜像，速度快 | [ModelScope](https://www.modelscope.cn/home) |
| 🎨 Civitai | 社区模型 | [Civitai](https://civitai.com) |

> 💡 推荐使用[魔搭社区](https://www.modelscope.cn/home)下载，访问速度快，国内用户友好。

## 模型目录结构

```
ComfyUI/
└── models/
    ├── checkpoints/      # 基础检查点模型
    ├── vae/             # VAE 模型
    ├── loras/           # LoRA 模型
    ├── controlnet/      # ControlNet 模型
    ├── embeddings/       # Textual Inversion / Embedding
    ├── upscale_models/  # 放大模型
    └── unet/            # UNet 模型
```

## Checkpoint 模型（基础模型）

### 下载地址

| 平台 | 说明 |
|------|------|
| [🏠 魔搭社区](https://www.modelscope.cn/home) | 国内高速下载，推荐 |
| [Civitai](https://civitai.com/) | 最大的 SD 模型平台 |
| [Hugging Face](https://huggingface.co/models?other=stable-diffusion) | 官方和社区模型 |
| [Stability AI](https://huggingface.co/stabilityai) | 官方模型 |

### 推荐模型

| 模型 | 大小 | 适用场景 |
|------|------|----------|
| SD 1.5 | ~4GB | 通用 |
| SD 2.1 | ~5GB | 通用 |
| SDXL | ~6.5GB | 高质量 |

### 安装

将模型文件放入 `models/checkpoints/` 目录。

## VAE 模型

### 用途

VAE 用于图像编码和解码，影响色彩和细节。

### 下载地址

- [🏠 魔搭社区](https://www.modelscope.cn/home) - 国内高速，推荐
- [Stability AI VAE](https://huggingface.co/stabilityai/sd-vae)
- Civitai 上的 VAE 合集

### 安装

放入 `models/vae/` 目录。

### 内置 VAE

部分 checkpoint 模型内置 VAE，可在设置中启用。

## LoRA 模型

### 下载地址

| 平台 | 说明 |
|------|------|
| [🏠 魔搭社区](https://www.modelscope.cn/home) | 国内高速，推荐 |
| [Civitai](https://civitai.com/) | 主要 LoRA 资源 |
| [Hugging Face](https://huggingface.co/sdromised/Lora) | 部分 LoRA |

### 安装

放入 `models/loras/` 目录。

### 使用方法

```bash
# 在节点中使用
# 双击画布搜索 "Load LoRA"
# 选择 LoRA 文件，设置强度
```

## ControlNet 模型

### 模型列表

| 模型 | 用途 | 预训练 |
|------|------|--------|
| canny | 边缘检测 | v1.1 / SDXL |
| depth | 深度图 | v1.1 / SDXL |
| openpose | 姿态 | v1.1 |
| normal | 法线图 | v1.1 |
| scribble | 涂鸦 | v1.1 |

### 下载地址

- [🏠 魔搭社区](https://www.modelscope.cn/home) - 国内高速，推荐
- [lllyasviel ControlNet](https://huggingface.co/lllyasviel/ControlNet)
- [SDXL ControlNet](https://huggingface.co/diffusers/controlnet)
- Civitai

### 安装

放入 `models/controlnet/` 目录。

## Embedding（文本嵌入）

### 用途

用于负面提示词，快速避免不需要的元素。

### 常用 Embedding

| 名称 | 效果 |
|------|------|
| easynegative | 通用负面 |
| bad-hands-5 | 修复手部 |
| ng_deepnegative | 强力负面 |

### 安装

放入 `models/embeddings/` 目录。

### 使用

在提示词中使用：
```
<embedding:easynegative>
```

## 放大模型

### 推荐模型

| 模型 | 倍数 | 用途 |
|------|------|------|
| RealESRGAN_x4plus | 4x | 通用 |
| 4x-UltraSharp | 4x | 高质量 |
| 4x_AnimeSharpen | 4x | 动漫 |

### 安装

放入 `models/upscale_models/` 目录。

## 共用其他 WebUI 的模型

如果已经安装了 Stable Diffusion WebUI，可以共用模型：

### 配置 extra_model_paths.yaml

```yaml
# extra_model_paths.yaml
base_path: D:/AI/stable-diffusion-webui
```

重启 ComfyUI 即可自动加载。

## 常见问题

### Q: 模型不显示

**A**: 重启 ComfyUI，或检查文件格式是否正确。

### Q: 显存不足

**A**: 使用量化模型（如 FP16），或减小分辨率。

### Q: 下载慢

**A**: 使用[魔搭社区](https://www.modelscope.cn/home)下载，访问速度快。

## 下一步

- [LoRA 使用教程](../tutorial/lora) - 深入了解 LoRA
- [ControlNet 使用](../tutorial/advanced/controlnet) - ControlNet 教程