# ControlNet 模型资源

整理了常用的 ControlNet 模型下载资源。

## 下载平台

| 平台 | 说明 | 地址 |
|------|------|------|
| 🤗 Hugging Face | 官方模型 | [官网](https://huggingface.co/models) |
| 🏠 魔搭社区 | 国内镜像，速度快 | [ModelScope](https://www.modelscope.cn/home) |
| 🎨 Civitai | 社区模型 | [Civitai](https://civitai.com) |

> 💡 推荐使用[魔搭社区](https://www.modelscope.cn/home)下载，访问速度快，国内用户友好。

## SD1.5 ControlNet

### v1.1 系列（推荐）

| 模型 | 用途 | 下载 |
|------|------|------|
| canny | 边缘检测 | [HuggingFace](https://huggingface.co/lllyasviel/ControlNet-v1-1) / [魔搭](https://www.modelscope.cn/home) |
| depth | 深度图 | 同上 |
| openpose | 姿态 | 同上 |
| normal | 法线 | 同上 |
| scribble | 涂鸦 | 同上 |
| hed | 柔和边缘 | 同上 |

### v1.0 系列

| 模型 | 用途 | 下载 |
|------|------|------|
| canny | 边缘 | [HuggingFace](https://huggingface.co/lllyasviel/control_v11p_sd15_canny) |
| depth | 深度 | [HuggingFace](https://huggingface.co/lllyasviel/control_v11p_sd15_depth) |

## SDXL ControlNet

### 官方版本

| 模型 | 用途 | 下载 |
|------|------|------|
| canny | 边缘 | [HuggingFace](https://huggingface.co/diffusers/controlnet-canny-sdxl-1.0) / [魔搭](https://www.modelscope.cn/home) |
| depth | 深度 | [HuggingFace](https://huggingface.co/diffusers/controlnet-depth-sdxl-1.0) / [魔搭](https://www.modelscope.cn/home) |

### 社区版本

| 模型 | 说明 | 下载 |
|------|------|------|
| canny-large | 高精度 | [Civitai](https://civitai.com/models/158393) |
| marker | 标记检测 | [Civitai](https://civitai.com/models/158396) |

## Flux ControlNet

### XLabs 版本

| 模型 | 用途 | 下载 |
|------|------|------|
| canny | 边缘 | [HuggingFace](https://huggingface.co/xtrec/Flux-ControlNet-Canny) / [魔搭](https://www.modelscope.cn/home) |
| depth | 深度 | [HuggingFace](https://huggingface.co/xtrec/Flux-ControlNet-Depth) / [魔搭](https://www.modelscope.cn/home) |
| canny-v2 | 升级版 | [HuggingFace](https://huggingface.co/xtrec/Flux-ControlNet-Canny-v2) / [魔搭](https://www.modelscope.cn/home) |

### InstantX 版本

| 模型 | 用途 | 下载 |
|------|------|------|
| canny | 边缘 | [HuggingFace](https://huggingface.co/InstantX/SDXL-ControlNet-Canny) |

## 安装位置

```
ComfyUI/models/controlnet/
```

## 预处理模型

部分 ControlNet 需要预处理模型：

### 安装 comfyui_controlnet_aux

通过 Manager 安装 `comfyui_controlnet_aux`，自动包含：

- Canny
- Depth (MiDaS)
- OpenPose
- Normal
- 等等

## 版本对应

| 模型版本 | 适用基础模型 |
|----------|--------------|
| SD1.5 v1.1 | SD 1.5 |
| SD2.1 | SD 2.x |
| SDXL | SDXL |
| Flux | Flux 模型 |

## 常见问题

### Q: ControlNet 不工作

**A**: 确认模型版本与基础模型匹配。

### Q: 需要预处理模型

**A**: 安装 `comfyui_controlnet_aux` 节点包。

### Q: 显存不足

**A**: 使用 SD1.5 版本，减小图像尺寸。

## 下一步

- [ControlNet 教程](../tutorial/advanced/controlnet) - 使用教程
- [LoRA 模型](./lora-models) - 风格模型