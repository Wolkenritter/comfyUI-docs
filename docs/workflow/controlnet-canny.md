# Canny 边缘控制工作流

使用 Canny 边缘检测控制图像生成。

## Canny 边缘控制

Canny 通过检测图像边缘来控制生成，保持轮廓和线条结构。

### 适用场景

| 场景 | 说明 |
|------|------|
| 建筑转图像 | 保持建筑线条 |
| 产品设计 | 保持产品轮廓 |
| 草图上色 | 线稿转彩色 |
| 结构保持 | 保持图像结构 |

## 工作流结构

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ CannyEdge   │
│ (参考图)    │    │ Detector    │
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

### Canny Edge Detector

预处理边缘：

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| low_threshold | 低阈值 | 100-150 |
| high_threshold | 高阈值 | 200-250 |

### 阈值调整

| 阈值设置 | 效果 |
|----------|------|
| 低阈值↑ 高阈值↑ | 更多边缘，细节丰富 |
| 低阈值↓ 高阈值↓ | 简化边缘，主要线条 |
| 差距大 | 过滤噪声，保留强边缘 |
| 差距小 | 保留更多细节 |

### 低阈值 vs 高阈值

```
low_threshold: 100
high_threshold: 200

检测规则:
- 像素 > high: 强边缘，保留
- 像素 < low: 非边缘，去除
- 像素在之间: 连接到强边缘则保留
```

## 预设配置

### 建筑线条

```
threshold: 100/200
效果: 清晰建筑轮廓
适用: 建筑照片、图纸
```

### 产品轮廓

```
threshold: 50/150
效果: 精细产品边缘
适用: 产品设计、logo
```

### 草图线稿

```
threshold: 10/100
效果: 保留所有线条
适用: 手绘线稿、涂鸦
```

### 简化线条

```
threshold: 150/250
效果: 主要线条
适用: 快速草图、示意图
```

## 提示词技巧

### 风格配合

```
参考图: 建筑线条
提示词: modern architecture, concrete building, glass facade, photo realistic

参考图: 产品线稿
提示词: sleek product design, white background, professional photography
```

### 内容延伸

```
边缘: 人物轮廓
提示词: 1girl in elegant dress, beautiful face, detailed background

边缘只提供结构，内容由提示词决定
```

## 高级技巧

### 多边缘叠加

```
1. 多次 Canny 检测
2. 不同阈值
3. 合并边缘图
4. 更丰富的控制
```

### 边缘后处理

```
Canny 输出 → Edge Soften → 使用

效果: 边缘更柔和，减少硬线条
```

### 条件控制

```
1. 多个 ControlNet
2. 不同权重
3. 混合使用
4. 灵活控制
```

## 参数调整

### Strength 调整

| 强度 | 效果 |
|------|------|
| 0.3-0.5 | 灵活创意，边缘引导 |
| 0.5-0.7 | 平衡控制 |
| 0.7-1.0 | 严格还原边缘 |

### 步数调整

| 场景 | Steps | CFG |
|------|-------|-----|
| 快速预览 | 15-20 | 7 |
| 标准质量 | 20-30 | 8 |
| 高质量 | 30-40 | 9-10 |

## 应用示例

### 线稿上色

```
1. 准备线稿图
2. Canny 检测线条
3. 提示词描述颜色和风格
4. 生成彩色图像

提示词示例:
hand drawn illustration, vibrant colors, flat design style
```

### 建筑转效果图

```
1. 加载建筑线图
2. 调整阈值获得清晰线条
3. 提示词: modern office building, glass and steel, sunny day
4. 生成效果图
```

### 产品渲染

```
1. 产品线稿
2. Canny 检测轮廓
3. 提示词: professional product photography, white background, studio lighting
4. 生成产品图
```

## 常见问题

### Q: 边缘太杂乱

**A**: 提高阈值，使用 150/250。

### Q: 边缘丢失太多

**A**: 降低阈值，使用 50/150。

### Q: 生成与边缘不符

**A**: 
- 提高 ControlNet Strength
- 调整提示词
- 检查阈值设置

## 下一步

- [Depth 工作流](./controlnet-depth) - 深度控制
- [OpenPose 工作流](./controlnet-openpose) - 姿态控制