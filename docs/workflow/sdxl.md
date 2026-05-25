# SDXL 工作流教程

学习使用 SDXL 模型创建高质量图像。

## SDXL 简介

SDXL (Stable Diffusion XL) 是 Stability AI 推出的最新模型系列，具有出色的图像质量和 prompt following 能力。

### 模型特点

| 特点 | 说明 |
|------|------|
| 高分辨率 | 原生 1024x1024 |
| 更好的构图 | 改进的构图能力 |
| 风格多样 | 支持多种艺术风格 |
| 文字渲染 | 更好的文字生成 |

### 版本

| 模型 | 说明 |
|------|------|
| SDXL Base | 基础模型 |
| SDXL Refiner | 精炼模型 |
| SDXL Turbo | 快速生成 |
| SDXL Lightning | 高速模型 |

## 安装 SDXL

### 下载模型

```
ComfyUI/models/checkpoints/
stable-diffusion-xl-base-1.0.safetensors

# 可选：精炼模型
stable-diffusion-xl-refiner-1.0.safetensors
```

### 下载 VAE

SDXL 使用专用 VAE：

```
ComfyUI/models/vae/
sdxl-vae-fp16-fix.safetensors
```

### 推荐配置

| 组件 | 要求 |
|------|------|
| 显存 | 8GB 最低，16GB 推荐 |
| 模型格式 | safetensors |
| VAE | sdxl-vae |

## 基础工作流

### 经典工作流

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CheckpointL │ →  │ CLIPTextEn  │ →  │ KSampler   │
│ oaderSDXL   │    │ (positive)  │    │            │
└─────────────┘    └─────────────┘    └─────────────┘
                        ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │    │ VAEDecode   │ ←  │ EmptyLatent│
│ (negative) │    │             │    │ Image      │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 节点说明

| 节点 | 说明 |
|------|------|
| CheckpointLoaderSDXL | 加载 SDXL 模型 |
| CLIP Text Encode | 编码提示词（分 positive/negative） |
| EmptyLatentImage | 创建潜在空间 |
| KSampler | 采样生成 |
| VAEDecode | 解码输出 |

## SDXL 提示词技巧

### 基本格式

SDXL 支持更长的提示词：

```
# 单段式
a beautiful landscape with mountains, sunset, golden hour lighting, cinematic, 8k

# 分段式（可选）
# 主体描述
masterpiece, best quality, a young woman with long flowing hair
# 服装
wearing a elegant white dress with floral patterns
# 背景
standing in a flower garden, butterflies around, magical atmosphere
# 画质
ultra detailed, 8k, professional photography
```

### 质量增强

| 标签 | 效果 |
|------|------|
| masterpiece, best quality | 提升整体质量 |
| extremely detailed, intricate | 增加细节 |
| 8k, high resolution | 高分辨率 |
| professional, studio lighting | 专业感 |

### 风格指定

```
# 摄影风格
analog photo, film grain, vintage aesthetic
shot on Leica M6, bokeh, shallow depth

# 艺术风格
oil painting, impressionist style, soft brushstrokes
art nouveau, decorative, elegant

# 插画风格
digital art, fantasy illustration, vibrant colors
concept art, detailed, epic
```

## 采样参数

### 推荐设置

| 参数 | 推荐值 | 说明 |
|------|--------|------|
| Steps | 30-50 | 质量与速度平衡 |
| CFG | 7-12 | 遵循提示词程度 |
| Sampler | DPM++ 2M Karras | 推荐 |
| Size | 1024x1024 | 原生分辨率 |

### 不同质量档位

| 档位 | Steps | CFG | 用途 |
|------|-------|-----|------|
| 快速预览 | 20 | 7-8 | 快速测试 |
| 标准质量 | 30 | 8-10 | 日常使用 |
| 高质量 | 50 | 10-12 | 重要作品 |

## 使用 Refiner

### 两阶段生成

SDXL 可以使用 Refiner 提升质量：

```
┌─────────────┐    ┌─────────────┐
│ Base Model  │ →  │ 生成基础图像 │
│             │    │ (1024x1024) │
└─────────────┘    └──────┬──────┘
                          ↓
┌─────────────┐    ┌─────────────┐
│ Refiner     │ →  │ 精炼细节    │
│ Model       │    │             │
└─────────────┘    └─────────────┘
```

### 工作流配置

```
1. Base 模型生成
   - Steps: 20-25
   - Switch at: 0.8（80%进度切换）

2. Refiner 精炼
   - Steps: 10-20
   - 细化纹理和细节
```

### Refiner 工作流

```
┌─────────────┐
│ Base Model  │
│ (KSampler1) │ → 基础图像
└──────┬──────┘
       ↓
┌─────────────┐    ┌─────────────┐
│ Refiner     │ →  │ KSampler2   │ → 最终图像
│ Model       │    │ (精炼)      │
└─────────────┘    └─────────────┘
```

## 图像尺寸

### 原生分辨率

| 尺寸 | 比例 | 适用 |
|------|------|------|
| 1024x1024 | 1:1 | 头像、方图 |
| 1152x896 | 9:7 | 风景 |
| 1216x832 | 3:2 | 照片 |
| 1344x768 | 7:4 | 宽屏 |

### 推荐比例

```
# 人像
1024x1024, 896x1152, 768x1024

# 风景
1024x1024, 1216x832, 832x1216

# 全身
768x1344, 576x1024
```

## LoRA 使用

### SDXL LoRA

SDXL 需要 SDXL 专用 LoRA：

```
ComfyUI/models/loras/
sdxl_style_name.safetensors
```

### 应用 LoRA

```
1. 使用 Load LoRA 节点
2. 连接模型
3. 设置强度 0.5-0.8
4. 可选：调整 CLIPS strength
```

### LoRA 强度建议

| 类型 | 模型强度 | CLIP 强度 |
|------|----------|-----------|
| 风格 | 0.6-0.8 | 0.5-1.0 |
| 角色 | 0.7-1.0 | 0.5-0.8 |
| 服装 | 0.5-0.7 | 0.5-1.0 |

## ControlNet

### SDXL ControlNet

SDXL 支持 ControlNet：

| ControlNet | 用途 |
|------------|------|
| canny | 边缘控制 |
| depth | 深度控制 |
| openpose | 姿态控制 |

### 使用示例

```
1. 加载 SDXL 模型
2. 加载 ControlNet
3. 预处理参考图
4. 调整权重 0.5-0.8
5. 生成
```

## 常见问题

### Q: 显存不足

**A**: 
- 使用 SDXL Lite 版本
- 减小图像尺寸
- 使用 fp16 模型

### Q: 提示词不生效

**A**:
- 使用更详细的描述
- 增加 CFG 值
- 检查提示词格式

### Q: 如何提升质量

**A**:
- 使用 Refiner
- 增加 Steps
- 添加质量标签
- 使用高分辨率

## 下一步

- [ControlNet](./advanced/controlnet) - 结构控制
- [LoRA 教程](../tutorial/lora) - 风格模型