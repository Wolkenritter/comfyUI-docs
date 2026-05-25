# ControlNet 工作流

使用 ControlNet 精准控制图像生成。

## ControlNet 概述

ControlNet 是一种控制模型，可以根据额外输入（如边缘图、深度图）来控制生成过程。

### 支持的控制类型

| 类型 | 说明 | 适用场景 |
|------|------|----------|
| Canny | 边缘检测 | 保持结构、线条 |
| Depth | 深度图 | 保持立体感、构图 |
| OpenPose | 姿态检测 | 保持人物姿势 |
| Normal | 法线图 | 保持曲面细节 |
| Scribble | 涂鸦 | 快速草图控制 |

## 通用工作流

### 基本结构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ Preprocess  │ →  │ ApplyContro│
│ (参考图)    │    │ or          │    │ lNet       │
└─────────────┘    └─────────────┘    └─────────────┘
                                           ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │ →  │ KSampler    │ ←  │ CheckpointL │
│ code        │    │             │    │ oader       │
└─────────────┘    └─────────────┘    └─────────────┘
```

## 重要参数

### 控制权重 (Strength)

| 值 | 效果 |
|------|------|
| 0.0-0.3 | 轻微影响，保持创意 |
| 0.4-0.6 | 平衡控制 |
| 0.7-1.0 | 强控制，忠实还原 |

### 开始/结束时机

| 参数 | 说明 |
|------|------|
| start_step | 开始影响时机 (0.0-1.0) |
| end_step | 结束影响时机 (0.0-1.0) |

| 设置 | 效果 |
|------|------|
| start=0, end=1 | 全程控制 |
| start=0.2, end=0.8 | 中期控制 |

## 预处理模型

### 必需模型

```
ComfyUI/models/controlnet/
control_v11p_sd15_canny.pth    # Canny
control_v11p_sd15_depth.pth    # Depth
control_v11p_sd15_openpose.pth # OpenPose

# 预处理模型（部分 ControlNet 需要）
ComfyUI/models/leres/
mm3d_model.pth                 # 深度估计
```

### 自动安装

通过 Manager 安装 `comfyui_controlnet_aux`，自动包含常用预处理模型。

## 采样设置

### 推荐配置

| 参数 | 值 | 说明 |
|------|------|------|
| Steps | 20-30 | 标准步数 |
| CFG | 7-10 | 遵循提示词 |
| Sampler | DPM++ 2M Karras | 推荐 |

### 结合 ControlNet

```
Steps: 20-30
ControlNet Strength: 0.5-0.8
ControlNet Start: 0.0
ControlNet End: 1.0
```

## 工作流类型

### 1. Canny 边缘控制

用于保持图像结构：
- 建筑线条
- 产品轮廓
- 设计图转图像

### 2. Depth 深度控制

用于保持立体感：
- 3D 场景
- 人物立体
- 物体层次

### 3. OpenPose 姿态控制

用于保持人物姿势：
- 人物动作
- 手部姿态
- 面部表情

### 4. 多 ControlNet

同时使用多个控制：
- Canny + Depth
- OpenPose + Canny
- 组合控制

## 下一步

- [Canny 工作流](./controlnet-canny) - 边缘控制
- [Depth 工作流](./controlnet-depth) - 深度控制
- [OpenPose 工作流](./controlnet-openpose) - 姿态控制