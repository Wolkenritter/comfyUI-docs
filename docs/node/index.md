# 节点指南

ComfyUI 采用节点式工作流，每个节点执行特定的功能。本指南详细介绍常用的核心节点及其使用方法。

## 节点概览

### 节点结构

```
┌────────────────────────────┐
│      节点标题               │
├────────────────────────────┤
│  输入端口    输出端口        │
│  ● input_a   ○ output_x    │
│  ● input_b   ○ output_y    │
├────────────────────────────┤
│      参数设置               │
│  [字段1] [值]               │
│  [字段2] [值]               │
└────────────────────────────┘
```

### 端口类型

| 颜色 | 类型 | 说明 |
|------|------|------|
| 🟢 绿色 | MODEL | 模型数据 |
| 🔵 蓝色 | CONDITIONING | 条件信息（提示词） |
| 🟡 黄色 | LATENT | 潜在空间数据 |
| ⚪ 白色/灰色 | IMAGE | 图像数据 |
| 🟣 紫色 | VAE | VAE 模型 |
| 🔴 红色 | MASK | 遮罩数据 |
| 🟠 橙色 | CLIP | CLIP 模型 |
| 🟤 棕色 | STYLE | 风格数据 |

## 节点分类

### 模型加载器

用于加载各种 AI 模型：

- [采样器节点](./samplers) - KSampler, Advanced KSampler
- [模型节点](./models) - Checkpoint Loader, VAE, LoRA

### 提示词处理

处理文本提示词的节点：

- **CLIP Text Encode**: 编码正向提示词
- **CLIP Text Encode (Negative)**: 编码负向提示词
- **String**: 字符串常量

### 图像处理

图像的输入输出和处理：

- [图像节点](./images) - 加载、保存、缩放、裁剪等

### 潜在空间

潜在空间相关操作：

- **Empty Latent Image**: 创建空白潜在图像
- **VAE Decode**: 潜在空间转图像
- **VAE Encode**: 图像转潜在空间

## 基本工作流

### 最小文生图工作流

```
Checkpoint Loader
      ↓ MODEL
      +──→ CLIP Text Encode (正向) ──→ CONDITIONING ─┐
      │                                                 ↓
KSampler ← SEED                                   CONDITIONING
      ↓ MODEL                                  CLIP Text Encode (负向)
      +                                               ↑
      ↓
VAE Decode
      ↓
Save Image / Preview Image
```

### 基础图像生成参数

| 参数 | 说明 | 建议值 |
|------|------|--------|
| Steps | 采样步数 | 20-50 |
| CFG Scale | 提示词引导强度 | 7-12 |
| Sampler | 采样器 | dpmpp_2m |
| Scheduler | 调度器 | karras |
| Seed | 随机种子 | 随机或固定 |

## 节点连接规则

### 连接类型匹配

- 相同颜色的端口可以相互连接
- 部分节点支持类型转换
- 断开连接：右键点击连线

### 必需与可选输入

- **实心圆点**: 必需输入
- **空心圆点**: 可选输入
- 可选输入有默认值，可不连接

## 常用节点组合

### 调整生成分辨率

```
Checkpoint Loader → KSampler (steps=20-50)
                        ↓
Empty Latent Image (width=512, height=512)
                        ↓
                     KSampler
```

### 使用 LoRA

```
Checkpoint Loader
      ├── MODEL → Load LoRA → MODEL → KSampler
      └── CLIP → Load LoRA → CLIP
```

### 图像修复 (Inpaint)

```
Load Image → VAE Encode (with mask)
                              ↓ LATENT
                         KSampler
                              ↓
                         VAE Decode → Save Image
```

## 进阶技巧

### 条件混合

使用 `ConditioningCombine` 组合多个条件：

```
CLIP Encode A ──→ ConditioningCombine ──→ KSampler
CLIP Encode B ──↗
```

### 潜在空间混合

使用 `LatentNoisy` 进行潜在空间操作：

```
KSampler A ──→ LatentNoisy ──→ KSampler B
```

### 批量生成

调整以下参数进行批量生成：

1. **Empty Latent Image**: `batch_size` 参数
2. **KSampler**: 配合批量 latent 使用

## 下一步

- [采样器节点](./samplers) - 深入了解采样器
- [模型节点](./models) - 模型加载和管理
- [图像节点](./images) - 图像处理详解
