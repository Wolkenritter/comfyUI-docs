# 高清放大

使用超分辨率技术提升图像质量和分辨率。

## 工作流说明

图像放大（Upscaling）用于将低分辨率或质量不足的图像提升到更高分辨率，同时增强细节。

### 放大方法对比

| 方法 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| 传统插值 | 速度快 | 细节少 | 快速预览 |
| ESRGAN | 细节好 | 可能过锐 | 照片/写实 |
| Ultimate SD Upscale | 自然的细节 | 较慢 | 精细作品 |
| SOTA 模型 | 极佳质量 | 显存高 | 专业应用 |

## 常用放大节点

### 1. Image Scale

简单缩放，适合快速预览。

```
Image → Image Scale → Image
        (nearest/bilinear/bicubic)
```

### 2. Upscale Image (Model)

使用 AI 模型放大。

| 模型类型 | 说明 |
|----------|------|
| RealESRGAN | 通用图像放大 |
| R-ESRGAN | 通用（更锐利） |
| Sponge | 动漫风格 |
| 4x-UltraSharp | 高质量照片 |

### 3. Ultimate SD Upscale

最常用的智能放大节点。

#### 优点

- 自动分块处理，避免显存溢出
- 保持边缘自然
- 可调整细节强度

#### 参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| upscale_by | 放大倍数 | 2.0 |
| seed | 种子 | - |
| steps | 采样步数 | 20-30 |
| cfg | CFG 强度 | 8 |
| sampler_name | 采样器 | dpmpp_2m |
| tile_size | 分块大小 | 512-768 |
| tile_padding | 分块重叠 | 32-64 |

## 节点连接图

### 基础放大工作流

```
Load Image → Image Scale → Save Image
                   ↑
           (放大到目标分辨率)
```

### AI 放大工作流

```
Load Image → Ultimate SD Upscale → Save Image
                   ↓
            模型选择
            (4x-UltraSharp)
```

### 完整放大工作流

```
┌─────────────────┐
│ Checkpoint      │─── MODEL ───┐
│ Loader          │─── CLIP  ───┼──→ CLIP Text Encode
└─────────────────┘             │    ↓ CONDITIONING
                                 │
              CLIP Text Encode ←─┘
              (负向)               │
                  ↓ CONDITIONING  │
                                  ↓
┌──────────────────┐              ┌──────────────────┐
│ Load Image       │─────────────→│ Ultimate         │
└──────────────────┘              │ SD Upscale       │
                                  │                  │──→ Save Image
                                  └──────────────────┘
```

## Ultimate SD Upscale 详解

### 核心参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| upscale_by | 放大倍数 | 2.0 或 4.0 |
| seed | 随机种子 | 随机 |
| steps | 采样步数 | 20-30 |
| cfg | 引导强度 | 7-8 |
| sampler_name | 采样器 | dpmpp_2m |
| scheduler | 调度器 | karras |
| tile_size | 单块尺寸 | 512 |
| tile_padding | 块边缘填充 | 64 |

### 高级参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| mask_blur | 遮罩模糊 | 8 |
| tile_latent_order | 分块顺序 | 0 (默认值) |
| seam_fix_mode | 接缝修复 | Half |
| seam_fix_denoise | 接缝降噪 | 0.5 |
| pcb | 使用 PCB 模式 | ON |

### 分块大小设置

| 分块大小 | 显存需求 | 适用场景 |
|----------|----------|----------|
| 512 | ~4GB | 低显存 |
| 768 | ~6GB | 中等显存 |
| 1024 | ~8GB | 高显存 |

### 接缝修复

| 模式 | 说明 |
|------|------|
| None | 无修复 |
| Half | 修复一半 |
| Band | 修复带 |
| Full | 完全修复 |

## 应用场景

### 场景一：2 倍放大

将 512x512 图像放大到 1024x1024。

```
输入: 512x512
输出: 1024x1024
参数: upscale_by = 2.0
```

### 场景二：动漫图像放大

使用动漫专用模型。

```
模型: 4x-AnimeSharp
输入: 任意分辨率
参数: 保持默认
```

### 场景三：老照片修复

结合去噪和放大。

```
1. 加载低质量图像
2. 使用图生图去噪 (denoise 0.3-0.5)
3. 使用 Ultimate SD Upscale 放大
```

### 场景四：高分辨率输出

4 倍放大用于打印。

```
输入: 512x512
输出: 2048x2048
参数: upscale_by = 4.0
      tile_size = 512
      steps = 25-35
```

## 工作流组合

### 完整流程

```
文生图/图生图 → 基础图像
        ↓
低分辨率生成 (512x512)
        ↓
Ultimate SD Upscale (2x)
        ↓
4x-UltraSharp (2x)
        ↓
最终输出 (2048x2048)
```

### 渐进式放大

对于极高放大倍数，建议分步进行：

```
Step 1: 512 → 1024 (2x)
Step 2: 1024 → 2048 (2x)
```

### 带 ControlNet 的放大

```
原始图像 → Canny → ControlNet
                          ↓
                    Ultimate SD Upscale
                          ↓
                    保持结构的放大结果
```

## 放大模型推荐

### 写实照片

| 模型 | 放大倍数 | 特点 |
|------|----------|------|
| RealESRGAN_x4plus | 4x | 通用 |
| RealESRNet_x4plus | 4x | 去噪更好 |
| 4x-UltraSharp | 4x | 高质量 |
| 4x_NMKD_Siax | 4x | 柔和 |

### 动漫/插画

| 模型 | 放大倍数 | 特点 |
|------|----------|------|
| 4x_AnimeSharpen | 4x | 锐利线条 |
| R-ESRGAN_4x+ | 4x | 通用动漫 |
| 4x_Fatality | 4x | 细节丰富 |
| 4x_UltraMix | 4x | 混合风格 |

## 常见问题

### Q: 放大后出现网格线

**A**:
1. 增加 tile_padding
2. 提高 steps
3. 调整 seam_fix_mode

### Q: 显存不足

**A**:
1. 降低 tile_size
2. 分步放大
3. 使用更小的放大倍数

### Q: 细节过锐

**A**:
1. 使用 RealESRGAN 替代 R-ESRGAN
2. 降低 tile_size
3. 使用 Ultimate SD Upscale 的 "Half" 模式

### Q: 边缘出现重影

**A**:
1. 增加 mask_blur
2. 启用 PCB 模式
3. 使用 "Full" seam_fix_mode

### Q: 动漫线条模糊

**A**:
1. 使用动漫专用模型
2. 降低 denoise 值
3. 提高采样步数

## 性能优化

### 显存优化

| 方法 | 显存节省 | 速度影响 |
|------|----------|----------|
| 减小 tile_size | ~50% | 无 |
| 分步放大 | ~40% | +30% |
| 半精度 | ~30% | +10% |

### 速度优化

| 方法 | 速度提升 | 质量影响 |
|------|----------|----------|
| 增大 tile_size | +20% | 无 |
| 减少 steps | +30% | 略降 |
| 使用 faster 采样器 | +20% | 无 |

## 下一步

- [工作流组合](../) - 综合使用多种技术
- [节点参考](/node/) - 更多节点使用说明