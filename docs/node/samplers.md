# 采样器节点

采样器是 ComfyUI 中最核心的节点之一，负责执行扩散模型的采样过程。

## KSampler

最基础的采样器节点。

### 输入端口

| 端口 | 类型 | 必需 | 说明 |
|------|------|------|------|
| model | MODEL | ✅ | 加载的模型 |
| positive | CONDITIONING | ✅ | 正向条件（提示词） |
| negative | CONDITIONING | ✅ | 负向条件 |
| latent_image | LATENT | ✅ | 潜在空间图像 |

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| seed | INT | 0 | 随机种子 |
| steps | INT | 20 | 采样步数 |
| cfg | FLOAT | 8.0 | CFG 引导强度 |
| sampler_name | STRING | euler | 采样器算法 |
| scheduler | STRING | normal | 调度器 |
| denoise | FLOAT | 1.0 | 去噪强度 |

### 采样器算法

| 算法 | 特点 | 适用场景 |
|------|------|----------|
| euler | 快速，简单 | 快速预览 |
| euler_ancestral | 可控，有噪声 | 动漫风格 |
| ddim | 经典稳定 | 通用场景 |
| dpmpp_2m | 平衡速度质量 | 推荐日常使用 |
| dpmpp_2m_karras | 高质量 | 精细作品 |
| dpmpp_sde | 细节丰富 | 写实风格 |
| unipc | 快速收敛 | 需要快速出图 |
| lcm | 极快速（4-8步） | 实时预览 |

### 调度器

| 调度器 | 特点 |
|--------|------|
| normal | 标准线性调度 |
| karras | 高质量，推荐 |
| exponential | 平滑衰减 |
| simple | 简单线性 |
| DDIM | DDIM 专用 |

### 参数建议

#### 动漫/插画风格

```
Steps: 20-30
CFG: 7-9
Sampler: euler_ancestral / dpmpp_2m
Scheduler: karras
```

#### 写实摄影风格

```
Steps: 30-50
CFG: 6-8
Sampler: dpmpp_2m_karras / dpmpp_sde
Scheduler: karras / exponential
```

#### 快速预览

```
Steps: 8-15
CFG: 7-8
Sampler: euler / lcm
Scheduler: normal / karras
```

## KSampler (Advanced)

高级采样器，提供更多控制选项。

### 额外参数

| 参数 | 说明 |
|------|------|
| noise_type | 噪声类型 |
| sigma_min | 最小 sigma 值 |
| sigma_max | 最大 sigma 值 |
| rho | 调度参数 |

### 使用场景

- 需要精细控制采样过程
- 自定义噪声调度
- 研究/实验性工作流

## KSamplerSelect

选择采样器算法的辅助节点。

### 输出

输出对应的采样器名称字符串。

### 使用示例

```
KSamplerSelect → KSampler 的 sampler_name
```

## BasicScheduler

基础调度器配置。

### 用途

动态调整采样步数和 sigma 值。

## Core

核心节点，可组合出自定义采样器。

### 功能

- 自定义噪声生成
- 自定义 sigma 调度
- 灵活的条件注入

### 高级工作流

```javascript
// Core 节点可以实现的自定义采样流程
noise → model_denoise → conditioning → ...
```

## 采样器最佳实践

### 质量 vs 速度

| 场景 | 推荐配置 | 耗时 |
|------|----------|------|
| 草稿预览 | euler, 8-12 步 | ~5秒 |
| 正式生成 | dpmpp_2m_karras, 25-35 步 | ~20秒 |
| 极致质量 | dpmpp_2m_karras, 50+ 步 | ~60秒 |

### CFG 强度指南

| CFG 值 | 效果 |
|--------|------|
| 1-3 | 几乎忽略提示词 |
| 4-6 | 轻微遵循 |
| 7-9 | 平衡（推荐） |
| 10-12 | 强遵循 |
| 13+ | 过度增强，可能变形 |

### 去噪强度 (Denoise)

| 值 | 效果 |
|----|------|
| 1.0 | 完全重绘（文生图） |
| 0.7-0.9 | 较大改动（图生图） |
| 0.4-0.6 | 中等调整 |
| 0.1-0.3 | 细微调整 |
| <0.1 | 几乎无变化 |

## 下一步

- [模型节点](./models) - 了解模型加载
- [图像节点](./images) - 图像处理
