# Depth 深度控制工作流

使用深度图控制图像生成，保持立体感和空间结构。

## Depth 深度控制

深度图表示图像中各部分与相机的距离，用于保持 3D 结构和空间关系。

### 适用场景

| 场景 | 说明 |
|------|------|
| 3D 场景 | 保持空间深度 |
| 人物合成 | 保持人物立体感 |
| 建筑生成 | 保持建筑结构 |
| 产品展示 | 保持物体层次 |

## 深度预处理

### 可用模型

| 模型 | 说明 |
|------|------|
| MiDaS | 通用深度估计 |
| ZoeDepth | 高精度深度 |
| Depth Anything | 最新模型，效果好 |

### 安装

通过 Manager 安装 `comfyui_controlnet_aux`，包含所有预处理模型。

## 工作流结构

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ DepthPreproc│
│ (参考图)    │    │ essor       │
└─────────────┘    └──────┬──────┘
                          ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │ →  │ KSampler    │ ←  │ ApplyContro │
│ code        │    │             │    │ lNet        │
└─────────────┘    └─────────────┘    └─────────────┘
                                           ↑
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │    │ Checkpoint  │    │ EmptyLatent │
│ (negative)  │    │ Loader      │    │ Image       │
└─────────────┘    └─────────────┘    └─────────────┘
```

## 节点说明

### Depth Preprocessor

深度估计：

| 预处理器 | 说明 |
|----------|------|
| MiDaS | 通用模型 |
| Zoe | 高精度 |
| Depth Anything | 最新最佳 |

### 预处理参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| resolution | 处理分辨率 | 512-1024 |

## 深度图类型

### 绝对深度

```
范围: 0-1
白色=近，黑色=远
细节丰富，精确距离
```

### 相对深度

```
范围: 0-1
仅表示相对前后
不考虑实际距离
```

### 法线图

```
表示表面朝向
用于细节控制
配合深度使用
```

## 提示词技巧

### 立体感描述

```
深度: 室内场景
提示词: elegant interior design, warm lighting, living room with sofa

深度: 人物
提示词: 1girl, beautiful face, detailed hair, standing pose, soft background
```

### 空间层次

```
提示词中体现前后关系:
- "foreground: ..."
- "background: ..."
- "middle ground: ..."

示例: foreground flowers, middle ground person, background mountains
```

## 参数调整

### Strength 设置

| 场景 | Strength | 说明 |
|------|----------|------|
| 精确立体 | 0.7-1.0 | 严格保持深度 |
| 创意发挥 | 0.4-0.6 | 平衡控制 |
| 轻微调整 | 0.2-0.4 | 方向引导 |

### 步数配置

| 质量 | Steps | CFG |
|------|-------|-----|
| 快速 | 20 | 7-8 |
| 标准 | 25-30 | 8-9 |
| 高质量 | 35-50 | 9-10 |

## 应用示例

### 场景转换

```
输入: 深度图（室内）
提示词: transform to modern office, glass walls, city view
强度: 0.6-0.8

结果: 保持空间结构，更新装修风格
```

### 人物放置

```
输入: 场景深度图
输入: 人物姿势图

提示词: 1person in elegant dress, matching the pose, natural lighting
强度: 0.7

结果: 人物融入场景，保持立体感
```

### 建筑生成

```
输入: 建筑深度图
提示词: futuristic skyscraper, glass facade, golden hour lighting
强度: 0.6-0.8

结果: 保持建筑结构，改变设计风格
```

## 结合其他 ControlNet

### Depth + Canny

```
结构(Depth) + 线条(Canny)
适用于: 建筑、设计图

权重: Depth 0.5, Canny 0.3
```

### Depth + OpenPose

```
立体(Depth) + 姿态(OpenPose)
适用于: 人物场景

权重: Depth 0.4, OpenPose 0.5
```

## 常见问题

### Q: 深度图不正确

**A**:
- 使用更好的预处理模型
- Depth Anything 效果最佳
- 调整输入图像质量

### Q: 立体感丢失

**A**:
- 提高 Strength
- 减少 Steps
- 检查深度图

### Q: 深度与内容不匹配

**A**:
- 确保提示词与深度场景协调
- 调整强度降低约束
- 使用 relative 深度模式

## 下一步

- [OpenPose 工作流](./controlnet-openpose) - 姿态控制
- [多 ControlNet](./multi-controlnet) - 组合控制