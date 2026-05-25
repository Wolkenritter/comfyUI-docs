# Impact Pack 使用指南

Impact Pack 是 ComfyUI 最受欢迎的扩展包之一，提供大量图像处理和检测节点。

## 功能概览

Impact Pack 主要包含两大模块：

| 模块 | 功能 |
|------|------|
| **Impact节点** | 图像处理、区域检测、遮罩操作 |
| **AnimateDiff** | 动画生成、运动效果 |

## 核心节点详解

### 1. FaceDetailer

最常用的面部修复节点，自动检测人脸并单独重绘。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| image | IMAGE | 输入图像 |
| mask | MASK | 遮罩（可选） |
| guide_image | IMAGE | 参考图像（可选） |

#### 参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| detection_model | 检测模型 | bbox/face detailer |
| sam_model | SAM 模型 | sam_vit_b |
| bbox_threshold | 检测阈值 | 0.5 |
| bbox_dilation | 扩展范围 | 10 |
| crop_size | 裁剪尺寸 | 512 |
| crop_factor | 裁剪倍数 | 3.0 |

#### 工作流

```
Load Image → FaceDetailer → Save Image
                    ↑
              KSampler 配置
              (针对面部优化)
```

### 2. BboxDetectorForEach

区域检测节点，用于检测图像中的特定对象。

#### 检测模型

| 模型 | 适用场景 |
|------|----------|
| bbox/face | 人脸检测 |
| bbox/person | 人物检测 |
| bbox/multi | 多目标检测 |
| yolox/hand | 手部检测 |

#### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| crops | IMAGE | 裁剪的图像列表 |
| masks | MASK | 对应的遮罩列表 |
| cropped_latents | LATENT | 裁剪的潜在表示 |

### 3. SAMDetector

使用 SAM (Segment Anything Model) 进行精确分割。

#### 使用方法

```
输入图像 → SAMDetector → Segments Mask
                      ↓
              选择分割区域
```

#### 交互式选择

1. 启用 "selectSAMDetector" 节点
2. 在图像上点击选择区域
3. 输出选中区域的遮罩

### 4. SegmentsMask

从 SAM 输出创建遮罩。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| segments | SEGMENTS | SAM 输出 |
| image | IMAGE | 参考图像 |
| operation | STRING | 操作类型 |

#### 操作模式

| 模式 | 说明 |
|------|------|
| COMBINE | 合并所有区域 |
| INDIVIDUAL | 单独处理每个区域 |
| RANGE | 处理指定范围 |

### 5. KSampler (Advanced)

增强版采样器，支持更多参数。

#### 额外参数

| 参数 | 说明 |
|------|------|
| noise_type | 噪声类型 |
| sigma_adjustment | sigma 调整 |
| loop_setting | 循环设置 |

## 工作流示例

### 面部修复工作流

```
1. Load Image
      ↓
2. FaceDetailer
   - detection: face
   - crop_size: 512
   - 内部: 自动检测人脸 → 裁剪 → KSampler → 合并
      ↓
3. Save Image
```

### 多人物处理

```
1. Load Image (多人图像)
      ↓
2. BboxDetector (person)
      ↓
3. ForEach BBox → Detailer → Merge
      ↓
4. Save Image
```

### 对象移除

```
1. Load Image
      ↓
2. SAMDetector → SegmentsMask
      ↓
3. Inpaint (选中的区域)
      ↓
4. Merge → Save Image
```

## AnimateDiff 模块

### AnimateDiff Generate

生成 AI 动画。

#### 参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| frames | 帧数 | 16-32 |
| fps | 每秒帧数 | 8-16 |
| motion_lora | 运动 LoRA | 自选 |

### Motion LoRA

| LoRA | 效果 |
|------|------|
| motion_lora_speed | 速度变化 |
| motion_lora_pan | 平移效果 |
| motion_lora_zoom | 缩放效果 |

## 安装方法

### 通过 ComfyUI Manager

1. 打开 Manager
2. 搜索 "Impact Pack"
3. 点击安装

### 手动安装

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
cd ComfyUI-Impact-Pack
# 安装依赖
pip install -r requirements.txt
```

### 依赖模型

需要下载以下模型到对应目录：

```
models/
├── sam/
│   ├── sam_vit_b.pth
│   └── sam_vit_h.pth
├── ultralytics/
│   └── yolov8n.pt
└── bbox/
    └── face_detection.yolov4.onnx
```

## 常见问题

### Q: 检测不到人脸

**A**:
1. 检查检测模型是否正确加载
2. 调整 bbox_threshold（降低到 0.3）
3. 确认图像中的人脸足够清晰

### Q: 显存不足

**A**:
1. 减小 crop_size 到 384
2. 降低 crop_factor 到 2.0
3. 逐个人脸处理

### Q: SAM 分割不准确

**A**:
1. 使用更高精度的 SAM 模型
2. 调整 threshold
3. 多次点击选择正确区域

## 最佳实践

### 参数调整指南

| 场景 | crop_size | crop_factor | denoise |
|------|-----------|-------------|---------|
| 大头照 | 512 | 2.0 | 0.4 |
| 全身照 | 512 | 3.0 | 0.5 |
| 多人合照 | 384 | 2.5 | 0.4 |

### 质量优化

1. **多次处理**：面部 → 眼睛 → 牙齿 逐步处理
2. **参考图像**：使用高质量参考图
3. **细节提示词**：针对细节优化提示词

### 性能优化

1. 减少不必要的 crop_size
2. 使用低精度模型进行预览
3. 批量处理时限制并发数

## 下一步

- [自定义节点开发](./development) - 开发自己的节点
- [工作流示例](/workflow/) - 更多实用案例