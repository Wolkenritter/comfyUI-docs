# LayerStyle 节点

Photoshop 风格的图层混合节点。

## 节点概述

LayerStyle 提供类似 Photoshop 的图层效果：
- 图层混合模式
- 模糊和锐化
- 颜色调整
- 蒙版操作

## 安装

### 方法一：Manager

```
1. ComfyUI Manager → 搜索 "LayerStyle"
2. 安装 ComfyUI-layer-style
3. 重启
```

### 方法二：手动

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/lj7900/ComfyUI-LayerStyle.git
```

## 核心节点

### LayerColor

颜色调整图层。

#### 模式

| 模式 | 说明 |
|------|------|
| brightness | 亮度 |
| contrast | 对比度 |
| saturation | 饱和度 |
| hue | 色相 |
| invert | 反相 |
| exposure | 曝光 |
| gamma | 伽马 |
| temperature | 色温 |

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| mode | SELECT | 调整模式 |
| value | FLOAT | 调整值 |

### LayerBlur

模糊效果。

#### 模糊类型

| 类型 | 说明 |
|------|------|
| gaussian | 高斯模糊 |
| directional | 方向模糊 |
| radial | 径向模糊 |

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| blur_radius | INT | 模糊半径 |
| sigma | FLOAT | 模糊强度 |

### LayerMask

蒙版操作。

#### 操作

| 操作 | 说明 |
|------|------|
| add | 添加蒙版 |
| subtract | 减去蒙版 |
| intersect | 交集 |
| invert | 反转 |

#### 通道

| 通道 | 说明 |
|------|------|
| red | 红色通道 |
| green | 绿色通道 |
| blue | 蓝色通道 |
| alpha | Alpha 通道 |

## 混合模式

### 常用混合

| 模式 | 效果 |
|------|------|
| normal | 正常 |
| multiply | 正片叠底 |
| screen | 滤色 |
| overlay | 叠加 |
| soft_light | 柔光 |
| hard_light | 强光 |
| difference | 差值 |
| exclusion | 排除 |

### 混合示例

| 原图 | 叠加层 | multiply | screen | overlay |
|------|--------|----------|--------|----------|
| 暗 | 暗 | 更暗 | 亮 | 增对比 |
| 亮 | 亮 | 正常 | 更亮 | 增对比 |

## 典型工作流

### 照片调色

```
LoadImage
    ↓
LayerColor(brightness: 10, contrast: 15)
    ↓
LayerColor(saturation: 20)
    ↓
SaveImage
```

### 柔化效果

```
LoadImage
    ↓
LayerBlur(gaussian, sigma: 3)
    ↓
ImageBlend multiply (opacity: 0.3)
    ↓
SaveImage
```

### 抠图合成

```
Foreground Image
    ↓
LayerMask(subtract: Background Mask)
    ↓
ImageBlend screen (Background)
    ↓
SaveImage
```

## 颜色调整详解

### 亮度

```
value: -100 到 +100
-100: 全黑
0: 不变
+100: 全白
```

### 对比度

```
value: -100 到 +100
-100: 无对比（灰色）
0: 不变
+100: 极高对比
```

### 饱和度

```
value: -100 到 +100
-100: 灰度
0: 不变
+100: 超饱和
```

### 色温

```
value: -100 到 +100
-100: 冷色（偏蓝）
0: 不变
+100: 暖色（偏黄）
```

## 蒙版工具

### 创建蒙版

```
LoadImage → ImageToMask → Mask
```

### 蒙版运算

```javascript
// 添加
LayerMask(mask_a) add LayerMask(mask_b)

// 减去
LayerMask(mask_a) subtract LayerMask(mask_b)

// 交集
LayerMask(mask_a) intersect LayerMask(mask_b)
```

### 蒙版羽化

```
Mask → FeatherMask(border: 20) → 应用
```

## 常见问题

### Q: 混合效果不明显

**A**:
- 增加混合强度
- 调整 opacity
- 尝试不同混合模式

### Q: 模糊太慢

**A**: 减小模糊半径，使用快速预览。

### Q: 蒙版不对

**A**: 检查蒙版通道是否正确（RGB/A）。

## 下一步

- [Impact Pack](./impact-pack) - 人像处理
- [实用工具](./utils) - 更多工具