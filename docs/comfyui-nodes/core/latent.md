# Latent 操作节点

潜在空间相关的图像编解码节点。

## 节点列表

| 节点 | 功能 | 方向 |
|------|------|------|
| VAEDecode | 解码 | Latent → Image |
| VAEEncode | 编码 | Image → Latent |
| EmptyLatentImage | 创建空白 | 生成 Latent |
| VAEDecodeTiled | 分块解码 | 大图像处理 |
| VAEEncodeTiled | 分块编码 | 大图像处理 |

## VAEDecode

将潜在空间解码为图像。

### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| samples | LATENT | 潜在空间数据 |
| vae | VAE | VAE 模型（可选） |

### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| IMAGE | IMAGE | 解码后的图像 |

### 使用

```
KSampler → VAEDecode → SaveImage
                     → LoadImage（继续处理）
```

### 自动 VAE

CheckpointLoader 的 VAE 通常自动加载：
- 无需手动连接 VAE
- 除非需要使用不同 VAE

## VAEEncode

将图像编码为潜在空间。

### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| pixels | IMAGE | 输入图像 |
| vae | VAE | VAE 模型（可选） |

### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| LATENT | LATENT | 编码后的潜在空间 |

### 应用场景

| 场景 | 说明 |
|------|------|
| 图生图 | 编码输入图像 |
| 局部重绘 | 编码带遮罩的图像 |
| 扩图 | 编码原图 + 扩展区域 |

### 基本用法

```
LoadImage → VAEEncode → KSampler → VAEDecode → SaveImage
```

## EmptyLatentImage

创建空白潜在空间，用于文生图。

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| width | INT | 图像宽度 |
| height | INT | 图像高度 |
| batch_size | INT | 批量数量 |

### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| LATENT | LATENT | 空白潜在空间 |

### 常用尺寸

| 尺寸 | 用途 |
|------|------|
| 512x512 | 标准 |
| 768x768 | SDXL 推荐 |
| 1024x1024 | 高质量 |

### 工作流

```
EmptyLatentImage(512, 512) → KSampler → VAEDecode → SaveImage
```

## VAEDecodeTiled

分块解码，用于处理大图像。

### 用途

```
- 显存不足时处理大图像
- 分块处理避免 OOM
- 保持图像质量
```

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| tile_size | INT | 块大小（默认 512） |
| overlap | INT | 重叠区域 |

### 原理

```
1. 将 Latent 分成小块
2. 逐块解码
3. 拼接结果

重叠区域用于平滑过渡
```

## VAEEncodeTiled

分块编码，用于大图像输入。

### 使用场景

```
- 输入超大图像
- 分块编码节省显存
- 后续分块处理
```

## 图像 ↔ Latent 转换

### 尺寸关系

```
Latent 尺寸 = 图像尺寸 / 8

512x512 图像 → 64x64 Latent
1024x1024 图像 → 128x128 Latent
```

### 数据流

```
图像 → VAEEncode → Latent → KSampler → Latent → VAEDecode → 图像
```

## 常见问题

### Q: 图像模糊

**A**:
- 检查 VAE 是否匹配模型
- 使用正确的 VAE 文件

### Q: 显存不足

**A**:
- 使用 Tiled 版本
- 减小图像尺寸
- 分块处理

### Q: 编码后颜色异常

**A**:
- 使用配套的 VAE
- 尝试其他 VAE 版本

## 下一步

- [KSampler](./sampler) - 采样器
- [LoadImage](./image-io) - 图像加载