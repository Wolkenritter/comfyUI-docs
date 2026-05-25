# 图像节点

图像节点用于处理图像的输入、输出和转换操作。

## 图像加载

### Load Image

从文件系统加载图像。

#### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| IMAGE | IMAGE | 加载的图像 |
| MASK | MASK | Alpha 通道（如果有） |

#### 使用方法

1. 点击节点上的 "Load Image" 按钮
2. 选择图像文件
3. 支持格式：PNG, JPG, WEBP, BMP

#### 支持的图像格式

| 格式 | 扩展名 | 支持 Alpha |
|------|--------|------------|
| PNG | .png | ✅ |
| JPEG | .jpg, .jpeg | ❌ |
| WEBP | .webp | ✅ |
| BMP | .bmp | ❌ |

### 批量加载

使用图像序列功能加载多帧：

```
Load Image (image_001.png → image_050.png)
```

## 图像保存

### Save Image

保存图像到文件系统。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| images | IMAGE | 要保存的图像 |
| filename_prefix | STRING | 文件名前缀 |

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| filename_prefix | STRING | ComfyUI | 文件名前缀 |

#### 输出路径

```
ComfyUI/output/
├── ComfyUI_00001.png
├── ComfyUI_00002.png
└── ...
```

### Save Image (with metadata)

保存图像并包含工作流元数据。

### Image Batch

将多张图像合并为批次。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| images | IMAGE | 图像列表 |
| batch_index | INT | 批次索引 |

## 图像缩放

### Image Scale

调整图像分辨率。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| image | IMAGE | 输入图像 |
| width | INT | 目标宽度 |
| height | INT | 目标高度 |

#### 缩放模式

| 模式 | 说明 |
|------|------|
| nearest | 最近邻（最快） |
| bilinear | 双线性 |
| bicubic | 双三次 |
| lanczos | Lanczos（最高质量） |

#### 长边缩放

使用 `Image Scale: Scale By` 节点按比例缩放：

```
scale_by: 0.5  # 缩小一半
scale_by: 2.0  # 放大两倍
```

### Image Scale (by ratio)

按比例缩放：

| 比例 | 效果 |
|------|------|
| 0.25 | 缩小到 1/4 |
| 0.5 | 缩小一半 |
| 1.0 | 原始大小 |
| 2.0 | 放大两倍 |

## 图像裁剪

### Image Crop

裁剪图像的指定区域。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| image | IMAGE | 输入图像 |
| width | INT | 裁剪宽度 |
| height | INT | 裁剪高度 |
| x | INT | 左上角 X 坐标 |
| y | INT | 左上角 Y 坐标 |

### Image Crop: Region

通过拖拽选择区域裁剪。

## 图像合成

### Image Blend

混合两张图像。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| image1 | IMAGE | 第一张图像 |
| image2 | IMAGE | 第二张图像 |
| blend_factor | FLOAT | 混合因子 (0-1) |

#### 混合模式

| 模式 | 效果 |
|------|------|
| normal | 线性混合 |
| multiply | 正片叠底 |
| screen | 滤色 |
| overlay | 叠加 |

### Image Concat

拼接多张图像。

#### 拼接方向

- **水平拼接**: side by side
- **垂直拼接**: top to bottom

```
Image A + Image B = [A][B]
```

## 图像转换

### Convert Image to/from ....

| 节点 | 转换类型 |
|------|----------|
| Image To Tensor | Image → Tensor |
| Tensor To Image | Tensor → Image |
| Image To Latent | Image → Latent |
| Latent To Image | Latent → Image |

### Image Batch To Image List

将批次图像转换为图像列表。

### Image List To Image Batch

将图像列表转换为批次。

## 图像调整

### Image Adjust

调整图像的基本属性。

| 参数 | 范围 | 说明 |
|------|------|------|
| brightness | -1.0 ~ 1.0 | 亮度 |
| contrast | -1.0 ~ 1.0 | 对比度 |
| saturation | -1.0 ~ 1.0 | 饱和度 |
| hue | -0.5 ~ 0.5 | 色相 |

### Image Sharpen

锐化图像。

| 参数 | 范围 | 说明 |
|------|------|------|
| sharpness | 0.0 ~ 3.0 | 锐化强度 |

## 图像通道

### Split Image Channel

分离图像通道。

#### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| red | IMAGE | 红色通道 |
| green | IMAGE | 绿色通道 |
| blue | IMAGE | 蓝色通道 |
| alpha | IMAGE | Alpha 通道 |

### Combine Image Channels

合并图像通道。

## 遮罩 (Mask) 操作

### Create Mask

创建纯色遮罩。

#### 输出

输出纯白或纯黑遮罩。

### Inpaint Mask

图像修复遮罩处理。

#### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| pixels | IMAGE | 原图像素 |
| mask | MASK | 修复区域遮罩 |
| float | FLOAT | 遮罩值 |

### Mask To Image

将遮罩转换为图像。

### Image To Mask

从 Alpha 通道提取遮罩。

## 常用工作流示例

### 图像缩放工作流

```
Load Image → Image Scale → Save Image
            (width=1024)
```

### 图像修复工作流

```
Load Image → VAE Encode (mask) → KSampler → VAE Decode → Save Image
                                        ↑
                              Empty Latent Image
```

### 批量处理工作流

```
Load Image → Image Scale → Image Batch → Save Image
```

### 图像拼接工作流

```
Load Image A ──→ Image Concat ──→ Save Image
Load Image B ──↗
```

## 图像质量优化

### 建议的输出分辨率

| 用途 | 分辨率 |
|------|--------|
| 社交媒体 | 1024 x 1024 |
| 打印 | 2048 x 2048+ |
| 预览 | 512 x 512 |
| 缩略图 | 256 x 256 |

### 避免的分辨率

| 分辨率 | 原因 |
|--------|------|
| 512 x 512 | 可能出现网格 |
| 非常规比例 | 可能变形 |
| > 2048 (SD 1.x) | 显存不足 |

### 显存优化

1. 使用 tiled VAE 处理超大图像
2. 及时释放不需要的预览
3. 批量处理时控制批次大小

## 下一步

- [采样器节点](./samplers) - 采样器详解
- [模型节点](./models) - 模型管理
