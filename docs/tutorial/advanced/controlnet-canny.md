# Canny ControlNet 教程

学习使用 Canny 边缘检测 ControlNet。

## 什么是 Canny ControlNet

Canny ControlNet 通过检测图像边缘来控制生成，保留原始图像的轮廓和线条。

## 适用场景

- 线稿上色
- 建筑渲染
- 保持轮廓的图像转换
- 精确结构控制

## 安装

### 1. 下载模型

```
control_v11p_sd15_canny.pth
```

下载链接：
- [ControlNet Collection](https://huggingface.co/lllyasviel/ControlNet-v1-1)

- [魔搭社区ModelScope](https://www.modelscope.cn/models/camenduru/control_v11p_sd15_canny)

### 2. 安装

放入 `ComfyUI/models/controlnet/`

## 工作流

```
┌─────────────────┐
│ Checkpoint      │── MODEL
└─────────────────┘        ↓
                           ↓
┌─────────────────┐   ┌────────────┐   ┌────────────┐
│ Load Image      │→→→│ Canny Edge │→→→│ ControlNet  │
└─────────────────┘   └────────────┘   │   Apply     │──CONDITIONING
                                       └────────────┘        ↓
                                                          ↓
┌─────────────────┐   ┌────────────┐                ┌────────────┐
│ CLIP Text Encode│──→│ CONDITIONING│←─────────────│ KSampler   │
└─────────────────┘   └────────────┘                └────────────┘
```

## 节点连接

### 1. Canny 边缘检测

```
Load Image → Canny Edge Detection
```

### 2. ControlNet 应用

```
Canny Edge → ControlNet (canny) → Apply
                ↑
          Load ControlNet Model
```

### 3. 条件合并

```
CLIP Text Encode → Conditioning → KSampler
```

## 参数设置

### Canny 参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| low_threshold | 低阈值 | 100 |
| high_threshold | 高阈值 | 200 |

### Threshold 调整

| 阈值设置 | 效果 |
|----------|------|
| 低阈值↑, 高阈值↑ | 仅主要边缘 |
| 低阈值↓, 高阈值↓ | 更多细节 |
| 差值小 | 边缘密集 |

### ControlNet strength

| 值 | 效果 |
|----|------|
| 0.5-0.7 | 轻微控制 |
| 0.8-1.0 | 强控制 |

## 提示词设置

### 示例：线稿上色

```
正向：
colorful illustration, vibrant colors, detailed, masterpiece

负向：
grayscale, black and white, low quality, blurry
```

### 示例：建筑渲染

```
正向：
modern architecture, realistic building, glass facade,
professional rendering, 8k

负向：
sketch, drawing, cartoon, low quality
```

## 线稿上色技巧

### 1. 预处理线稿

确保线稿清晰，背景为白色或纯色。

### 2. 阈值调整

- 线条细：降低阈值
- 线条粗：提高阈值
- 减少噪点：提高阈值差

### 3. 配合风格 LoRA

```
使用 LoRA 增强风格 + Canny 控制结构
```

## 与其他 ControlNet 组合

### Canny + Depth

```
结构控制（Canny）+ 空间感（Depth）
```

### Canny + Tile

```
细节补充 + 轮廓保持
```

## 常见问题

### Q: 边缘检测不准确

**A**: 
- 调整 Canny 阈值
- 预处理图像（提高对比度）
- 使用更高质量的线稿

### Q: 生成结果与边缘不符

**A**: 提高 ControlNet strength。

### Q: 边缘出现噪点

**A**: 提高高阈值，降低低阈值。

## 下一步

- [Depth ControlNet](./controlnet-depth) - 深度图控制
- [OpenPose ControlNet](./controlnet-openpose) - 姿态控制