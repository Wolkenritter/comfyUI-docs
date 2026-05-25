# 放大模型文档

图像超分辨率（Upscale）模型资源。

## 放大模型类型

### ESRGAN 系列

| 模型 | 放大倍数 | 说明 |
|------|----------|------|
| RealESRGAN_x2 | 2x | 2倍放大 |
| RealESRGAN_x4 | 4x | 4倍放大 |
| RealESRGAN_x4plus | 4x | 增强版 |
| RealESRGAN_x4plus_anime | 4x | 动漫专用 |

### SwinIR 系列

| 模型 | 放大倍数 | 说明 |
|------|----------|------|
| SwinIR | 4x | 通用 |
| SwinIR-large | 4x | 高质量 |
| Swin2SR | 4x | 新版本 |

### Ultimate SD Upscale

| 模型 | 说明 |
|------|------|
| SD Upscale | 内置放大节点 |
| Ultimate SD Upscale | 增强版 |

## 安装位置

```
ComfyUI/models/upscale_models/
├── RealESRGAN_x2.pth
├── RealESRGAN_x4plus.pth
├── 4x-UltraSharp.pth
└── SwinIR_4x.pth
```

## 推荐模型

### 通用场景

| 模型 | 推荐度 | 适用 |
|------|--------|------|
| 4x-UltraSharp | ⭐⭐⭐⭐ | 通用，高质量 |
| RealESRGAN_x4plus | ⭐⭐⭐ | 平衡 |
| RealESRGAN_x4plus_anime | ⭐⭐⭐ | 动漫风格 |

### 动漫场景

| 模型 | 推荐度 | 适用 |
|------|--------|------|
| RealESRGAN_x4plus_anime | ⭐⭐⭐⭐ | 动漫专用 |
| 4x-Nickel SRS | ⭐⭐⭐ | 动漫线条 |

### 写实场景

| 模型 | 推荐度 | 适用 |
|------|--------|------|
| 4x-UltraSharp | ⭐⭐⭐⭐ | 写实通用 |
| 4x-Lolibook | ⭐⭐⭐ | 插画 |

## 下载资源

### 主要来源

| 来源 | 说明 |
|------|------|
| [🤗 Hugging Face](https://huggingface.co/models) | 官方模型 |
| [🏠 魔搭社区](https://www.modelscope.cn/home) | 国内镜像，速度快 |
| [🎨 Civitai](https://civitai.com) | 社区模型 |
| [Upscale Wiki](https://upscale.wiki) | 模型汇总 |

> 💡 推荐使用[魔搭社区](https://www.modelscope.cn/home)下载，访问速度快，国内用户友好。

### 模型链接

| 模型 | 下载 |
|------|------|
| RealESRGAN_x4plus | [Google Drive](https://drive.google.com/file/d/1qWCc3FbE2N7YL5L5Ai_U-gBJDv6gCr1K/view) / [魔搭](https://www.modelscope.cn/home) |
| 4x-UltraSharp | [OpenModelDB](https://openmodeldb.info/) / [魔搭](https://www.modelscope.cn/home) |
| SwinIR | [Hugging Face](https://huggingface.co/nicehero/Real-ESRGAN-x4plus) / [魔搭](https://www.modelscope.cn/home) |

## 使用方法

### 基本工作流

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ UpscaleMode │ →  │ SaveImage   │
│             │    │ l           │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 节点说明

| 节点 | 说明 |
|------|------|
| ImageUpscaleWithModel | 使用放大模型 |
| UltimateSDUpscale | 增强版放大 |
| 4xUltraSharp | 专用节点 |

### 参数设置

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| scale | 放大倍数 | 2-4 |
| tile_size | 分块大小 | 512-768 |
| tile_padding | 块间距 | 64-128 |

## 放大策略

### 等比放大

```
原始: 512x512
目标: 1024x1024 (2x)
比例: 1:1

适合: 头像、方图
```

### 比例保持

```
原始: 512x768
目标: 1024x1536 (2x)
比例: 2:3

保持原始比例
```

### 目标尺寸

```
原始: 512x512
目标: 1024x1024
方法: 指定目标尺寸

灵活控制最终大小
```

## 进阶用法

### 分块放大

```
大图像处理:
1. 分块 (512x512)
2. 逐块放大
3. 拼接
4. 边界融合

避免显存问题
```

### 多次放大

```
第一级: 512 → 1024
第二级: 1024 → 2048

每次 2x，多次累积
效果更好
```

### 结合重绘

```
放大 + 局部重绘:
1. 放大基础版本
2. 局部重绘细节
3. 最终输出

平衡质量与效率
```

## 模型选择建议

| 场景 | 推荐模型 |
|------|----------|
| 通用 | 4x-UltraSharp |
| 动漫 | RealESRGAN_x4plus_anime |
| 写实人像 | 4x-UltraSharp |
| 风景 | RealESRGAN_x4plus |
| 文字 | 4x-Lolibook |

## 常见问题

### Q: 放大后有接缝

**A**:
- 增加 tile_padding
- 使用无缝模式
- 调整融合参数

### Q: 显存不足

**A**:
- 减小 tile_size
- 减少放大倍数
- 分步放大

### Q: 图像变糊

**A**:
- 使用更好的模型
- 增加 tile_size
- 尝试不同模型

## 下一步

- [放大教程](../tutorial/upscale) - 使用教程
- [工作流](../workflow/) - 放大工作流