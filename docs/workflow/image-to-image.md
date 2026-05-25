# 图生图工作流

基于已有图像生成新图像。

## 工作流结构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ VAEEncode   │ →  │ KSampler    │ →  │ VAEDecode   │
│             │    │             │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                           ↑
                   ┌─────────────┐    ┌─────────────┐
                   │ CLIPTextEn  │    │ CheckpointL │
                   │ code        │    │ oader       │
                   └─────────────┘    └─────────────┘
```

## 节点说明

### LoadImage

加载输入图像：

```
支持格式: PNG, JPG, WEBP
建议尺寸: 512x512 或更大
```

### VAEEncode

编码到潜在空间：

```
输入: image
输出: latent
```

### KSampler

采样器（关键参数）：

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| denoise | 重绘幅度 | 0.5-0.8 |

### VAEDecode

解码输出：

```
输入: latent
输出: image
```

## 核心参数

### Denoise 强度

| 值 | 效果 |
|------|------|
| 0.1-0.3 | 轻微调整，保留原图 |
| 0.4-0.6 | 中等改变，风格迁移 |
| 0.7-0.9 | 大幅重绘，创意生成 |
| 1.0 | 完全重新生成 |

### 推荐配置

| 场景 | Denoise | 说明 |
|------|---------|------|
| 细节调整 | 0.2-0.4 | 微调细节 |
| 风格转换 | 0.5-0.7 | 改变风格 |
| 创意重绘 | 0.7-0.9 | 大幅改变 |

## 提示词技巧

### 保持原图元素

```
示例:
- "keep the same background"
- "similar composition"
- "maintain the overall structure"

用法: 在提示词中明确说明要保留的内容
```

### 描述目标风格

```
示例:
- "in the style of oil painting"
- "transform to watercolor"
- "like a vintage photograph"

用法: 描述你想要的最终效果
```

### 对比示例

```
原图: 写实人物照片
提示词: anime style illustration, vibrant colors

denoise=0.6 → 动漫风格的人物图
```

## 应用场景

### 风格转换

```
原图: 真实照片
提示词: oil painting style, impressionist, warm colors
denoise: 0.6
```

### 场景变换

```
原图: 白天街道
提示词: same street at night, neon lights, city glow
denoise: 0.5-0.7
```

### 人物变化

```
原图: 短发的女孩
提示词: same person with long hair, flowing in wind
denoise: 0.4-0.6
```

### 艺术增强

```
原图: 普通照片
提示词: masterpiece, best quality, professional photography, cinematic lighting
denoise: 0.3-0.5
```

## 配合 ControlNet

### 结构保持

使用 ControlNet 保持原图结构：

```
┌─────────────┐
│ LoadImage   │────→ ControlNet ──→ KSampler
│ (原图)      │
└─────────────┘
```

### 推荐 ControlNet

| 类型 | 用途 |
|------|------|
| canny | 保持边缘 |
| depth | 保持深度 |
| softedge | 柔和边缘 |

## 高级技巧

### 分层处理

```
1. 调整整体色调 (denoise=0.3)
2. 改变主要元素 (denoise=0.5)
3. 细化局部细节 (denoise=0.2)
```

### 多图融合

```
1. 加载多张参考图
2. 分别编码
3. 使用 Blend 节点
4. 融合结果
```

### 渐进式调整

```
1. 低 denoise 做基础
2. 逐步提高
3. 找到最佳平衡点
```

## 常见问题

### Q: 原图变形严重

**A**: 
- 降低 denoise
- 使用 ControlNet
- 调整提示词

### Q: 风格不明显

**A**:
- 提高 denoise
- 使用更明确的风格描述

### Q: 生成时间过长

**A**: 
- 减小图像尺寸
- 降低采样步数

## 下一步

- [局部重绘](./inpainting) - 区域修复
- [ControlNet](../tutorial/advanced/controlnet) - 精准控制