# Impact Pack 节点

ComfyUI 强大的人像处理和检测节点包。

## 节点概述

Impact Pack 包含多个高级节点，主要用于：
- 面部细节修复
- 物体检测分割
- 遮罩处理

## 安装

### 方法一：Manager

```
1. ComfyUI Manager → 搜索 "Impact"
2. 安装 ComfyUI-Impact-Pack
3. 重启
```

### 方法二：手动

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
```

## 核心节点

### FaceDetailer

面部细节修复节点。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| image | IMAGE | 输入图像 |
| model | MODEL | 修复模型 |
| clip | CLIP | 文本编码 |
| vae | VAE | VAE |
| mask | MASK | 遮罩（可选） |
| bbox_detector | BBOX_DETECTOR | 检测器 |

#### 参数

| 参数 | 说明 | 推荐 |
|------|------|------|
| guide_size | 引导尺寸 | 512 |
| feather | 羽化 | 5-10 |
| detection_hint | 检测提示 | face |
| dilation | 膨胀 | 10 |

#### 工作流

```
LoadImage → FaceDetailer → SaveImage
     SAM → bbox_detector
     
     CLIP → clip
     Checkpoint → model
     VAE → vae
```

### SAM (Segment Anything)

物体检测和分割。

#### 模型

| 模型 | 说明 |
|------|------|
| sam_vit_b | 基础版，快 |
| sam_vit_l | 大版，精确 |
| sam_hq_vit_h | 高质量 |

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| image | IMAGE | 输入图像 |
| mask | MASK | 提示遮罩（可选） |
| bbox | BBOX | 边界框（可选） |

#### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| mask | MASK | 分割结果 |
| cropped_image | IMAGE | 裁剪区域 |

### SegmentsMask

从分割结果创建遮罩。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| segments | SEGMENTS | 分割结果 |
| seg_idx | INT | 选择第几个分割 |

#### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| mask | MASK | 单个分割的遮罩 |

### BBOXDetector

边界框检测。

#### 可用检测器

| 检测器 | 用途 |
|--------|------|
| face_yolov8s | 面部检测 |
| person_yolov8n | 人物检测 |
| sam2 | 通用分割 |

### Deduplicator

去除重叠的检测结果。

#### 模式

| 模式 | 说明 |
|------|------|
| None | 不去重 |
| Merge | 合并重叠 |
| LetterBox | 保留最大 |

## 典型工作流

### 面部修复

```
Input Image
    ↓
SAM Detector → Face Regions
    ↓
FaceDetailer (each face)
    ↓
Merge Results
    ↓
Output
```

### 物体移除

```
Input Image
    ↓
SAM → Select Object
    ↓
SegmentsMask → Object Mask
    ↓
Inpaint with background
    ↓
Output
```

## 参数调整

### FaceDetailer 质量

| 场景 | guide_size | steps | CFG |
|------|------------|-------|-----|
| 快速 | 256 | 15 | 7 |
| 标准 | 512 | 25 | 8 |
| 高质量 | 768 | 35 | 9 |

### SAM 检测精度

| 模式 | 精度 | 速度 |
|------|------|------|
| vit_b | 中 | 快 |
| vit_l | 高 | 中 |
| vit_h | 最高 | 慢 |

## 常见问题

### Q: 检测不到人脸

**A**:
- 检查图像质量
- 使用更高精度模型
- 调整 detection_hint

### Q: 显存不足

**A**:
- 减小 guide_size
- 使用更小的 SAM 模型
- 分块处理

### Q: 修复效果不好

**A**:
- 提高 guide_size
- 增加 steps
- 调整遮罩范围

## 下一步

- [ControlNet 节点](./controlnet-nodes) - 结构控制
- [图层混合](./layer-style) - 图层操作