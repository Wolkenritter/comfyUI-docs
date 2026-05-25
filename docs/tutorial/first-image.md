# 首次图片生成

使用 ComfyUI 默认设置生成你的第一张图片。

## 准备工作

### 1. 下载基础模型

从以下网站下载 SD 1.5 模型：
- [Civitai](https://civitai.com/)
- [Hugging Face](https://huggingface.co/models?other=stable-diffusion)

### 2. 安装模型

将模型文件放入 `ComfyUI/models/checkpoints/` 目录。

### 3. 启动 ComfyUI

运行 ComfyUI，浏览器访问 http://127.0.0.1:8188

## 生成步骤

### 1. 加载模型

在工作流中找到 **Checkpoint Loader** 节点：
1. 点击模型下拉框
2. 选择已安装的模型
3. 等待模型加载完成

### 2. 输入提示词

找到 **CLIP Text Encode** 节点：

#### 正向提示词
```
1girl, beautiful face, detailed eyes, long hair, sunset background
```

#### 负向提示词
```
lowres, bad anatomy, bad hands, text, error
```

### 3. 设置参数

找到 **KSampler** 节点：

| 参数 | 推荐值 | 说明 |
|------|--------|------|
| steps | 25-30 | 采样步数 |
| cfg | 7-8 | 提示词引导强度 |
| sampler | dpmpp_2m | 采样器 |
| scheduler | karras | 调度器 |
| seed | 0 | 随机种子（0=随机） |

### 4. 设置图像尺寸

找到 **Empty Latent Image** 节点：

| 参数 | 推荐值 |
|------|--------|
| width | 512 |
| height | 512 |
| batch_size | 1 |

### 5. 生成

1. 点击右下角「Queue Prompt」或按 Ctrl + Enter
2. 等待生成完成
3. 在预览窗口查看结果

## 完整工作流

```
Checkpoint Loader
      ↓ MODEL
      ↓ CLIP
      ↓ VAE
      ↓
CLIP Text Encode (正向) ──→ CONDITIONING ─┐
      ↑                                   ↓
      │                               KSampler
      │                                   ↓
      │                               VAE Decode
      ↓                                   ↓
CLIP Text Encode (负向) ──→ CONDITIONING    ↓
                                   Preview/Save Image
```

## 参数调整指南

### CFG (Classifier-Free Guidance)

| CFG 值 | 效果 |
|--------|------|
| 3-5 | 提示词影响较弱 |
| 7-9 | 平衡（推荐） |
| 12-15 | 强烈遵循提示词 |

### 采样步数

| 步数 | 效果 | 速度 |
|------|------|------|
| 10-15 | 快速预览 | 快 |
| 20-30 | 平衡 | 中 |
| 40-50 | 高质量 | 慢 |

## 常见问题

### Q: 生成结果是黑色/噪点

**A**: 检查 VAE 是否正确连接，或尝试加载 VAE。

### Q: 显存不足

**A**: 减小分辨率到 512x512，或使用 CPU 版本。

### Q: 生成很慢

**A**: 使用更快的采样器如 euler，减少步数。

## 下一步

- [提示词基础](./prompt-basic) - 学习更好的提示词编写
- [局部重绘](./inpainting) - 修复图像细节