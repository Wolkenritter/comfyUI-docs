# 安装不同类型模型

了解如何在 ComfyUI 中安装和管理各种类型的模型。

## 模型类型总览

| 类型 | 用途 | 目录 |
|------|------|------|
| Checkpoint | 基础模型 | models/checkpoints |
| VAE | 编码器/解码器 | models/vae |
| LoRA | 风格/概念 | models/loras |
| ControlNet | 条件控制 | models/controlnet |
| Embedding | 文本嵌入 | models/embeddings |
| Upscale | 图像放大 | models/upscale_models |

## Checkpoint（基础模型）

### 下载地址

- [Civitai](https://civitai.com/) - 最大 SD 模型平台
- [Hugging Face](https://huggingface.co/models?other=stable-diffusion)
- [Stability AI](https://huggingface.co/stabilityai)

### 推荐起始模型

| 模型 | 大小 | 说明 |
|------|------|------|
| SD 1.5 | ~4GB | 生态最丰富 |
| SD 2.1 768 | ~5GB | 更清晰 |
| SDXL | ~6.5GB | 高质量 |

## VAE

### 用途

影响图像的色彩和细节。

### 推荐 VAE

| VAE | 说明 |
|------|------|
| vae7400 | 通用 |
| Anime | 动漫风格 |
| fp16-fix | 修复某些模型 |

## LoRA

### 下载地址

- [Civitai](https://civitai.com/?tags=25) - LoRA 专区
- [Hugging Face](https://huggingface.co/sdromised/Lora)

### 安装

放入 `models/loras/` 目录。

## ControlNet

### 模型列表

| 模型 | 用途 | 训练版本 |
|------|------|----------|
| canny | 边缘检测 | SD1.1 / SDXL |
| depth | 深度图 | SD1.1 / SDXL |
| openpose | 姿态 | SD1.1 |
| normal | 法线 | SD1.1 |

### 下载

- [lllyasviel ControlNet Collection](https://huggingface.co/lllyasviel/ControlNet)
- [SDXL ControlNet](https://huggingface.co/diffusers/controlnet)

## Embedding

### 用途

用于负向提示词，快速避免问题。

### 推荐 Embedding

| 名称 | 效果 |
|------|------|
| easynegative | 通用负面 |
| bad-hands-5 | 修复手部 |
| ng_deepnegative_v1_75t | 强力负面 |

## 放大模型

### 推荐

| 模型 | 倍数 | 用途 |
|------|------|------|
| RealESRGAN_x4plus | 4x | 通用 |
| 4x-UltraSharp | 4x | 高质量 |
| 4x_AnimeSharpen | 4x | 动漫 |

## 模型格式

| 格式 | 扩展名 | 推荐度 |
|------|--------|--------|
| SafeTensors | .safetensors | ⭐ 推荐 |
| PyTorch | .ckpt, .pt | 通用 |

## 常见问题

### Q: 模型放在哪不显示

**A**: 确认在正确目录，重启 ComfyUI。

### Q: 下载太慢

**A**: 使用国内镜像或下载工具。

### Q: 显存不足

**A**: 使用 FP16 量化版本，或减小分辨率。

## 下一步

- [LoRA 使用](./lora) - 深入了解 LoRA
- [ControlNet 使用](../advanced/controlnet) - ControlNet 教程