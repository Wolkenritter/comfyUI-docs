# 多 ControlNet 组合

学习如何在 ComfyUI 中组合使用多个 ControlNet。

## 为什么组合 ControlNet

单个 ControlNet 可能无法完全控制生成，多个组合可以实现更精细的控制。

## 组合方案

### 方案一：姿态 + 结构

```
OpenPose (姿态) + Depth (空间)
```

### 方案二：轮廓 + 结构

```
Canny (轮廓) + Depth (空间)
```

### 方案三：完整控制

```
OpenPose + Depth + Canny
```

## 工作流

### 并联组合

```
┌─────────────┐
│ Load Image │──→ OpenPose ──→ ControlNet 1 ─┐
└─────────────┘                              │
                                             ↓
┌─────────────┐                      ┌─────────────┐
│ Load Image │──→ Depth ────────→ ControlNet 2 ─┼→ ConditioningCombine → KSampler
└─────────────┘                              │                   ↑
                                             ↓                   │
┌─────────────┐                      ┌─────────────┐              │
│ Load Image │──→ Canny ────────→ ControlNet 3 ─┘              │
└─────────────┘                                                   
```

### ConditioningCombine

将多个 ControlNet 的条件合并：

```
ControlNet 1 ─→ ConditioningCombine ─→ CONDITIONING ─→ KSampler
ControlNet 2 ─↗
ControlNet 3 ─↗
```

## 权重调整

### 根据优先级调整

| ControlNet | 用途 | strength |
|------------|------|----------|
| OpenPose | 姿态 | 0.8 |
| Depth | 空间 | 0.5 |
| Canny | 轮廓 | 0.3 |

### 总强度控制

在 ConditioningCombine 后可添加强度调整：

```
最终 strength = 各 ControlNet strength × 总强度系数
```

## 实用组合

### 人物写真

```
OpenPose (0.8) + Depth (0.5)
```

保持姿态，同时增加空间感。

### 建筑渲染

```
Canny (0.7) + Depth (0.6)
```

保持轮廓，增强空间深度。

### 角色动画

```
OpenPose (0.9) + Canny (0.4) + Depth (0.3)
```

精确姿态控制，加上轮廓和细节。

## 注意事项

### 1. 总强度控制

多个 ControlNet 叠加可能导致总强度过高：

```
建议总强度控制在 2.0 以内
```

### 2. 采样步数

多 ControlNet 需要更多步数：

```
推荐步数：30-50
```

### 3. 预处理质量

确保各预处理结果准确。

## 常见问题

### Q: 多个 ControlNet 冲突

**A**: 
- 降低各 ControlNet strength
- 调整预处理确保不冲突
- 逐个测试

### Q: 显存不足

**A**: 
- 减少 ControlNet 数量
- 使用更小的图像尺寸
- 降低分辨率

### Q: 效果不明显

**A**: 
- 提高关键 ControlNet 的 strength
- 增加采样步数
- 细化提示词

## 下一步

- [Flux 文生图](./flux-t2i) - 高级模型教程
- [腾讯混元文生视频](./hunyuan-t2v) - 视频生成