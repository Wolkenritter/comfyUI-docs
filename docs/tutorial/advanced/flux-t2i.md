# Flux 文生图教程

学习使用 Flux 模型进行文生图。

## Flux 模型介绍

Flux 是 Black Forest Labs 开发的最新图像生成模型，具有出色的 prompt following 能力。

### 模型版本

| 版本 | 特点 | 适用场景 |
|------|------|----------|
| Flux.1 Dev | 开源，高质量 | 追求质量 |
| Flux.1 Schnell | 快速，4-8步 | 快速预览 |
| Flux.1 Pro | 闭源，API | 最佳效果 |

## 安装 Flux 模型

### 1. 下载模型

从 Hugging Face 下载：

```
模型目录: ComfyUI/models/unet/
flux1-dev.safetensors    # Dev 版本 (~23GB)
flux1-schnell.safetensors # Schnell 版本
```

### 2. 下载 VAE

Flux 需要单独的 VAE：

```
模型目录: ComfyUI/models/vae/
flux_vae.safetensors     # Flux VAE
```

### 3. 重启 ComfyUI

加载新模型。

## 基本工作流

### 工作流结构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  LoadCheckp │ →  │  CLIPTextEn │ →  │ KSampler   │ →  │  VAEDecode  │
│  ooint     │    │  code (x2)  │    │            │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     CLIPTextEncode  CLIPTextEncode
```

### 节点说明

| 节点 | 说明 |
|------|------|
| CheckpointLoader | 加载 Flux 模型 |
| CLIP Text Encode (positive) | 正向提示词 |
| CLIP Text Encode (negative) | 负向提示词 |
| KSampler | 采样器 |
| VAEDecode | 解码输出图像 |

## 采样设置

### Dev 版本推荐

| 参数 | 推荐值 | 说明 |
|------|--------|------|
| Steps | 20-50 | 更多步数更高质量 |
| CFG | 3.5-7 | Flux 对 CFG 不敏感 |
| DPM++ 2M | 推荐 | 采样器 |
| Karras | 可选 | 更平滑 |

### Schnell 版本推荐

| 参数 | 推荐值 |
|------|--------|
| Steps | 4-8 |
| CFG | 1.0 |
| DPM++ 2M |

## 提示词技巧

### 提示词格式

Flux 对提示词格式要求不严格，但仍建议：

```
# 清晰描述
a beautiful sunset over the ocean, golden hour lighting, cinematic

# 避免过长
1 girl, beautiful face, long hair, blue eyes, smile, 8k, detailed
```

### 质量标签

| 标签 | 效果 |
|------|------|
| 8k, high detail | 增加细节 |
| masterpiece | 提升质量 |
| best quality | 高质量 |
| photorealistic | 写实风格 |

### 风格控制

```
# 艺术风格
oil painting style, impressionist
# 摄影风格
shot on Canon 5D, film grain
# 插画风格
digital art, flat illustration
```

## 负面提示词

Flux 对负面提示词需求较低，但可以添加：

```
# 常用负面
blurry, low quality, distorted, ugly
```

## 图像尺寸

| 尺寸 | 适用 |
|------|------|
| 512x512 | 快速预览 |
| 768x768 | 平衡 |
| 1024x1024 | 高质量 |
| 自定义 | 根据需求 |

## 多尺寸生成

### 横向

```
a landscape photo, wide view, mountains and lake
分辨率: 1024x576
```

### 竖向

```
a portrait photo, upper body, fashion model
分辨率: 576x1024
```

## 进阶技巧

### LoRA 支持

Flux 支持 LoRA：

```
加载 LoRA 时：
1. 使用 Apply Flux LoRA 节点
2. 设置 LoRA 强度 0.5-0.8
3. 调整 CFG 强度
```

### ControlNet

Flux 支持 ControlNet：

```
1. 加载 ControlNet
2. 预处理图像
3. 调整控制权重 0.5-0.8
```

## 常见问题

### Q: 生成很慢

**A**: 
- 使用 Schnell 版本
- 减少步数
- 使用量化模型（FP8）

### Q: 效果不佳

**A**:
- 检查提示词是否清晰
- 尝试不同的 CFG 值
- 增加步数

### Q: 显存不足

**A**:
- 使用 FP8 量化
- 减小图像尺寸
- 关闭其他应用

## 下一步

- [Flux 图生图](./flux-i2i) - 图生图教程
- [Flux ControlNet](../tutorial/advanced/flux-controlnet) - ControlNet 使用