# ControlNet 安装和使用

学习在 ComfyUI 中安装和使用 ControlNet 模型。

## 什么是 ControlNet

ControlNet 是一种神经网络模型，可以根据额外的条件输入（如边缘图、深度图、姿态等）来控制图像生成。

## 安装 ControlNet 模型

### 1. 下载模型

#### SD1.5 版本

| 模型 | 用途 | 下载 |
|------|------|------|
| control_v11p_sd15_canny | 边缘检测 | [HuggingFace](https://huggingface.co/lllyasviel/ControlNet-v1-1) / [魔搭社区ModelScope](https://www.modelscope.cn/home)|
| control_v11p_sd15_depth | 深度图 | 同上 |
| control_v11p_sd15_openpose | 姿态 | 同上 |

#### SDXL 版本

| 模型 | 用途 | 下载 |
|------|------|------|
| diffusers_xl_canny | 边缘 | [HuggingFace](https://huggingface.co/diffusers/controlnet) / [魔搭社区ModelScope](https://www.modelscope.cn/home)|

### 2. 安装位置

将模型文件放入：
```
ComfyUI/models/controlnet/
```

### 3. 重启 ComfyUI

## 预处理节点

### Canny 边缘检测

```
Load Image → Canny → ControlNet Apply
```

参数：
- low_threshold: 100-150
- high_threshold: 200-250

### Depth Map (深度图)

```
Load Image → MiDaS/Depth Anything → ControlNet Apply
```

需要安装：
- `comfyui_controlnet_aux`
- 深度估计模型

### OpenPose (姿态)

```
Load Image → OpenPose Detect → ControlNet Apply
```

## 使用 ControlNet

### 基础工作流

```
┌─────────────────┐
│ Checkpoint      │── MODEL → KSampler
└─────────────────┘            ↑
                               ↓
┌─────────────────┐     ┌──────────────┐
│ Load Image      │→预处理→ ControlNet  │──CONDITIONING
└─────────────────┘     └──────────────┘
```

### Apply ControlNet 节点

| 输入 | 说明 |
|------|------|
| positive | 正向条件 |
| negative | 负向条件 |
| control_net | ControlNet 模型 |
| image | 预处理后的图像 |

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| strength | 控制强度 | 0.5-1.0 |

## strength 参数

| 值 | 效果 |
|----|------|
| 0.3-0.5 | 轻微引导 |
| 0.6-0.8 | 中等控制 |
| 0.9-1.2 | 强控制 |

## 常见 ControlNet 类型

| 类型 | 检测内容 | 适用场景 |
|------|----------|----------|
| Canny | 边缘 | 线稿上色、轮廓控制 |
| Depth | 深度 | 空间结构 |
| Pose | 姿态 | 动作控制 |
| MLSD | 直线 | 建筑、室内 |
| Scribble | 涂鸦 | 手绘转换 |

## 多 ControlNet 组合

### 工作流

```
Image A → Canny → ControlNet 1 ─┐
                                 ↓
Image B → Depth → ControlNet 2 ─┼→ ConditioningCombine → KSampler
                                 │
Image C → Pose  → ControlNet 3 ─┘
```

### 权重调整

| ControlNet | strength |
|------------|----------|
| Canny | 0.8 |
| Depth | 0.6 |
| Pose | 0.7 |

## 常见问题

### Q: ControlNet 不生效

**A**: 检查控制图像是否正确连接，strength 是否合适。

### Q: 结果僵硬

**A**: 降低 strength，使用更高采样步数。

### Q: 预处理不准确

**A**: 调整预处理参数，或使用更好的参考图。

## 下一步

- [Canny ControlNet](./controlnet-canny) - 详细教程
- [Depth ControlNet](./controlnet-depth) - 深度控制
- [OpenPose ControlNet](./controlnet-openpose) - 姿态控制