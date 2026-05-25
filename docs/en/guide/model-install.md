# Model Installation Guide

ComfyUI requires various models to generate images. This guide covers downloading and installing different model types.

## Download Platforms

| Platform | Description | URL |
|----------|-------------|-----|
| 🤗 Hugging Face | Official models | [Official](https://huggingface.co/models) |
| 🏠 ModelScope | Domestic mirror, fast | [ModelScope](https://www.modelscope.cn/home) |
| 🎨 Civitai | Community models | [Civitai](https://civitai.com) |

> 💡 Recommended to use [ModelScope](https://www.modelscope.cn/home) for faster access.

## Model Directory Structure

```
ComfyUI/
└── models/
    ├── checkpoints/      # Base checkpoint models
    ├── vae/               # VAE models
    ├── loras/             # LoRA models
    ├── controlnet/       # ControlNet models
    ├── embeddings/        # Textual Inversion / Embedding
    ├── upscale_models/    # Upscale models
    └── unet/              # UNet models
```

## Checkpoint Models (Base Models)

### Download Links

| Platform | Description |
|----------|-------------|
| [🏠 ModelScope](https://www.modelscope.cn/home) | Domestic fast download, recommended |
| [Civitai](https://civitai.com/) | Largest SD model platform |
| [Hugging Face](https://huggingface.co/models?other=stable-diffusion) | Official and community models |
| [Stability AI](https://huggingface.co/stabilityai) | Official models |

### Recommended Models

| Model | Size | Use Case |
|-------|------|----------|
| SD 1.5 | ~4GB | Universal |
| SD 2.1 | ~5GB | Universal |
| SDXL | ~6.5GB | High quality |

### Installation

Place model files in `models/checkpoints/` directory.

## VAE Models

### Purpose

VAE is used for image encoding and decoding, affecting colors and details.

### Download Links

- [🏠 ModelScope](https://www.modelscope.cn/home) - Domestic fast, recommended
- [Stability AI VAE](https://huggingface.co/stabilityai/sd-vae)
- VAE collections on Civitai

### Installation

Place in `models/vae/` directory.

### Built-in VAE

Some checkpoint models have built-in VAE, enable in settings.

## LoRA Models

### Download Links

| Platform | Description |
|----------|-------------|
| [🏠 ModelScope](https://www.modelscope.cn/home) | Domestic fast, recommended |
| [Civitai](https://civitai.com/) | Main LoRA resource |
| [Hugging Face](https://huggingface.co/sdromised/Lora) | Partial LoRA |

### Installation

Place in `models/loras/` directory.

### Usage

```bash
# In node:
# Double-click canvas and search "Load LoRA"
# Select LoRA file, set strength
```

## ControlNet Models

### Model List

| Model | Purpose | Pretrained |
|-------|---------|------------|
| canny | Edge detection | v1.1 / SDXL |
| depth | Depth map | v1.1 / SDXL |
| openpose | Pose | v1.1 |
| normal | Normal map | v1.1 |
| scribble | Sketch | v1.1 |

### Download Links

- [🏠 ModelScope](https://www.modelscope.cn/home) - Domestic fast, recommended
- [lllyasviel ControlNet](https://huggingface.co/lllyasviel/ControlNet)
- [SDXL ControlNet](https://huggingface.co/diffusers/controlnet)
- Civitai

### Installation

Place in `models/controlnet/` directory.

## Embedding (Textual Inversion)

### Purpose

Used for negative prompts to quickly avoid unwanted elements.

### Common Embedding

| Name | Effect |
|------|--------|
| easynegative | Universal negative |
| bad-hands-5 | Fix hands |
| ng_deepnegative | Strong negative |

### Installation

Place in `models/embeddings/` directory.

### Usage

In prompt use:
```
<embedding:easynegative>
```

## Upscale Models

### Recommended Models

| Model | Scale | Purpose |
|-------|-------|---------|
| RealESRGAN_x4plus | 4x | Universal |
| 4x-UltraSharp | 4x | High quality |
| 4x_AnimeSharpen | 4x | Anime |

### Installation

Place in `models/upscale_models/` directory.

## Share Models with WebUI

If you already have Stable Diffusion WebUI installed, you can share models:

### Configure extra_model_paths.yaml

```yaml
# extra_model_paths.yaml
base_path: D:/AI/stable-diffusion-webui
```

Restart ComfyUI to load automatically.

## Troubleshooting

### Q: Model not showing

**A**: Restart ComfyUI, or check if file format is correct.

### Q: Out of VRAM

**A**: Use quantized models (FP16), or reduce resolution.

### Q: Slow download

**A**: Use [ModelScope](https://www.modelscope.cn/home) for faster access.

## Next Steps

- [LoRA Tutorial](../tutorial/lora) - Learn more about LoRA
- [ControlNet Tutorial](../tutorial/advanced/controlnet) - ControlNet tutorials