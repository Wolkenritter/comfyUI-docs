# Stable Diffusion 模型资源

整理了常用的 Stable Diffusion 模型下载资源。

## 下载平台

| 平台 | 说明 | 地址 |
|------|------|------|
| 🤗 Hugging Face | 官方模型 | [官网](https://huggingface.co/models) |
| 🏠 魔搭社区 | 国内镜像，速度快 | [ModelScope](https://www.modelscope.cn/home) |
| 🎨 Civitai | 社区模型 | [Civitai](https://civitai.com) |

> 💡 推荐使用[魔搭社区](https://www.modelscope.cn/home)下载，访问速度快，国内用户友好。

## SD 1.5 系列

### 官方模型

| 模型 | 版本 | 大小 | 说明 |
|------|------|------|------|
| SD 1.5 | pruned | ~4GB | 最通用 |
| SD 1.5 | full | ~7GB | 完整版本 |
| SD 1.5 inpainting | - | ~4GB | 专用修复 |

### 下载地址

- [Hugging Face Stable Diffusion](https://huggingface.co/stable-diffusion-v1-4)
- [魔搭社区 SD 1.5](https://www.modelscope.cn/home) - 国内高速下载
- [SD 1.5 on Civitai](https://civitai.com/models/1/stable-diffusion-1-5)

## SD 2.x 系列

### SD 2.1

| 模型 | 版本 | 大小 |
|------|------|------|
| SD 2.1 768 | pruned | ~5GB |
| SD 2.1 512 | pruned | ~5GB |

### 下载地址

- [Hugging Face SD 2.1](https://huggingface.co/stabilityai/stable-diffusion-2-1)
- [魔搭社区 SD 2.1](https://www.modelscope.cn/home)

## SDXL 系列

### 官方模型

| 模型 | 大小 | 说明 |
|------|------|------|
| SDXL Base 1.0 | ~6.5GB | 基础模型 |
| SDXL Refiner | ~6.5GB | 精炼模型 |
| SDXL Turbo | ~3.5GB | 快速生成 |

### 下载地址

- [Stability AI SDXL](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
- [魔搭社区 SDXL](https://www.modelscope.cn/home) - 国内高速下载
- [SDXL on Civitai](https://civitai.com/models/101055/sdxl-1-0)

## 社区精选模型

### 写实风格

| 模型 | 说明 | 下载 |
|------|------|------|
| Realistic Vision | 逼真风格 | [Civitai](https://civitai.com/models/25694) |
| Deliberate | 多样风格 | [Civitai](https://civitai.com/models/4823) |
| Juggernaut XL | 高质量 | [Civitai](https://civitai.com/models/117906) |

### 动漫风格

| 模型 | 说明 | 下载 |
|------|------|------|
| Animagine XL 3.1 | 动漫专用 | [Civitai](https://civitai.com/models/93879) |
| Pony Diffusion | 二次元 | [Civitai](https://civitai.com/models/257749) |
| AOM3 | 动漫混合 | [Civitai](https://civitai.com/models/8114) |

### 艺术风格

| 模型 | 说明 | 下载 |
|------|------|------|
| DreamShaper | 梦幻风格 | [Civitai](https://civitai.com/models/4384) |
| RevAnimated | 动画风 | [Civitai](https://civitai.com/models/7371) |
| Meichidark | 暗调风格 | [Civitai](https://civitai.com/models/8018) |

## 模型格式

| 格式 | 扩展名 | 推荐度 |
|------|--------|--------|
| SafeTensors | .safetensors | ⭐ 推荐 |
| PyTorch | .ckpt, .pt | 通用 |

## 安装位置

```
ComfyUI/models/checkpoints/
```

## 选择建议

| 需求 | 推荐模型 |
|------|----------|
| 新手入门 | SD 1.5 |
| 高质量 | SDXL |
| 写实风格 | Realistic Vision |
| 动漫风格 | Animagine XL |

## 常见问题

### Q: 模型版本怎么选

**A**: `pruned` 版本推荐，更小更快。

### Q: fp16 vs fp32

**A**: fp16 足够，显存占用更小。

### Q: 模型不兼容

**A**: 确认 ComfyUI 版本支持该模型。

## 下一步

- [Flux 模型](./flux-models) - 新一代模型
- [LoRA 模型](./lora-models) - 风格模型