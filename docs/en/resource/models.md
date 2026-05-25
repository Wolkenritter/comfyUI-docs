# SD Models

Stable Diffusion checkpoint models.

## SD 1.x Models

### Popular Checkpoints

| Model | Description | Size |
|-------|-------------|------|
| v1-5-pruned-emaonly | SD 1.5 base, recommended | 2.5GB |
| v1-5-pruned | SD 1.5 full | 4GB |
| v1-5 | SD 1.5 with inference code | 7GB |

### Fine-tuned Models

| Model | Style | Description |
|-------|-------|-------------|
| dreamlike-photoreal-2.0 | Photo | Realistic images |
| deliberate_v3 | Versatile | High quality |
| realisticvision_v5.0 | Photo | Photorealistic |

## SD 2.x Models

| Model | Resolution | Description |
|-------|------------|-------------|
| 768-v1.1 | 768x768 | Higher resolution |
| 512-base-ema | 512x512 | Faster |

## SDXL Models

| Model | Description |
|-------|-------------|
| sd-xlt-base-1.0 | SDXL base |
| sd-xlt-refiner-1.0 | SDXL refiner |
| sdxl-turbo | Fast generation |

## Download Locations

### Civitai

- [SD 1.5 Models](https://civitai.com/models?type=checkpoint&base=SD1)
- [SDXL Models](https://civitai.com/models?type=checkpoint&base=SDXL)

### Hugging Face

- [Stability AI](https://huggingface.co/stabilityai)
- [CompVis](https://huggingface.co/CompVis)

## Installation

```
ComfyUI/models/checkpoints/
  v1-5-pruned-emaonly.safetensors
  realisticvision_v5.0.safetensors
  sd-xlt-base-1.0.safetensors
```

## Model Selection Guide

| Need | Recommended |
|------|-------------|
| General use | v1-5-pruned-emaonly |
| Photorealistic | realisticvision_v5.0 |
| High quality | SDXL base |
| Fast generation | SDXL Turbo |

## Tips

1. **Use safetensors**: Safer and faster
2. **Check size**: Match to your VRAM
3. **Refiner**: Use for higher quality (SDXL)

## Next Steps

- [Flux Models](./flux-models) - Flux models
- [LoRA](./lora-models) - Style models