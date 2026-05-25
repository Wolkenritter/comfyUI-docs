# Depth ControlNet 教程

学习使用 Depth 深度图 ControlNet。

## 什么是 Depth ControlNet

通过深度图控制生成，保持图像的空间结构和深度关系。

## 适用场景

- 建筑可视化
- 室内设计
- 保持空间感的风格转换
- 3D 视角控制

## 安装

### 1. 下载模型

```
control_v11p_sd15_depth.pth
```

### 2. 安装预处理模型

需要安装 [comfyui_controlnet_aux](https://github.com/Fannovel16/comfyui_controlnet_aux) 获取深度估计模型。

深度模型：
```
dpt_large.bin 或 depth_anything_vitl14.bin
```

### 3. 安装位置

- ControlNet 模型：`models/controlnet/`
- 预处理模型：`models/controlnet_aux/` 或节点自动下载

## 工作流

```
┌─────────────────┐
│ Checkpoint      │── MODEL
└─────────────────┘        ↓
                           ↓
┌─────────────────┐   ┌──────────────┐   ┌────────────┐
│ Load Image      │→→│ Depth Map    │→→│ ControlNet│
└─────────────────┘   │ (MiDaS/Depth) │   │   Apply   │──CONDITIONING
                      └──────────────┘   └────────────┘
                                                  ↓
┌─────────────────┐                           ┌────────────┐
│ CLIP Text Encode │──→ CONDITIONING ─────────→│ KSampler   │
└─────────────────┘                              └────────────┘
```

## 预处理模型对比

| 模型 | 精度 | 速度 | 说明 |
|------|------|------|------|
| MiDaS | 高 | 较慢 | 通用深度估计 |
| Depth Anything | 很高 | 中等 | 更精确，推荐 |
| ZoeDepth | 中 | 快 | 特定场景 |

## Depth Anything 设置

### 安装

通过 Manager 安装 `ComfyUI Depth Anything` 或使用 `comfyui_controlnet_aux`。

### 参数

| 参数 | 说明 |
|------|------|
| model_name | 模型选择 |

## 参数设置

### ControlNet strength

| 值 | 效果 |
|----|------|
| 0.6-0.8 | 轻微调整 |
| 0.8-1.0 | 强控制 |

### 提示词配合

```
深度控制强时：
提示词可以简化，更多依赖深度图

深度控制弱时：
需要更详细的提示词引导
```

## 应用场景

### 场景一：建筑渲染

```
1. 加载建筑线稿或照片
2. 生成深度图
3. 使用 ControlNet 生成写实渲染
```

提示词：
```
modern building, photorealistic, glass facade,
professional architecture, 8k, realistic lighting
```

### 场景二：室内设计

```
1. 加载参考室内图像
2. 生成深度图
3. 重新设计风格
```

提示词：
```
luxury interior, modern design, living room,
cozy atmosphere, natural lighting
```

### 场景三：风格转换

```
保持深度结构 + 改变艺术风格
```

## 与其他 ControlNet 组合

### Depth + Canny

```
空间结构（Depth）+ 轮廓（Canny）
```

### Depth + OpenPose

```
空间（Depth）+ 姿态（Pose）
```

## 常见问题

### Q: 深度图不准确

**A**: 
- 使用高质量参考图
- 选择更精确的深度模型
- 尝试不同的预处理模型

### Q: 空间感不明显

**A**: 提高 ControlNet strength。

### Q: 颜色/风格不匹配

**A**: 
- 调整提示词
- 配合风格 LoRA
- 使用较低 strength

## 下一步

- [OpenPose ControlNet](./controlnet-openpose) - 姿态控制
- [多 ControlNet 组合](./multi-controlnet) - 组合使用