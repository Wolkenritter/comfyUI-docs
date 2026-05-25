# 图像输入输出节点

图像加载、保存和相关操作节点。

## 节点列表

### 输入节点

| 节点 | 说明 |
|------|------|
| LoadImage | 加载图像 |
| LoadImageMask | 加载图像并提取遮罩 |
| BatchLoadImage | 批量加载图像 |

### 输出节点

| 节点 | 说明 |
|------|------|
| SaveImage | 保存图像 |
| ImagePreview | 预览图像 |
| PreviewLabel | 带标签的预览 |

### 图像处理

| 节点 | 说明 |
|------|------|
| ImageScale | 缩放图像 |
| ImageCrop | 裁剪图像 |
| ImagePad | 填充图像 |

## LoadImage

加载图像文件。

### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| IMAGE | IMAGE | 图像数据 |
| MASK | MASK | Alpha 通道作为遮罩 |

### 支持格式

| 格式 | 支持 |
|------|------|
| PNG | ✅ |
| JPG/JPEG | ✅ |
| WEBP | ✅ |
| BMP | ✅ |
| TIFF | ✅ |

### 使用

```
LoadImage → VAEEncode → KSampler
     MASK → Mask 节点
```

### 遮罩提取

```
输入图像有 Alpha 通道时:
- 白色区域 = MASK 白色
- 透明区域 = MASK 黑色
```

## LoadImageMask

加载图像并提取遮罩。

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| channel | SELECT | MASK 通道 (RGB/A) |

### 通道选择

| 通道 | 说明 |
|------|------|
| G | 绿色通道作为遮罩 |
| B | 蓝色通道作为遮罩 |
| A | Alpha 通道作为遮罩 |

## SaveImage

保存图像到文件。

### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| images | IMAGE | 要保存的图像 |
| filename_prefix | STRING | 文件名前缀 |

### 输出

无直接输出，结果保存到 `output` 目录。

### 文件命名

```
filename_prefix: my_image
结果: my_image_00001.png, my_image_00002.png, ...
```

### 配置

```javascript
// ComfyUI 设置
{
    "output_path": "自定义路径",
    "file_format": "png"  // 或 jpg, webp
}
```

## ImagePreview

预览图像（不保存）。

### 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| images | IMAGE | 预览图像 |

### 特点

```
- 直接在界面显示
- 不保存到文件
- 快速预览结果
```

## ImageScale

缩放图像尺寸。

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| method | SELECT | 缩放方法 |
| width | INT | 目标宽度 |
| height | INT | 目标高度 |

### 缩放方法

| 方法 | 特点 |
|------|------|
| nearest | 快速，质量低 |
| bilinear | 平衡 |
| lanczos | 质量高，速度慢 |

### 快捷设置

| 设置 | 说明 |
|------|------|
| width/height | 指定具体尺寸 |
| Resize | 按比例缩放 |
| Resize to Fit | 适应尺寸，保持比例 |

## ImageCrop

裁剪图像。

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| x | INT | 左上角 X |
| y | INT | 左上角 Y |
| width | INT | 宽度 |
| height | INT | 高度 |

### 常用场景

```
- 移除边缘
- 聚焦主体
- 调整构图
```

## 图像格式说明

### PNG

```
优点: 无损，支持透明
缺点: 文件较大
适用: 最终输出，需要透明
```

### JPG

```
优点: 文件小
缺点: 有损，不支持透明
适用: 快速预览，照片
```

### WEBP

```
优点: 质量好，文件小
缺点: 兼容性稍差
适用: 网页，演示
```

## 工作流示例

### 基础输出

```
KSampler → VAEDecode → SaveImage(filename="output")
```

### 预览 + 保存

```
KSampler → VAEDecode → ImagePreview
                            → SaveImage
```

### 图像处理链

```
LoadImage → ImageScale → ImageCrop → VAEEncode → KSampler
```

## 常见问题

### Q: 保存路径在哪

**A**: 默认在 `ComfyUI/output/` 目录，可通过设置修改。

### Q: 透明背景丢失

**A**: 保存为 PNG 格式可保留透明通道。

### Q: 批量保存

**A**: 调整 batch_size，文件名会自动编号。

## 下一步

- [KSampler](../core/sampler) - 采样器
- [VAEEncode](../core/latent) - 编码