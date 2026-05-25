# Flux 图生图教程

学习使用 Flux 模型进行图生图。

## 图生图概念

图生图（Image to Image）是在已有图像基础上生成新图像，可以保持原图的结构或风格。

## 安装模型

### 必要模型

```
ComfyUI/models/unet/
flux1-dev.safetensors    # Flux Dev

ComfyUI/models/vae/
flux_vae.safetensors     # Flux VAE
```

### 可选模型

| 模型 | 说明 |
|------|------|
| CLIP | 文本编码 |
| ControlNet | 控制生成 |

## 基本工作流

### 工作流结构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │  VAEEncode  │ →  │ KSampler   │
│             │    │             │    │ (latent)   │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
┌─────────────┐    ┌─────────────┐    ┌──────┴──────┐
│  LoadCheckp │ →  │  CLIPTextEn │    │ VAEDecode  │
│  ooint      │    │  code       │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 节点说明

| 节点 | 说明 |
|------|------|
| LoadImage | 加载输入图像 |
| VAEEncode | 编码到潜在空间 |
| CheckpointLoader | 加载模型 |
| CLIP Text Encode | 编码提示词 |
| KSampler | 采样生成 |
| VAEDecode | 解码输出 |

## 重要参数

### 重绘幅度 (Denoise)

| 值 | 效果 |
|------|------|
| 0.1-0.3 | 轻微改变，保留原图 |
| 0.4-0.6 | 中等改变 |
| 0.7-0.9 | 大幅改变 |
| 1.0 | 完全重新生成 |

### 推荐设置

| 场景 | Denoise | Steps |
|------|---------|-------|
| 风格转换 | 0.4-0.6 | 20-30 |
| 细节调整 | 0.2-0.4 | 20-30 |
| 创意重绘 | 0.6-0.8 | 30-50 |

## 应用场景

### 风格转换

把照片转换成艺术风格：

```
输入: 人物照片
提示词: oil painting style, portrait, classical art
Denoise: 0.5-0.7
```

### 色彩调整

调整图像色调和氛围：

```
输入: 普通照片
提示词: warm golden hour lighting, sunset colors, cinematic
Denoise: 0.3-0.5
```

### 场景重绘

改变图像中的元素：

```
输入: 室内场景
提示词: transform to outdoor garden, flowers and trees
Denoise: 0.6-0.8
```

## 提示词技巧

### 结构保持

使用"in the style of"、"like"等：

```
a cat in the style of Studio Ghibli animation
a portrait like a vintage photograph
```

### 元素替换

明确描述要改变的元素：

```
原图: a person with short hair
提示词: the same person with long hair, flowing
Denoise: 0.5
```

### 风格迁移

```
输入: 写实照片
提示词: convert to watercolor painting style
```

## 高级用法

### 结合 ControlNet

使用 ControlNet 控制结构：

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ ControlNet │
│ (参考图)    │    │ Preprocessor│
└─────────────┘    └──────┬──────┘
                          ↓
┌─────────────┐    ┌─────────────┐
│ KSampler    │ ←  │ ApplyContro │
│             │    │ lNet        │
└─────────────┘    └─────────────┘
```

### 多图融合

使用多个输入图像：

```
1. 加载多张参考图
2. 分别编码到潜在空间
3. 使用 Blend 节点混合
4. 生成融合结果
```

### 局部重绘

配合遮罩进行局部修改：

```
1. 使用 Mask 节点创建遮罩
2. 只重绘指定区域
3. 保持其他部分不变
```

## 参数调整

### CFG 强度

| 场景 | CFG |
|------|-----|
| 忠实原图 | 2-4 |
| 平衡 | 4-6 |
| 创意发挥 | 6-8 |

### 采样器

| 采样器 | 特点 |
|--------|------|
| DPM++ 2M | 平衡 |
| DPM++ 2M Karras | 更平滑 |
| Euler | 快速 |
| Euler a | 细节丰富 |

## 常见问题

### Q: 原图变形严重

**A**: 降低 Denoise 到 0.3-0.5，或使用 ControlNet 保持结构。

### Q: 风格不明显

**A**: 提高 Denoise，或使用更明确的风格描述词。

### Q: 生成时间过长

**A**: 使用 Schnell 版本，或减少 Steps。

## 下一步

- [Flux ControlNet](../tutorial/advanced/flux-controlnet) - 使用 ControlNet
- [局部重绘](./inpainting) - 局部修复教程