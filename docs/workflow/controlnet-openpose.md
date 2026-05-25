# OpenPose 姿态控制工作流

使用骨骼姿态检测控制人物动作。

## OpenPose 姿态控制

OpenPose 检测人物的关键点（骨骼），用于保持人物姿势和动作。

### 检测关键点

| 关键点 | 位置 |
|--------|------|
| nose | 鼻子 |
| eyes | 眼睛 |
| ears | 耳朵 |
| shoulders | 肩膀 |
| elbows | 肘部 |
| wrists | 手腕 |
| hips | 臀部 |
| knees | 膝盖 |
| ankles | 脚踝 |

### 适用场景

| 场景 | 说明 |
|------|------|
| 人物动作 | 保持特定姿势 |
| 手部控制 | 精确手部姿态 |
| 多人姿态 | 多人动作控制 |
| 舞蹈动作 | 复杂姿势 |

## 工作流结构

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ OpenPose    │
│ (参考图)    │    │ Preprocessor│
└─────────────┘    └──────┬──────┘
                          ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │ →  │ KSampler    │ ←  │ ApplyContro │
│ code        │    │             │    │ lNet        │
└─────────────┘    └─────────────┘    └─────────────┘
                                           ↑
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │    │ Checkpoint  │    │ EmptyLatent │
│ (negative)  │    │ Loader       │    │ Image       │
└─────────────┘    └─────────────┘    └─────────────┘
```

## OpenPose 预处理器

### 可用选项

| 预处理器 | 说明 |
|----------|------|
| DWPose | 推荐，效果好 |
| OpenPose | 标准版本 |
| MediaPipe Pose | 快速 |

### 输出类型

| 输出 | 内容 |
|------|------|
| pose_keypoint | 关键点坐标 |
| pose_keypoint_json | JSON 格式 |
| hand | 手部关键点 |
| face | 面部关键点 |

### 组合输出

```
DWPose: 包含 body + hand + face
OpenPose: 可选 body only / body+hand / body+hand+face
```

## 关键点控制

### 身体姿态

```
检测: 躯干、四肢
控制: 整体姿势
权重: 0.5-0.8
```

### 手部控制

```
检测: 手指位置
控制: 手部姿态
难度: 手部复杂，容易变形

技巧:
- 结合 hand model
- 使用更高权重
- 提示词强调手部
```

### 面部控制

```
检测: 面部特征点
控制: 面部表情
权重: 0.3-0.6
```

## 提示词技巧

### 姿势配合

```
姿态: 站立伸手
提示词: 1girl, reaching hand forward, elegant pose, beautiful dress

姿态: 坐姿
提示词: 1person sitting on chair, relaxed posture, casual outfit
```

### 手部描述

```
避免: deformed hands, extra fingers
推荐: detailed hands, natural pose, fingers visible

手部提示词:
- "detailed hands"
- "natural finger positions"
- "anatomically correct hands"
```

### 负面提示词

```
推荐负面:
deformed hands, extra fingers, bad hands, poorly drawn hands
crooked fingers, unnatural pose, low quality, blurry
```

## 参数调整

### Strength 设置

| 场景 | Strength | 说明 |
|------|----------|------|
| 精确姿势 | 0.6-0.9 | 严格保持动作 |
| 平衡控制 | 0.4-0.6 | 保持姿势，灵活风格 |
| 轻微引导 | 0.2-0.4 | 方向引导 |

### 步数配置

| 质量 | Steps | CFG |
|------|-------|-----|
| 快速预览 | 20 | 7-8 |
| 标准质量 | 25-30 | 8-9 |
| 手部细节 | 30-40 | 9-10 |

## 应用示例

### 人物换装

```
输入: 人物姿势图
提示词: same pose, different outfit, elegant evening gown
强度: 0.6-0.8

保持姿势，更换服装
```

### 舞蹈动作

```
输入: 舞蹈姿势
提示词: beautiful dancer, dynamic pose, flowing dress, stage lighting
强度: 0.7-0.9

保持复杂舞蹈姿势
```

### 多人场景

```
输入: 多人合照
提示词: two people, same poses, in romantic setting, sunset
强度: 0.5-0.7

保持多人姿态
```

## 手部问题解决

### 手部常出问题

| 问题 | 解决 |
|------|------|
| 手指粘连 | 提高权重，加入手部检测 |
| 手形扭曲 | 使用更好的模型，降低强度 |
| 手部消失 | 负面提示词，强化手部描述 |

### 增强手部控制

```
1. 使用 DWPose（含 hand）
2. 提高 ControlNet 权重
3. 添加手部负面提示词
4. 增加采样步数
5. 使用 hand-focused 模型
```

## 结合其他 ControlNet

### OpenPose + Canny

```
姿态(OpenPose) + 线条(Canny)
适用于: 需要结构+姿势

权重: OpenPose 0.5, Canny 0.3
```

### OpenPose + Depth

```
姿态(OpenPose) + 立体(Depth)
适用于: 人物+场景

权重: OpenPose 0.5, Depth 0.4
```

## 常见问题

### Q: 姿态检测失败

**A**:
- 确保图像中人物清晰
- 尝试不同的预处理器
- 调整图像尺寸

### Q: 手部变形

**A**:
- 使用 DWPose
- 提高权重
- 添加手部负面提示词
- 考虑使用 hand model

### Q: 姿势保持不够

**A**:
- 提高 Strength 到 0.7+
- 使用更多步数
- 确保提示词不冲突

## 下一步

- [多 ControlNet](./multi-controlnet) - 组合使用
- [Depth 控制](./controlnet-depth) - 深度控制