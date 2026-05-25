# 扩图教程

学习如何在 ComfyUI 中扩展图像边界（Outpainting）。

## 什么是扩图

扩图允许你扩展图像的边界，添加原图之外的内容。

## 基础方法

### 1. ImagePadForOutpaint 节点

将图像填充到新尺寸：

```
Load Image
      ↓ IMAGE
ImagePadForOutpaint
      ↓ IMAGE
VAE Encode
      ↓ LATENT
KSampler (低 denoise)
      ↓ LATENT
VAE Decode
      ↓ IMAGE
Save Image
```

### 2. 参数设置

| 参数 | 说明 |
|------|------|
| left | 左侧扩展像素 |
| right | 右侧扩展像素 |
| top | 顶部扩展像素 |
| bottom | 底部扩展像素 |
| feather | 羽化半径 |

## 工作流程

### 1. 扩展画布

使用 ImagePadForOutpaint 扩展图像边界：

```javascript
// 示例：向上扩展 256 像素
left: 0
right: 0
top: 256
bottom: 0
feather: 64
```

### 2. 设置采样

使用较低的 denoise 值：

| denoise | 效果 |
|---------|------|
| 0.3-0.4 | 轻微扩展 |
| 0.5-0.7 | 中等扩展 |

### 3. 提示词

描述你希望在扩展区域出现的内容：

```
# 示例：扩展天空
sky, clouds, dramatic sunset, golden hour
```

## 分步扩图

对于大幅扩展，建议分步进行：

### Step 1: 小幅扩展

```
原图 → 扩展 256px → 重绘 → 结果 1
```

### Step 2: 继续扩展

```
结果 1 → 扩展 256px → 重绘 → 结果 2
```

## 与局部重绘结合

### Workflow

```
原图
      ↓
ImagePadForOutpaint (扩展画布)
      ↓ IMAGE
      ↓
VAE Encode → 混合
      ↓ LATENT
KSampler
      ↓
VAE Decode
      ↓
ImageCrop (裁剪到原始区域)
      ↓
合成最终图像
```

## 使用场景

### 场景一：添加背景

扩展人物照片的背景。

### 场景二：改变构图

将横屏转换为竖屏。

### 场景三：全身照

将头像扩展为全身照。

## 技巧

### 1. 羽化设置

较大的羽化值可以产生更自然的过渡：

```
feather: 64-128
```

### 2. 分辨率匹配

确保扩展后的分辨率是合理的（如 512/768/1024 的倍数）。

### 3. 内容一致性

使用参考图像或 ControlNet 帮助保持风格一致。

## 常见问题

### Q: 扩展区域不自然

**A**: 
- 增加羽化值
- 降低 denoise
- 使用 ControlNet 保持风格

### Q: 接缝明显

**A**: 使用更大的羽化值，或多次渐进式扩展。

### Q: 内容跑偏

**A**: 细化提示词，使用参考图像。

## 下一步

- [图像放大](./upscale) - 提升图像分辨率
- [局部重绘](./inpainting) - 修复细节问题