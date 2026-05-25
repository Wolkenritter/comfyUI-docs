# ControlNet 节点

ControlNet 相关节点详解。

## 节点列表

### 核心节点

| 节点 | 说明 |
|------|------|
| ControlNetLoader | 加载 ControlNet 模型 |
| ControlNetApply | 应用 ControlNet |
| ControlNetApply (Advanced) | 高级应用 |

### 预处理节点

| 节点 | 说明 |
|------|------|
| Canny Edge | 边缘检测 |
| Depth Map | 深度图 |
| OpenPose Pose | 姿态检测 |
| Normal Map | 法线图 |

## ControlNetLoader

加载 ControlNet 模型。

### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| control_net_name | STRING | 模型名称 |

### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| CONTROL_NET | CONTROL_NET | ControlNet 对象 |

### 使用

```
ControlNetLoader → ControlNetApply
```

## ControlNetApply

应用 ControlNet 到采样过程。

### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| positive | CONDITIONING | 正向条件 |
| negative | CONDITIONING | 负向条件 |
| control_net | CONTROL_NET | ControlNet 模型 |
| image | IMAGE | 控制图像 |

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| strength | FLOAT | 控制强度 (0-2) |

### 工作流

```
ControlNetLoader → CONTROL_NET → ControlNetApply → KSampler
                                         ↑
LoadImage → Preprocessor → image
```

## ControlNetApply (Advanced)

高级版本，支持更多控制。

### 额外参数

| 参数 | 类型 | 说明 |
|------|------|------|
| start_percent | FLOAT | 开始时机 (0-1) |
| end_percent | FLOAT | 结束时机 (0-1) |

### 使用技巧

```javascript
// 开始控制，中途减弱
start_percent: 0.0
end_percent: 0.7
// 0-70% 步数使用 ControlNet，70-100% 自由生成
```

## 预处理节点

### Canny Edge

边缘检测预处理。

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| low_threshold | INT | 低阈值 (1-255) |
| high_threshold | INT | 高阈值 (1-255) |

#### 阈值效果

| 阈值 | 边缘 |
|------|------|
| 低 | 更多边缘 |
| 高 | 清晰边缘 |

```javascript
// 建筑线条
low: 100, high: 200

// 草图线稿
low: 20, high: 100
```

### Depth Map

深度图预处理。

#### 可用模型

| 模型 | 说明 |
|------|------|
| MiDaS | 通用 |
| ZoeDepth | 高精度 |
| Depth Anything | 最新 |

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| model | STRING | 预处理模型 |
| guess_mode | BOOLEAN | 猜测模式 |

### OpenPose Pose

骨骼姿态检测。

#### 检测类型

| 类型 | 内容 |
|------|------|
| basic | 身体关键点 |
| detailed | 身体 + 手部 |
| full | 身体 + 手部 + 面部 |

#### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| pose_keypoints | KEYPOINT | 关键点 |
| image | IMAGE | 可视化图 |

### Normal Map

法线图预处理。

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| bg_threshold | FLOAT | 背景阈值 |

## 完整工作流

### Canny 控制

```
LoadImage → Canny Edge → ControlNetApply → KSampler
                                         ↑
ControlNetLoader → CONTROL_NET
                                         ↓
CheckpointLoader → MODEL
     CLIP → CLIPTextEncode(+)
          → CLIPTextEncode(-)
```

### Depth 控制

```
LoadImage → Depth Map → ControlNetApply → KSampler
                              ↑
ControlNetLoader
```

### 多 ControlNet

```
ControlNetLoader1 → ControlNetApply → Merge → KSampler
                                          ↑
ControlNetLoader2 → ControlNetApply ↗
```

## 强度调整

| 强度 | 效果 |
|------|------|
| 0.0-0.3 | 轻微影响 |
| 0.4-0.6 | 平衡控制 |
| 0.7-1.0 | 严格控制 |

## 常见问题

### Q: ControlNet 不生效

**A**:
- 检查模型是否正确加载
- 确认图像尺寸匹配
- 检查连接顺序

### Q: 过度控制

**A**: 降低 strength 到 0.3-0.5。

### Q: 预处理失败

**A**: 安装 comfyui_controlnet_aux。

## 下一步

- [FaceDetailer](../custom/impact-pack) - 面部修复
- [工作流](../../workflow/controlnet) - ControlNet 工作流