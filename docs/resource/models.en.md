# Stable Diffusion Model Resources

Download resources for commonly used Stable Diffusion models.

## Download Platforms

| Platform | Description | URL |
|----------|-------------|-----|
| 🤗 Hugging Face | Official models | [Official](https://huggingface.co/models) |
| 🏠 ModelScope | Domestic mirror, fast | [ModelScope](https://www.modelscope.cn/home) |
| 🎨 Civitai | Community models | [Civitai](https://civitai.com) |

> 💡 Recommended to use [ModelScope](https://www.modelscope.cn/home) for faster access.

## SD 1.5 Series

### Official Models

| Model | Version | Size | Description |
|-------|---------|------|-------------|
| SD 1.5 | pruned | ~4GB | Most versatile |
| SD 1.5 | full | ~7GB | Full version |
| SD 1.5 inpainting | - | ~4GB | Specialized repair |

### Download Links

- [Hugging Face Stable Diffusion](https://huggingface.co/stable-diffusion-v1-4)
- [ModelScope SD 1.5](https://www.modelscope.cn/home)
- [SD 1.5 on Civitai](https://civitai.com/models/1/stable-diffusion-1-5)

## SD 2.x Series

### SD 2.1

| Model | Version | Size |
|-------|---------|------|
| SD 2.1 768 | pruned | ~5GB |
| SD 2.1 512 | pruned | ~5GB |

### Download Links

- [Hugging Face SD 2.1](https://huggingface.co/stabilityai/stable-diffusion-2-1)
- [ModelScope SD 2.1](https://www.modelscope.cn/home)

## SDXL Series

### Official Models

| Model | Size | Description |
|-------|------|-------------|
| SDXL Base 1.0 | ~6.5GB | Base model |
| SDXL Refiner | ~6.5GB | Refinement model |
| SDXL Turbo | ~3.5GB | Fast generation |

### Download Links

- [Stability AI SDXL](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
- [ModelScope SDXL](https://www.modelscope.cn/home)
- [SDXL on Civitai](https://civitai.com/models/101055/sdxl-1-0)

## Community Curated Models

### Realistic Style

| Model | Description | Download |
|-------|-------------|----------|
| Realistic Vision | Realistic style | [Civitai](https://civitai.com/models/25694) |
| Deliberate | Diverse style | [Civitai](https://civitai.com/models/4823) |
| Juggernaut XL | High quality | [Civitai](https://civitai.com/models/117906) |

### Anime Style

| Model | Description | Download |
|-------|-------------|----------|
| Animagine XL 3.1 | Anime specific | [Civitai](https://civitai.com/models/93879) |
| Pony Diffusion | 2D style | [Civitai](https://civitai.com/models/257749) |
| AOM3 | Anime mix | [Civitai](https://civitai.com/models/8114) |

### Art Style

| Model | Description | Download |
|-------|-------------|----------|
| DreamShaper | Dreamlike style | [Civitai](https://civitai.com/models/4384) |
| RevAnimated | Animation style | [Civitai](https://civitai.com/models/7371) |
| Meichidark | Dark style | [Civitai](https://civitai.com/models/8018) |

## Model Format

| Format | Extension | Recommended |
|--------|-----------|-------------|
| SafeTensors | .safetensors | ⭐ Recommended |
| PyTorch | .ckpt, .pt | Universal |

## Installation Location

```
ComfyUI/models/checkpoints/
```

## Selection Guide

| Need | Recommended Model |
|------|-------------------|
| Beginner | SD 1.5 |
| High Quality | SDXL |
| Realistic Style | Realistic Vision |
| Anime Style | Animagine XL |

## FAQ

### Q: Which model version to choose?

**A**: `pruned` version recommended, smaller and faster.

### Q: fp16 vs fp32?

**A**: fp16 is sufficient, uses less VRAM.

### Q: Model incompatible?

**A**: Ensure ComfyUI version supports the model.

## Next Steps

- [Flux Models](./flux-models) - Next generation models
- [LoRA Models](./lora-models) - Style models