# 局部重绘教程

学习如何在 ComfyUI 中进行局部重绘（Inpainting）。

## 什么是局部重绘

局部重绘允许你只修改图像的特定区域，保持其他部分不变。

## 使用场景

- 修复手指、面部等细节问题
- 添加或替换特定元素
- 修改背景
- 去除不需要的对象

## 方法一：遮罩编辑器

### 1. 加载图像

使用 Load Image 节点加载需要修改的图像。

### 2. 打开遮罩编辑器

1. 点击 Load Image 节点输出的图像
2. 选择「遮罩编辑器」
3. 使用画笔涂抹要修改的区域

### 3. 白色=重绘区域

遮罩中白色区域将被重绘，黑色区域保持不变。

## 方法二：使用遮罩节点

### 节点连接

```
Load Image (带遮罩)
      ↓ IMAGE
VAE Encode (Inpaint)
      ↓ LATENT
KSampler
      ↓ LATENT
VAE Decode
      ↓ IMAGE
Save Image
```

### Inpaint VAE Encode 节点

使用 Inpaint 版本的 VAE 编码：
- pixels: 原图
- mask: 遮罩
- vae: 模型 VAE

## 关键参数

### KSampler 的 denoise 参数

| denoise 值 | 效果 |
|------------|------|
| 0.1-0.3 | 轻微调整 |
| 0.4-0.6 | 中等变化 |
| 0.7-0.9 | 较大重绘 |
| 1.0 | 完全重绘 |

### 推荐设置

| 场景 | denoise | 说明 |
|------|---------|------|
| 微调 | 0.2-0.4 | 保留原图风格 |
| 修复 | 0.5-0.7 | 中等修改 |
| 替换 | 0.8-0.9 | 大幅改变 |

## 提示词设置

### 重点描述重绘区域

```
# 描述你想在重绘区域看到的内容
detailed hands, correct anatomy, natural pose
```

### 负向提示词

```
# 避免的问题
deformed hands, extra fingers, blurry, low quality
```

## 技巧

### 1. 边缘羽化

使用带羽化边缘的遮罩可以获得更自然的过渡。

### 2. 略微扩大区域

遮罩区域比实际需要略大，避免接缝。

### 3. 多次重绘

复杂修改可以分步骤进行：
1. 大范围低 denoise
2. 小范围高 denoise

### 4. 参考原图

使用图生图模式，denoise 设置较低。

## 使用 Impact Pack

[Impact Pack](https://github.com/ltdrdata/ComfyUI-Impact-Pack) 提供更强大的局部重绘功能：

### FaceDetailer

自动检测并重绘人脸：
1. 检测人脸区域
2. 裁剪放大
3. 局部重绘
4. 合并回原图

### Segments Mask

基于 SAM 分割的遮罩工具。

## 常见问题

### Q: 重绘区域有接缝

**A**: 扩大遮罩，使用羽化边缘，降低 denoise。

### Q: 重绘不自然

**A**: 调整提示词，使用参考图像，设置较低的 denoise。

### Q: 颜色不匹配

**A**: 使用 Color Correction 节点调整。

## 下一步

- [扩图教程](./outpainting) - 扩展图像边界
- [图像放大](./upscale) - 提升图像质量