# 基础文生图工作流

最基础的文生图工作流。

## 工作流结构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CheckpointL │ →  │ CLIPTextEn  │ →  │ KSampler    │ →  │ VAEDecode   │
│ oader       │    │ code (+)    │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                         ↑                    ↑
                   ┌─────────────┐      ┌─────────────┐
                   │ CLIPTextEn  │      │ EmptyLatent │
                   │ code (-)    │      │ Image       │
                   └─────────────┘      └─────────────┘
```

## 节点说明

### 1. CheckpointLoader

加载模型：

```
模型路径: ComfyUI/models/checkpoints/
推荐模型: SD 1.5, SDXL
```

### 2. CLIP Text Encode (Positive)

编码正向提示词：

```
示例: a beautiful landscape, mountains, sunset, 8k
```

### 3. CLIP Text Encode (Negative)

编码负向提示词：

```
示例: blurry, low quality, distorted, ugly, bad anatomy
```

### 4. EmptyLatentImage

创建潜在空间：

| 参数 | 说明 |
|------|------|
| width | 图像宽度 |
| height | 图像高度 |
| batch_size | 批量数量 |

### 5. KSampler

采样器：

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| seed | 随机种子 | 随机 |
| steps | 采样步数 | 20-30 |
| cfg | CFG 强度 | 7-8 |
| sampler | 采样器 | DPM++ 2M |
| scheduler | 调度器 | normal |

### 6. VAEDecode

解码图像：

```
输入: latent 潜在空间
输出: image 图像
```

## 完整配置

### SD 1.5 配置

| 参数 | 值 |
|------|---|
| 模型 | v1-5-pruned-emaonly.safetensors |
| 尺寸 | 512x512 |
| Steps | 20-30 |
| CFG | 7-8 |
| Sampler | DPM++ 2M |
| 调度 | normal |

### SDXL 配置

| 参数 | 值 |
|------|---|
| 模型 | sd_xl_base_1.0.safetensors |
| 尺寸 | 1024x1024 |
| Steps | 30-50 |
| CFG | 7-10 |
| Sampler | DPM++ 2M Karras |

## 提示词示例

### 风景

```
正向: a beautiful landscape with mountains, sunset, golden hour lighting, cinematic, 8k resolution, highly detailed

负向: blurry, low quality, distorted, ugly, bad anatomy, watermark, text
```

### 人物

```
正向: 1girl, beautiful face, long flowing hair, blue eyes, elegant dress, standing in a flower garden, soft lighting, masterpiece, best quality

负向: blurry, low quality, distorted, ugly, bad anatomy, extra fingers, deformed hands
```

### 艺术风格

```
正向: oil painting of a sunset landscape, impressionist style, vibrant colors, thick brushstrokes, masterpiece

负向: blurry, low quality, cartoon, anime, photo
```

## 常见问题

### Q: 生成结果不好

**A**: 
- 优化提示词
- 增加步数
- 调整 CFG

### Q: 显存不足

**A**:
- 减小图像尺寸
- 使用较小模型
- 关闭其他程序

### Q: 如何提升质量

**A**:
- 使用更好的模型
- 增加采样步数
- 添加质量标签
- 使用负面提示词

## 下一步

- [图生图](./image-to-image) - 图像转换
- [局部重绘](./inpainting) - 修复细节