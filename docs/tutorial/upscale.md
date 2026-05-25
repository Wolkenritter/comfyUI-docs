# 图像放大教程

了解在 ComfyUI 中提升图像分辨率的方法。

## 放大方法

ComfyUI 支持三种主要的图像放大方法。

## 方法一：传统插值放大

### 节点

使用 Image Scale 节点：

```
Load Image → Image Scale → Save Image
```

### 缩放模式

| 模式 | 特点 |
|------|------|
| nearest | 最快，质量一般 |
| bilinear | 平衡 |
| bicubic | 较好质量 |
| lanczos | 最高质量 |

### 缺点

缺乏细节，可能模糊。

## 方法二：SD 二次放大

### 原理

先放大，再使用 SD 模型重新绘制细节。

### 工作流

```
Load Image
      ↓ IMAGE
Image Scale (2x)
      ↓ IMAGE
VAE Encode
      ↓ LATENT
KSampler (低 denoise 0.3-0.5)
      ↓ LATENT
VAE Decode
      ↓ IMAGE
Save Image
```

### 优点

保持风格一致，增加细节。

## 方法三：专用放大模型

### 推荐模型

| 模型 | 倍数 | 用途 |
|------|------|------|
| RealESRGAN_x4plus | 4x | 通用 |
| 4x-UltraSharp | 4x | 高质量 |
| 4x_AnimeSharpen | 4x | 动漫 |
| SwinIR_4x | 4x | 通用 |

### 安装

将模型放入 `models/upscale_models/` 目录。

## Ultimate SD Upscale

### 功能

智能放大，自动处理接缝。

### 安装

通过 Manager 安装：`ComfyUI Ultimate SD Upscale`

### 参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| upscale_by | 放大倍数 | 2.0 |
| tile_size | 分块大小 | 512 |
| tile_padding | 边缘重叠 | 64 |
| steps | 采样步数 | 20-30 |
| cfg | CFG | 7-8 |
| denoise | 去噪强度 | 0.3-0.5 |

### 工作流

```
Load Image → Ultimate SD Upscale → Save Image
                    ↓
              选择放大模型
```

## 推荐设置

### 2倍放大

```javascript
upscale_by: 2.0
tile_size: 512
steps: 25
denoise: 0.4
```

### 4倍放大

```javascript
upscale_by: 2.0  // 分两次 2x2x
tile_size: 512
steps: 30
denoise: 0.35
```

## 放大流程建议

### 1. 生成阶段

使用较高分辨率直接生成：
- 512x512 → 1024x1024

### 2. 放大阶段

使用 Ultimate SD Upscale：
- 1024x1024 → 2048x2048

### 3. 最终处理

如需更高分辨率，可重复步骤2。

## 显存优化

### 使用分块处理

大图像使用较小的 tile_size：
- 4GB VRAM: tile_size = 384
- 8GB VRAM: tile_size = 512
- 12GB+ VRAM: tile_size = 768

### 半精度

启用 FP16 减少显存占用。

## 常见问题

### Q: 放大后模糊

**A**: 使用专用放大模型，增加 denoise。

### Q: 出现网格

**A**: 增加 tile_padding，调整接缝修复设置。

### Q: 显存不足

**A**: 减小 tile_size，分步放大。

## 下一步

- [LoRA 使用](./lora) - 使用风格模型
- [ControlNet 使用](../advanced/controlnet) - 精准控制生成