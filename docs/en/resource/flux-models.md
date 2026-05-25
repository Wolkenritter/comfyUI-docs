# Flux Models

Flux text-to-image models.

## Model Versions

### Flux.1 Family

| Model | License | Description |
|-------|---------|-------------|
| Flux.1 Dev | Apache 2.0 | Open source, high quality |
| Flux.1 Schnell | Apache 2.0 | Fast, 4-8 steps |
| Flux.1 Pro | Proprietary | API only, best quality |

### Model Comparison

| Model | Speed | Quality | Use Case |
|-------|-------|---------|----------|
| Dev | Medium | High | Development |
| Schnell | Fast | Good | Real-time |
| Pro | Best | Best | Production |

## Download

### Flux.1 Dev

```
ComfyUI/models/unet/
  flux1-dev.safetensors  # ~23GB
```

### Flux.1 Schnell

```
ComfyUI/models/unet/
  flux1-schnell.safetensors  # ~23GB
```

### Flux VAE

```
ComfyUI/models/vae/
  flux_vae.safetensors
```

## Sources

- [Hugging Face](https://huggingface.co/black-forest-labs/FLUX.1-dev)
- [Civitai](https://civitai.com)

## Installation

1. Download model
2. Place in appropriate folder
3. Restart ComfyUI

## Requirements

| Component | Requirement |
|-----------|-------------|
| VRAM | 24GB+ recommended |
| Storage | 50GB+ |
| RAM | 32GB+ |

## Quantized Versions

For lower VRAM:

| Version | VRAM | Quality |
|---------|------|---------|
| FP8 | ~20GB | Good |
| INT8 | ~16GB | Acceptable |
| INT4 | ~12GB | Lower |

## Next Steps

- [Flux T2I Tutorial](../tutorial/advanced/flux-t2i) - Generate images
- [Flux I2I Tutorial](../tutorial/advanced/flux-i2i) - Image to image
- [LoRA Models](./lora-models) - Style models