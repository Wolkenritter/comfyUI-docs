# OpenPose ControlNet 教程

学习使用 OpenPose 姿态控制 ControlNet。

## 什么是 OpenPose ControlNet

通过检测人体姿态骨骼来控制生成，保持角色的动作和姿势。

## 适用场景

- 角色姿态控制
- 舞蹈/运动图像
- 角色动作设计
- 保持特定姿势的图像生成

## 安装

### 1. 下载 ControlNet 模型

```
control_v11p_sd15_openpose.pth
```

### 2. OpenPose 预处理模型

安装 [comfyui_controlnet_aux](https://github.com/Fannovel16/comfyui_controlnet_aux)，包含：

- OpenPose 模型
- 身体、面部、手部检测

### 3. 模型安装

- ControlNet：`models/controlnet/`
- OpenPose：`models/openpose/` 或自动下载

## OpenPose 检测类型

| 类型 | 检测内容 |
|------|----------|
| body | 身体骨骼 |
| face | 面部关键点 |
| hand | 手部姿态 |
| full | 完整（身体+面部+手） |

## 工作流

```
┌─────────────────┐
│ Checkpoint      │── MODEL
└─────────────────┘        ↓
                           ↓
┌─────────────────┐   ┌──────────────┐   ┌────────────┐
│ Load Image      │→→│ OpenPose    │→→│ ControlNet │
│ (参考图像)      │   │  Detect     │   │   Apply    │──CONDITIONING
└─────────────────┘   └──────────────┘   └────────────┘
                                                  ↓
┌─────────────────┐                           ┌────────────┐
│ CLIP Text Encode│──→ CONDITIONING ─────────→│ KSampler   │
└─────────────────┘                              └────────────┘
```

## 节点连接

### 1. OpenPose 检测

```
Load Image → DW OpenPose Loader → Apply OpenPose
```

### 2. Apply ControlNet

```
OpenPose → Apply ControlNet (openpose)
```

### 3. 采样生成

```
CLIP → Conditioning → KSampler
```

## 参数设置

### OpenPose 检测

| 参数 | 说明 |
|------|------|
| model_name | 模型选择 |

### ControlNet strength

| 值 | 效果 |
|----|------|
| 0.7-0.9 | 强控制 |
| 0.9-1.2 | 精确控制 |

## 提示词设置

### 示例：角色生成

```
正向：
1girl, young woman, beautiful face, detailed eyes,
wearing casual outfit, full body, dynamic pose

负向：
deformed, extra limbs, bad anatomy, blurry, low quality
```

### 重点描述

- 描述角色外观（发色、服装）
- 描述场景
- 使用负面提示词避免畸形

## 应用场景

### 场景一：动作设计

```
1. 上传参考动作图像
2. 检测姿态
3. 生成不同服装/风格的角色
```

### 场景二：舞蹈图像

```
1. 参考舞蹈姿势
2. 保持姿态生成
3. 添加背景和特效
```

### 场景三：角色换装

```
1. 检测原始姿态
2. 改变服装/风格
3. 保持动作不变
```

## 与其他 ControlNet 组合

### OpenPose + Depth

```
姿态（OpenPose）+ 空间（Depth）
```

### OpenPose + Canny

```
姿态（OpenPose）+ 轮廓（Canny）
```

### 完整组合

```
OpenPose → ControlNet 1 ─┐
Depth → ControlNet 2 ─┼→ Conditioning → KSampler
Canny → ControlNet 3 ─┘
```

## 常见问题

### Q: OpenPose 检测不准确

**A**: 
- 确保图像中人物清晰
- 避免遮挡过多
- 使用全身图像

### Q: 手部/面部变形

**A**: 
- 使用 face_detailer 修复面部
- 增加手部检测
- 提高 ControlNet strength

### Q: 姿态不完全一致

**A**: 
- 提高 strength
- 增加采样步数
- 调整提示词

## 下一步

- [多 ControlNet 组合](./multi-controlnet) - 组合多种 ControlNet
- [Flux 文生图](./flux-t2i) - Flux 模型使用