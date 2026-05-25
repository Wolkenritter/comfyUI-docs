# 多 ControlNet 工作流

同时使用多个 ControlNet 进行更精细的控制。

## 多 ControlNet 概念

组合多个 ControlNet 可以同时控制多个维度：

- 结构 + 姿态
- 线条 + 深度
- 边缘 + 亮度

### 组合优势

| 优势 | 说明 |
|------|------|
| 精确控制 | 多维度约束 |
| 灵活性 | 权重独立调整 |
| 创意空间 | 平衡控制与自由 |

## 工作流结构

### 双 ControlNet

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ ControlNet1 │ → ┐
│ (结构参考)  │    │ (Canny)     │   │
└─────────────┘    └─────────────┘   │
                                      ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │ →  │ KSampler    │ ← │ Merge       │
│ code        │    │             │   │ ControlNets │
└─────────────┘    └─────────────┘    └─────────────┘
                                           ↑
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ ControlNet2 │ → │
│ (姿态参考)  │    │ (OpenPose)  │   │
└─────────────┘    └─────────────┘   │
                                      │
┌─────────────┐    ┌─────────────┐    │
│ Checkpoint  │    │ EmptyLatent │ ←─┘
│ Loader      │    │ Image       │
└─────────────┘    └─────────────┘
```

### 三 ControlNet

```
┌─────────────┐    ┌─────────────┐
│ LoadImage A │ →  │ ControlNet1 │ → ┐
└─────────────┘    └─────────────┘   │
                                      ↓
                                    Merge → KSampler
                                      ↑
┌─────────────┐    ┌─────────────┐   │
│ LoadImage B │ →  │ ControlNet2 │ → │
└─────────────┘    └─────────────┘   │
                                      │
┌─────────────┐    ┌─────────────┐   │
│ LoadImage C │ →  │ ControlNet3 │ → │
└─────────────┘    └─────────────┘   │
```

## 节点配置

### ControlNet Loader

```
数量: 根据需要添加
类型: 自由组合
- Canny + Depth
- OpenPose + Canny + Depth
- Any combination
```

### Merge ControlNets

| 参数 | 说明 |
|------|------|
| strength1 | ControlNet 1 权重 |
| strength2 | ControlNet 2 权重 |
| ... | 更多 ControlNet |

### 权重分配

| 控制类型 | 推荐权重 | 说明 |
|----------|----------|------|
| 结构 (Canny) | 0.3-0.5 | 辅助结构 |
| 深度 (Depth) | 0.4-0.6 | 保持立体感 |
| 姿态 (OpenPose) | 0.5-0.8 | 主要控制 |

## 组合方案

### 方案一：结构 + 姿态

```
ControlNet 1: Canny (边缘结构)
权重: 0.3-0.4

ControlNet 2: OpenPose (人物姿态)
权重: 0.6-0.8

效果: 保持线条同时保持姿势
```

### 方案二：姿态 + 深度

```
ControlNet 1: OpenPose (姿态)
权重: 0.5-0.7

ControlNet 2: Depth (立体感)
权重: 0.4-0.6

效果: 姿势准确，立体感强
```

### 方案三：线条 + 立体 + 姿态

```
ControlNet 1: Canny (线条)
权重: 0.2-0.3

ControlNet 2: Depth (深度)
权重: 0.3-0.5

ControlNet 3: OpenPose (姿态)
权重: 0.5-0.7

效果: 全面控制
```

## 参数调整

### 权重平衡

| 权重过高 | 权重过低 |
|----------|----------|
| 失去创意 | 控制不明显 |
| 过于僵硬 | 难以保持结构 |
| 可能变形 |  |

### 步数调整

| ControlNet 数量 | 推荐 Steps |
|------------------|------------|
| 1 | 20-30 |
| 2 | 25-35 |
| 3+ | 30-50 |

### 采样器选择

```
推荐: DPM++ 2M Karras
理由: 多 ControlNet 需要更平滑的采样
备选: Euler a（快速）
```

## 应用场景

### 人物场景

```
需求: 保持姿势，同时保持背景结构

ControlNet 1: OpenPose (人物)
权重: 0.6

ControlNet 2: Depth (场景)
权重: 0.4

提示词: 1person in elegant dress, detailed background, natural lighting
```

### 建筑设计

```
需求: 保持建筑线稿，同时有立体感

ControlNet 1: Canny (建筑线条)
权重: 0.5

ControlNet 2: Depth (立体感)
权重: 0.4

提示词: modern architecture, glass facade, photorealistic, sunny day
```

### 产品展示

```
需求: 保持产品轮廓，同时有环境深度

ControlNet 1: Canny (产品轮廓)
权重: 0.4

ControlNet 2: Depth (环境)
权重: 0.3

提示词: product on display, clean background, professional lighting
```

## 进阶技巧

### 渐进式权重

```
开始: [0.2, 0.2, 0.2] - 宽松控制
中期: [0.3, 0.4, 0.5] - 逐渐加强
结束: [0.4, 0.5, 0.6] - 最终保持

需要自定义节点实现
```

### 动态权重

```
根据图像内容调整:
- 人物区域: OpenPose 权重高
- 背景区域: Depth 权重高

使用 Mask 节点分区控制
```

### 条件触发

```
不同阶段使用不同 ControlNet:
- 0-30% 步数: Canny 控制结构
- 30-70% 步数: Depth 控制立体
- 70-100% 步数: OpenPose 调整姿态

需要 advanced ControlNet 节点
```

## 常见问题

### Q: 冲突怎么办

**A**:
- 降低各自权重
- 选择主要控制
- 减少 ControlNet 数量

### Q: 生成时间太长

**A**:
- 减少 ControlNet 数量
- 减少步数
- 使用更小的预处理

### Q: 效果不佳

**A**:
- 单独测试每个 ControlNet
- 逐步添加
- 调整权重比例

## 性能优化

### 减少处理时间

```
1. 预处理一次，多次使用
2. 降低预处理分辨率
3. 减少 ControlNet 数量
4. 使用更快采样器
```

### 显存优化

```
1. 使用 fp16 模型
2. 减小图像尺寸
3. 减少步数
4. 关闭不需要的 ControlNet
```

## 下一步

- [Canny 工作流](./controlnet-canny) - 边缘控制
- [Depth 工作流](./controlnet-depth) - 深度控制
- [OpenPose 工作流](./controlnet-openpose) - 姿态控制